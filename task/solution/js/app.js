/* global Backbone, console */

var GitHubApp = GitHubApp || {};

var GitHubAppRouter = Backbone.Router.extend({
  routes: {
    ''              : 'home',
    'user/:username': 'user',
    'statistics'    : 'stats'
  },
  home: function () {
    'use strict';
    GitHubApp.Controllers.FrontCtrl.setView({
      partial: 'partials/home.tpl',
      view   : GitHubApp.Views.Home,
      model  : GitHubApp.Models.UserCollection
    });
    GitHubApp.Controllers.FrontCtrl.render();
  },
  user: function () {
    'use strict';
    console.log('user');
  },
  stats: function () {
    'use strict';
    console.log('stats');
  }
});

GitHubApp.router = new GitHubAppRouter();

Backbone.history.start();
