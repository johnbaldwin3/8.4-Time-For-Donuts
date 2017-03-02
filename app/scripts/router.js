var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var AdjustRecipeContainer = require('./components/app.jsx').AdjustRecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '':'index'

  },
  index: function() {
    ReactDOM.render(
      React.createElement(AdjustRecipeContainer),
      document.getElementById('app')
    )
  }


});

var appRouter = new AppRouter();

module.exports = {
  appRouter
}
