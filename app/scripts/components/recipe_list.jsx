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
    <div>
      <nav className="navbar navbar-inverse navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
             <a className="navbar-brand" href="#">ChefAssist <span className="glyphicon glyphicon-cutlery"></span></a>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
               <li className="active"><a href="#recipe_list/">Recipe Vault<span className="sr-only">(current)</span></a></li>
                <li><a href="#recipe_form/">Recipe Creator</a></li>
                <li ><a href="#app/">Serving Calculator</a></li>
             </ul>
           </div>
        </div>
      </nav>
      <div className="container">

        <div className="row">
          <RecipeList recipeCollection={this.state.recipeCollection}/>
        </div>

      </div>
    </div>
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
              <p><a href={"#app/" + recipe.get('objectId')} className="btn btn-success" role="button" value={recipe.get('objectId')}>Adjust Servings</a> <a href="#" className="btn btn-default" role="button">View Recipe</a></p>
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
