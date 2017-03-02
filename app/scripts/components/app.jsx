var React = require('react');

var models = require('../models/recipe.js');

class AdjustRecipeContainer extends React.Component {

  constructor(props) {
    super(props);
    var recipeModel = new models.RecipeModel();

    recipeModel.set({title: 'PBJ', })
    // var ingredientCollection = new models.IngredientCollection();
    recipeModel.get('ingredients').add([
        {qty: 2, units: 'qty', name: 'slice of bread'},
        {qty: .25, units: 'cups', name: 'jelly'},
        {qty: .25, units: 'cups', name: 'peanut-butter'}
    ])

    recipeModel.set({title: 'PBJ', servings: 1})
    //this.recipeModel = this.recipeModel.bind(this);
    console.log('rmc', recipeModel);
    this.state = {
      recipeModel
    }
  }
  render() {

  return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Makes   <input type="email" className="form-control" id="exampleInputEmail1" placeholder="How Many Servings?" /> Servings </label>

                  <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> US
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Metric
                  </label>
                  <button type="submit" className="btn btn-default">Adjust Recipe</button>
                  </div>

                    <IngredientsChecklist

                      recipeModel = {this.recipeModel}/>

            </form>
          </div>
        </div>
      </div>

    )
  }

}

class IngredientsChecklist extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    return(
      <div className="form-group ingredients-checklist">
        <div className="checkbox">
          <label>
            <input type="checkbox"/> Ingredients Stuff
          </label>
        </div>
      </div>
    )

  }

}

module.exports = {
  AdjustRecipeContainer
}
