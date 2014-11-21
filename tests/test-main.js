/**
 * Created by bogdanbegovic on 11/21/14.
 */

var tests = Object.keys(window.__karma__.files).filter(function(file){
    'use strict';
    return (/Spec\.js$/.test(file));
});

var allTestFiles = [];
var TEST_REGEXP = /Spec\.js$/;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    baseUrl:'/base',
    paths: {
        'knockout': 'bower_components/knockout/dist/knockout',
        'appViewModel': 'js/appViewModel',
        'toDoItem': 'js/toDoItem'
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});