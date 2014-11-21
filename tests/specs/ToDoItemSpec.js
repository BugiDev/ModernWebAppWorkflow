
/**
 * Created by bogdanbegovic on 11/21/14.
 */

define([
    'knockout',
    'toDoItem'
],function(ko, ToDoItem){
    'use strict';

    describe('ToDoItem - ', function () {

        var toDoItem = {};

        beforeEach(function () {
            toDoItem = new ToDoItem('Work out!', false);
        });

        it('should exist', function () {
            expect(toDoItem).toBeDefined();
        });

        it('should have text Work out!', function () {
            expect(ko.utils.unwrapObservable(toDoItem.text)).toEqual('Work out!');
        });

        it('should not be checked', function () {
            expect(ko.utils.unwrapObservable(toDoItem.isChecked)).toEqual(false);
        });

    });

});

