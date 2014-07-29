var GitHubApp = GitHubApp || GitHubApp;

GitHubApp.Models = GitHubApp.Models || {};

GitHubApp.Models.User = Backbone.Model.extend({
  url: function () {
    return 'https://api.github.com/users/' + this.name;
  }
});

