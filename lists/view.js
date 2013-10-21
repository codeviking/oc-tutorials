define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        Button      = require('common/ui/Button'),
        Model       = require('common/Model'),
        ArrayList   = require('common/ArrayList'),
        ListView    = require('common/ui/ListView'),
        ModuleView  = require('common/platform/ModuleView');

    var City = Class.create(
        Model,
        {
            initialize : function($super, props) {
                props.template = '<strong>{{city}}</strong> <span style="text-decoration: underline;">{{state}}</span>';
                $super(props);
            }
        }
    );

    return Class.create(
        ModuleView,
        {
            init: function() {

                var buttonsContainer = document.getElementById('buttons'),
                    cities      = new ArrayList(),
                    listView    = new ListView({ arrayList : cities });

                cities.push(
                    new City({
                        city    : 'Seattle',
                        state   : 'WA'
                    })
                );

                cities.push(
                    new City({
                        city    : 'Portland',
                        state   : 'OR'
                    })
                );

                cities.push(
                    new City({
                        city    : 'San Francisco',
                        state   : 'CA'
                    })
                );

                listView.render(document.body);

                new Button({
                    text    : 'Push Item',
                    click   : function() {
                        cities.push(
                            new City({
                                city    : 'New York',
                                state   : 'NY'
                            })
                        );
                    }
                }).render(buttonsContainer);

                new Button({
                    text    : 'Pop Item',
                    click   : function() {
                        cities.pop();
                    }
                }).render(buttonsContainer);

                new Button({
                    text    : 'Splice',
                    click   : function() {
                        cities.splice(1, 1, new City({
                            city    : 'Atlanta',
                            state   : 'GA'
                        }));
                    }
                }).render(buttonsContainer);
            },

            stopped: function() {
                // Called after the application has been fully transitioned out of view and the module controller's
                // stopped() method has completed.
            }
        }
    );
});
