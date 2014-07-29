/* global Backbone, console */

var GitHubApp = GitHubApp || {};

var GitHubAppRouter = Backbone.Router.extend({
  routes: {
    ''              : 'home',
    'user/:username': 'user',
    'statistics'    : 'stats'
  },
  initialize: function () {
    'use strict';
    this.users = new GitHubApp.Models.UserCollection();
  },
  home: function () {
    'use strict';
    GitHubApp.Controllers.FrontCtrl.setView({
      partial: 'partials/home.tpl',
      view   : GitHubApp.Views.Home,
      model  : this.users
    });
    GitHubApp.Controllers.FrontCtrl.render();
  },
  user: function (login) {
    'use strict';
    var match = this.users.where({ login: login });
    if (!match || !match.length) {
      throw new Error('User not found!');
    }
    var user = match[0];
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
