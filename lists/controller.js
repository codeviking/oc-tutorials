define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController');

    return Class.create(
        ModuleController,
        {
            init: function() {
                // Called prior to the application being displayed. Called in parallel to the module view's init().
            },

            beforeStart: function() {
                // Called prior the application being displayed, but after both the module controller's init() and
                // module view's init() are complete.
            },

            started: function() {
                // Called after the application has been transitioned fully into view.
            },

            beforePause: function() {
                // Called prior to the application being paused.
            },

            paused: function() {
                // Called after the module has been fully transitioned out of view.
            },

            beforeResume: function() {
                // Called prior to an application being resumed, before it's transitioned into view.
            },

            resumed: function() {
                // Called after the module has been fully transitioned into view.
            },

            beforeStop: function() {
                // Called before stopping the application, prior to the application being transitioned out of view.
            },

            stopped: function() {
                // Called after the application has been transitioned fully out of view.
            }
        }
    );
});
