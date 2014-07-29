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
      model  : new GitHubApp.Models.UserCollection()
    });
    GitHubApp.Controllers.FrontCtrl.render();
  },
  user: function (login) {
    'use strict';
    var user = new GitHubApp.Models.User({
      name: login
    });
    user.fetch()
      .done(function () {
        GitHubApp.Controllers.FrontCtrl.setView({
          partial: 'partials/user.tpl',
          view   : GitHubApp.Views.User,
          model  : user
        });
        GitHubApp.Controllers.FrontCtrl.render();
      });
  },
  stats: function () {
    'use strict';
    console.log('stats');
  }
});

GitHubApp.router = new GitHubAppRouter();

Backbone.history.start();
