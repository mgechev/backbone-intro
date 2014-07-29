/* global _, $ */

var GitHubApp = GitHubApp || {};

GitHubApp.Controllers = GitHubApp.Controllers || {};

GitHubApp.Controllers.FrontCtrl = {
  setView: function (p) {
    'use strict';
    this._current = p;
  },
  render: function () {
    'use strict';
    if (this.currentView) {
      this.currentView.remove();
    }
    GitHubApp.TemplateManager.get(this._current.partial)
    .then(function (partial) {
      var view = new this._current.view({
        model: this._current.model
      });
      var viewWrapper = $('<span/>');
      $('#main-container').append(viewWrapper);
      view.$el = view.el = viewWrapper;
      view.$el.empty();
      view.template = _.template(partial);
      view.render();
      view.delegateEvents();
      this.currentView = view;
    }.bind(this));
    return this;
  }
};
