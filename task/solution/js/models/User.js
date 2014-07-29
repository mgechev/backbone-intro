/* global Backbone */

var GitHubApp = GitHubApp || GitHubApp;

GitHubApp.Models = GitHubApp.Models || {};

GitHubApp.Models.User = Backbone.Model.extend({
  url: function () {
    'use strict';
    return 'https://api.github.com/users/' + this.name;
  }
});

