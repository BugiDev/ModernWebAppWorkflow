/**
 * Created by bogdanbegovic on 9/19/14.
 */
define(['knockout', 'toDoItem'], function (ko, ToDoItem) {
    'use strict';
    return function ToDoListViewModel() {
        var self = this;

        self.toDoInputedText = ko.observable();
        self.toDoItems = ko.observableArray();

        self.addNewToDoItem = function () {
            if (self.toDoInputedText() !== '' && self.toDoInputedText() !== undefined) {
                self.toDoItems.push(new ToDoItem(self.toDoInputedText(), false));
                self.toDoInputedText('');
            }
        };
    };
});