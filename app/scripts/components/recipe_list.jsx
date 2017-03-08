var React = require('react');

var models = require('../models/recipe.js');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class RecipeListContainer extends React.Component {

  constructor(props) {
    super(props);
    var recipeCollection = new models.RecipeCollection();
    //var currentRecipe = new models.RecipeModel();

    recipeCollection.fetch().then(()=> {

      this.setState({recipeCollection});
      //this.forceUpdate();
      //console.log(recipeCollection,'rC');
    });

    this.state = {
      recipeCollection,
      //id: this.props.id

    }
  }

  render() {
    return (
      <BaseLayout>

        <div className="container">

          <div className="row">
            <RecipeList recipeCollection={this.state.recipeCollection}/>
          </div>

        </div>

      </BaseLayout>
      )
  }

}
class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  //  var adjustableRecipe = this.state.recipeCollection;

  this.state = {id: this.props.id}
  }
  handleAdjustButton(e) {
    console.log('rCAB', e.target.value);
  }

  render() {

    var recipeList = this.props.recipeCollection.map((recipe)=>{
        console.log(recipe, 'recipe');
      return (
        <div key={recipe.get('objectId')} className="col-sm-3 col-md-4">
          <div className="thumbnail">
            <img src={recipe.get('img_url')} alt="..."/>
            <div className="caption">
              <h3>{recipe.get('title')}</h3>
              <ul className="list-group">
                <li className="list-group-item list-group-item-info">A dish by: {recipe.get('chef_name')}</li>
                <li className="list-group-item">Makes: {recipe.get('servings')}&nbsp;{recipe.get('yield_type')}</li>
              </ul>
              <p>Prep Time: {recipe.get('prep_time')} minutes. Cook Time: {recipe.get('cook_time')} minutes.</p>
              <p> Type of Dish: {recipe.get('recipe_type')}</p>
              <p><a href={"#app/" + recipe.get('objectId')} className="btn btn-success" role="button" value={recipe.get('objectId')}>View &amp; Adjust</a></p>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div>
        {recipeList}
      </div>
    )
  }
}


module.exports = {
  RecipeListContainer
}
