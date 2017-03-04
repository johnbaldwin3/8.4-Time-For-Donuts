var React = require('react');

var models = require('../models/recipe.js');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class RecipeListContainer extends React.Component {

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
             <a className="navbar-brand" href="#">ChefAssist</a>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
               <li ><a href="#app/">Serving Calculator</a></li>
               <li className="active"><a href="#recipe_list/">Recipe Vault<span className="sr-only">(current)</span></a></li>
                <li><a href="#recipe_form/">Recipe Creator</a></li>
             </ul>
           </div>
        </div>
      </nav>
      <div className="container">


      </div>
    </div>
    )
  }

}
class RecipeList extends React.Component {
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
    <div></div>
    )
  }
}

//onClick={(e)=>{e.preventDefault(); this.getMultiplier()}}

module.exports = {
  RecipeListContainer
}
