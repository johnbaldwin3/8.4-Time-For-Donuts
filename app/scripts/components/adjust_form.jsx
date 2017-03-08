var React = require('react');

var models = require('../models/recipe.js');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class AdjustRecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    //var recipeModel = new models.RecipeModel();
    //var recipeCollection = new models.RecipeCollection();
    var currentRecipe = new models.RecipeModel();
    currentRecipe.set('objectId', props.id);
    //console.log('tpi', this.props.id);
    currentRecipe.fetch().then(()=> {
      //currentRecipe = recipeCollection.findWhere({objectId: this.props.id});
      //console.log('currentRecipe', currentRecipe);
      this.setState({currentRecipe: currentRecipe});
      this.forceUpdate();
    });

    this.multiplyServingSize = this.multiplyServingSize.bind(this);
    var servingAdjust = 1;
    this.state = {
      servingAdjust,
      currentRecipe: currentRecipe,
      //recipeCollection
    }
  }
  multiplyServingSize(data) {
    var servingMultiplier = data.serving;
    var recipeServingSize = this.state.currentRecipe.get('servings');
    var adjustMultiplier = servingMultiplier / recipeServingSize ;

    this.setState({servingAdjust: adjustMultiplier});

  }
  render() {

  return (
      <BaseLayout>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <IngredientsChecklist servingAdjust = {this.state.servingAdjust}
                currentRecipe = {this.state.currentRecipe}/>
              <ServingAdjusterForm  multiplyServingSize = {this.multiplyServingSize}/>
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
          <div>
            <button type="submit" className="btn btn-default">Adjust Recipe</button>
          </div>

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
    this.state = {
      ingredients: this.props.currentRecipe.get('ingredients'),

    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps);
    this.setState({currentRecipe: nextProps.currentRecipe});
  }

  render() {
    console.log('tpc', this.props.currentRecipe);
    //var recipeJSON = this.props.currentRecipe.toJSON();
  console.log("recpJS", this.props.currentRecipe.get('ingredients'));
    //var recipeIngreds = recipeJSON.ingredients;
    //console.log('recingred', recipeIngreds);
    //console.log(recipeJSON.ingredients[0].name);
    var ingredientList = this.props.currentRecipe.get('ingredients').map((ingredient) =>{
      return (
        <form>
          <div className="checkbox">
            <label key={ ingredient.cid}>
              <input type="checkbox"/>
              {ingredient.qty*this.props.servingAdjust}&nbsp;
              {ingredient.units}&nbsp;
              {ingredient.name}
            </label>
          </div>
        </form>

      )
    })

    return(
      <div className="form-group ingredients-checklist">
        <div className="row">
          <div className="col-md-3">
            <img src={this.props.currentRecipe.get('img_url')} />
          </div>
          <div className="col-md-5 pull-left">
            <h2>{this.props.currentRecipe.get('title')}</h2>
            <h5>A Meal By: {this.props.currentRecipe.get('chef_name')}</h5>
            <h4>Normal Servings: {this.props.currentRecipe.get('servings')} {this.props.currentRecipe.get('yield_type')} </h4>
            {ingredientList}
          </div>
          <div className="col-md-3">
            <h3>Details: </h3>
            <h5> Recipe Type:  {this.props.currentRecipe.get('recipe_type')}</h5>
            <h5> Prep Time:  {this.props.currentRecipe.get('prep_time')} minutes</h5>
            <h5> Cook Time:  {this.props.currentRecipe.get('cook_time')} minutes</h5>
            <h5> Cook Temperature:  {this.props.currentRecipe.get('cook_temp')}&deg; {(this.props.currentRecipe.get('faren')) ? 'F' :
            'C' }</h5>
          <h5> Publicly Listed:  {(this.props.currentRecipe.get('public')) ? 'Yes' : 'No'}</h5>
          </div>

        </div>
        <div className="row">

        </div>
      </div>
    )

  }

}

module.exports = {
  AdjustRecipeContainer
}
