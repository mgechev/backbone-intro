var GitHubApp = GitHubApp || GitHubApp;

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.Home = Backbone.View.extend({
  events: {
    'click #add-btn'   : 'addUser',
    'click .delete-btn': 'removeUser'
  },

  initialize: function () {
    this.model.on('change', this.render, this);
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);
  },

  addUser: function () {
    var input = this.el.find('#user-input');
    this.model.add(new GitHubApp.Models.User({
      name: input.val()
    }));
    input.val('');
  },

  removeUser: function (e) {
    var index = $(e.target).data('index');
    this.model.remove(this.model.at(index));
  },

  render: function () {
    this.el.html(this.template({ users: this.model.toJSON() }));
    return this;
  }
});
