var GitHubApp = GitHubApp || GitHubApp;

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.Home = Backbone.View.extend({
  events: {
    'click #add-btn': 'addUser'
  },

  addUser: function () {
    alert(42);
    var input = this.el.find('#user-input');
    this.model.append(new GitHubApp.Models.User({
      name: input.val()
    }));
    input.val('');
  },

  render: function () {
    console.log(1);
    this.el.html(this.template({ users: this.model }));
    return this;
  }
});
