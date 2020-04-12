<?php


namespace FoF\DiscussionLanguage\Listeners;


use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use FoF\DiscussionLanguage\Api\Serializers\DiscussionLanguageSerializer;
use FoF\DiscussionLanguage\DiscussionLanguage;
use Illuminate\Contracts\Events\Dispatcher;

class AddRelationships
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'getRelationship']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'loadApiRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeRelationship']);
    }

    public function getRelationship(GetModelRelationship $event) {
        if ($event->isRelationship(Discussion::class, 'language')) {
            return $event->model->hasOne(DiscussionLanguage::class, 'id', 'language_id');
        }
    }

    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'discussionLanguages')) {
            return $event->serializer->hasMany($event->model, DiscussionLanguageSerializer::class, 'discussionLanguages');
        }

        if ($event->isRelationship(DiscussionSerializer::class, 'language')) {
            return $event->serializer->hasOne($event->model, DiscussionLanguageSerializer::class, 'language');
        }
    }

    public function loadApiRelationship(WillSerializeData $event)
    {
        // Expose the complete tag list to clients by adding it as a
        // relationship to the /api endpoint. Since the Forum model
        // doesn't actually have a tags relationship, we will manually load and
        // assign the tags data to it using an event listener.
        if ($event->isController(ShowForumController::class)) {
            $event->data['discussionLanguages'] = DiscussionLanguage::get();
        }
    }

    public function includeRelationship(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude(['discussionLanguages']);
        }

        if ($event->isController(ListDiscussionsController::class)) {
            $event->addInclude(['language']);
        }
    }
}
