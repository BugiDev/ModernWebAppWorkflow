/**
 * Created by bogdanbegovic on 9/19/14.
 */

require.config({
    baseUrl:'bower_components',
    paths: {
        'knockout': 'knockout/dist/knockout',
        'appViewModel': '../js/appViewModel',
        'toDoItem': '../js/toDoItem'
    }
});

require(['knockout', 'appViewModel'], function(ko, ToDoListViewModel) {
    'use strict';
    $(function () {
        ko.applyBindings(new ToDoListViewModel(), $('#errand-list')[0]);
        ko.applyBindings(new ToDoListViewModel(), $('#grocery-list')[0]);
    });

});
