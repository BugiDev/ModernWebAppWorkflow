
/**
 * Created by bogdanbegovic on 11/21/14.
 */

define([
    'knockout',
    'appViewModel'
],function(ko, ToDoListViewModel){
    'use strict';

    describe('ToDoListViewModel - ', function () {

        var toDoListViewModel = {};

        beforeEach(function () {
            toDoListViewModel = new ToDoListViewModel();
        });

        it('should save input text \'New ToDo task\'', function () {
            toDoListViewModel.toDoInputedText('New ToDo task');
            expect(ko.utils.unwrapObservable(toDoListViewModel.toDoInputedText)).toEqual('New ToDo task');
        });

        it('should add new ToDoItem in list', function () {
            toDoListViewModel.toDoInputedText('New ToDo task');
            toDoListViewModel.addNewToDoItem();
            expect(toDoListViewModel.toDoItems().length).toBeGreaterThan(0);
        });

        it('test should fail', function () {
            expect(true).toEqual(false);
        });

    });

});
