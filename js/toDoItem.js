/**
 * Created by bogdanbegovic on 9/19/14.
 */

define(['knockout'], function (ko) {
    'use strict';
    return function ToDoItem(text, isChecked) {
        var self = this;
        self.text = ko.observable(text);
        self.isChecked = ko.observable(isChecked);
    };
});
