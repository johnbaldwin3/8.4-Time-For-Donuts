var React = require('react');

var models = require('../models/recipe.js');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class AdjustRecipeContainer extends React.Component {

  constructor(props) {
    super(props);
    var recipeModel = new models.RecipeModel();

    recipeModel.set({title: 'PBJ', servings: 1});
    recipeModel.get('ingredients').add([
        {qty: 2, units: 'slices', name: 'bread'},
        {qty: .25, units: 'cups', name: 'jelly'},
        {qty: .25, units: 'cups', name: 'peanut-butter'}
    ]);

    this.multiplyServingSize = this.multiplyServingSize.bind(this);
    var servingAdjust = 1;
    this.state = {
      recipeModel,
      servingAdjust
    }
  }
  multiplyServingSize(data) {
    var servingMultiplier = data.serving;
    //console.log('servingMultiplier', servingMultiplier);
    var recipeServingSize = this.state.recipeModel.get('servings');
    //console.log('servings', this.state.recipeModel.get('servings'));

    var adjustMultiplier = servingMultiplier / recipeServingSize ;
    //console.log('adMult', adjustMultiplier);

    this.setState({servingAdjust: adjustMultiplier});

  }
  render() {

  return (
      <BaseLayout>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <ServingAdjusterForm  multiplyServingSize = {this.multiplyServingSize}/>
              <IngredientsChecklist
                servingAdjust = {this.state.servingAdjust}
                recipeModel = {this.state.recipeModel}/>

          </div>
        </div>
      </div>
    </BaseLayout>
    )
  }

}
class ServingAdjusterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleServings = this.handleServings.bind(this);

    this.state = {
      serving: ''
    }
  }
  handleServings(e) {
    this.setState({serving: e.target.value});
    //console.log('servesize', e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.multiplyServingSize(this.state);
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="servings">Makes
            <input onChange={this.handleServings} type="number" className="form-control" id="servings" placeholder="How Many Servings?" /> Servings
          </label>

          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> US
          </label>
          <label className="radio-inline disabled">
            <input className="disabled" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Metric
          </label>
          <button type="submit" className="btn btn-default">Adjust Recipe</button>
        </div>
      </form>

    )
  }
}

//onClick={(e)=>{e.preventDefault(); this.getMultiplier()}}

class IngredientsChecklist extends React.Component {
  constructor(props) {
    super(props);
    //console.log('tester', this.props.recipeModel.toJSON());
    //console.log('sa', this.props.servingAdjust);
  }
  render() {
    var recipeJSON = this.props.recipeModel.toJSON();
    var ingredientList = recipeJSON.ingredients.map((ingredients) =>{
      return (
        <form>
          <div className="checkbox">
            <label key={ingredients.get('objectId') || ingredients.cid}>
              <input type="checkbox"/>
              {ingredients.get('qty')*this.props.servingAdjust}&nbsp;
              {ingredients.get('units')}&nbsp;
              {ingredients.get('name')}
            </label>
          </div>
        </form>

      )
    })

    return(
      <div className="form-group ingredients-checklist">
        <h3>Recipe: {this.props.recipeModel.get('title')}</h3>
          {ingredientList}

      </div>
    )

  }

}

module.exports = {
  AdjustRecipeContainer
}
