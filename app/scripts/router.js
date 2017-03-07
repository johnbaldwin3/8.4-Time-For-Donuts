var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var AdjustRecipeContainer = require('./components/adjust_form.jsx').AdjustRecipeContainer;
var parse = require('./parse');
var LoginContainer = require('./components/login_container.jsx').LoginContainer;
var User = require('./models/user.js').User;
var RecipeListContainer = require('./components/recipe_list.jsx').RecipeListContainer;
var RecipeFormContainer = require('./components/recipe_form.jsx').RecipeFormContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '':'login',
    'app/:id':'app',
    'recipe_list/': 'recipeList',
    'recipe_form/': 'recipeForm'

  },
  initialize: function(){
      // Do the parse setup to set headers and configure API url
      parse.setup({
        base_api_url: 'https://jb3-serve.herokuapp.com'
      });
    },
  execute: function(callback, args, name) {
      var user = User.current();
      if (!user && name != 'login') {
        this.navigate('', {trigger: true});
        return false;
      }

      if(user && name == 'login'){
        this.navigate('recipe_list/', {trigger: true});
        return false;
      }

      return Backbone.Router.prototype.execute.apply(this, arguments);
  },
  login: function() {
   ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    )
  },
  app: function(id) {
    console.log(id);
    ReactDOM.render(
      React.createElement(AdjustRecipeContainer, {id: id}),
      document.getElementById('app')
    )
  },
  recipeList: function() {
    ReactDOM.render(
      React.createElement(RecipeListContainer),
      document.getElementById('app')
    )
  },
  recipeForm: function() {
    ReactDOM.render(
      React.createElement(RecipeFormContainer),
      document.getElementById('app')
    )
  },



});

var appRouter = new AppRouter();

module.exports = {
  appRouter
}
