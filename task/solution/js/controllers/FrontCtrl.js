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
    GitHubApp.TemplateManager.get(this._current.partial)
    .then(function (partial) {
      var view = new this._current.view({
        model: new this._current.model()
      });
      view.$el = view.el = $('#main-container');
      view.template = _.template(partial);
      view.render();
      view.delegateEvents();
    }.bind(this));
    return this;
  }
};
