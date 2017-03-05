var Backbone = require('backbone');

var RecipeModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: function(){
    return {
    title: '',
    servings: 1,
    ingredients: new IngredientCollection(),
    public: true,
    recipe_type: '',
    prep_time: 1,
    cook_time: 1,
    cook_temp: 1,
    yield_amount: 1,
    yield_type: 'units',
    faren: true,
    instructions: '',
    img_url: '',
    chef_name: ''
    }
  }
})

var RecipeCollection = Backbone.Collection.extend({
  model: RecipeModel,
  url: 'https://jb3-serve.herokuapp.com/classes/Recipes/',
  parse: function(data){
    return data.results;
  }

});

var Ingredient = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    name: '',
    units: '',
    qty: 1
  }
})

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient
})
// var RecipeModelCollection = Backbone.Collection.extend({
//   model: RecipeModel
// })

module.exports = {
  RecipeModel,
  Ingredient,
  IngredientCollection,
  RecipeCollection
}
