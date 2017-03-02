var Backbone = require('backbone');

var RecipeModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: function(){
    return {
    title: '',
    servings: 1,
    ingredients: new IngredientCollection()
    }
  }
})

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
  IngredientCollection
}
