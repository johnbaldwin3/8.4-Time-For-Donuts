var React = require('react');
var Select = require('react-select');
var models = require('../models/recipe.js');


class RecipeFormContainer extends React.Component {
  constructor(props) {
    super(props);
    var recipeModel = new models.RecipeModel();
    var recipeCollection = new models.RecipeCollection();
    this.state = {
      recipeCollection,
      recipeModel
    }
  }

render() {


  return(
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
               <li><a href="#recipe_list/">Recipe Vault</a></li>
                <li className="active" ><a href="#recipe_form/">Recipe Creator<span className="sr-only">(current)</span></a></li>
             </ul>
           </div>
        </div>
      </nav>

      <div className="container">


        <div className="row">

            <RecipeForm />

          </div>
        </div>
      </div>
      )
    }

}

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleRecipeTitle = this.handleRecipeTitle.bind(this);
    this.handleChefName = this.handleChefName.bind(this);
    this.handlePubOrPriv = this.handlePubOrPriv.bind(this);
    this.handleRecipeType = this.handleRecipeType.bind(this);
    this.handlePrepTime = this.handlePrepTime.bind(this);
    this.handleCookTime = this.handleCookTime.bind(this);
    this.handleCookTemp = this.handleCookTemp.bind(this);
    this.handleFOrC = this.handleFOrC.bind(this);
    this.handleYieldAmount = this.handleYieldAmount.bind(this);
    this.handleYieldType = this.handleYieldType.bind(this);

    this.state = {
      img_url: '',
      title: '',
      chef_name: '',
      public: true,
      recipe_type: '',
      prep_time: 0,
      cook_time: 0,
      cook_temp: 0,
      faren: true,
      yield_amount: 1,
      yield_type: '',




    }
  }
  handleUrl(e) {
    var imageUrl = e.target.value;
    //console.log('imgUrl', imageUrl);
    this.setState({img_url: imageUrl });
  }
  handleRecipeTitle(e) {
    var recipeTitle = e.target.value;
    //console.log('recipeTitle', recipeTitle);
    this.setState({title: recipeTitle });
  }
  handleChefName(e) {
    var chefName = e.target.value;
    //console.log('chefName', chefName);
    this.setState({chef_name: chefName });
  }
  handlePubOrPriv(e) {
    var publicOrPrivate = e.target.value;
    //console.log('publicOrPrivate', publicOrPrivate);
    this.setState({public: publicOrPrivate });
  }
  handleRecipeType(e) {
    var recipeType = e.target.value;
    //console.log('recipeType', recipeType);
    this.setState({recipe_type: recipeType });
  }
  handlePrepTime(e) {
    var prepTime = e.target.value;
    //console.log('prepTime', prepTime);
    this.setState({prep_time: prepTime });
  }
  handleCookTime(e) {
    var cookTime = e.target.value;
    //console.log('cookTime', cookTime);
    this.setState({cook_time: cookTime });
  }
  handleCookTemp(e) {
    var cookTemp = e.target.value;
    //console.log('cookTemp', cookTemp);
    this.setState({cook_temp: cookTemp });
  }
  handleFOrC(e) {
    var fOrC = e.target.value;
    //console.log('fOrC', fOrC);
    this.setState({faren: fOrC });
  }
  handleYieldAmount(e) {
    var yieldAmount = e.target.value;
    console.log('yieldAmount', yieldAmount);
    this.setState({yield_amount: yieldAmount });
  }
  handleYieldType(e) {
    var yieldType = e.target.value;
    console.log('yieldType', yieldType);
    this.setState({yield_type: yieldType });
  }

  render() {

    return(
      <form>
        <div className="row">
          <div className="col-sm-2">
             <img src="https://unsplash.it/120" alt="..." className="img-thumbnail" />
             <input onChange={this.handleUrl} type="text" placeholder="image-url"/>
          </div>
          <div className="form-group  col-sm-9">
            <label htmlFor="recipe_name" className="col-sm-2 control-label">Recipe Name</label>
            <div className="col-sm-10">
              <input onChange={this.handleRecipeTitle} type="text" className="form-control" name="recipe_name" id="recipe_name" placeholder="The name of your dish..."/>
            </div>
          </div>
          <div className="form-group  col-sm-9">
            <label htmlFor="chef_name" className="col-sm-2 control-label">Chef's Name</label>
            <div className="col-sm-10">
              <input onChange={this.handleChefName} type="text" className="form-control" name="chef_name" id="chef_name" placeholder="Your name..."/>
            </div>
            <label className="radio-inline">
              <input onChange={this.handlePubOrPriv} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true"/> Public
            </label>
            <label className="radio-inline">
              <input onChange={this.handlePubOrPriv} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false"/> Private
            </label>
          </div>
        </div>
      <div className="row">
        <div className="form-group">
          <div className="col-sm-2">
            <select onChange={this.handleRecipeType} className="selectpicker" title="Recipe Type..." data-width="120px">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div className="col-sm-2">
            <input onChange={this.handlePrepTime} type="number" className="form-control" name="prep_time" id="prep_time" placeholder="Prep Time"/>
          </div>
          <div className="col-sm-2">
            <input onChange={this.handleCookTime} type="number" className="form-control" name="cook_time" id="cook_time" placeholder="Cook Time"/>
          </div>
          <div className="col-sm-2">
            <input onChange={this.handleCookTemp} type="number" className="form-control" name="cook_time" id="cook_temp" placeholder="Cook Temp"/>
          </div>
          <select onChange={this.handleFOrC} className="selectpicker" title="F" data-width="auto">
            <option value="true">Farenheit</option>
            <option value="false">Celsius</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label htmlFor="yield_amount" className="col-sm-2 control-label">This Recipe Will Make...</label>
          <div className="col-sm-2">
            <input onChange={this.handleYieldAmount} type="number" className="form-control" name="yield_amount" id="yield_amount" placeholder="Amount"/>
          </div>
          <div className="col-sm-3">
            <input onChange={this.handleYieldType} type="text" className="form-control" name="yield_type" id="yield_type" placeholder="cookies, loaves, etc..."/>
          </div>
        </div>
      </div>

      <IngredientInputForm />


        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Save This Recipe~</button>
          </div>
        </div>
      </form>

    )
  }
}

class IngredientInputForm extends React.Component {
  constructor(props) {
    super(props);
    var ingredientCollection = new models.IngredientCollection();
    this.handleIngredientQauntity = this.handleIngredientQauntity.bind(this);

    this.state = {
      qty: 0,
    }
    }
  handleIngredientQauntity(e) {
    var ingredQty = e.target.value;
    console.log('ingredQty', ingredQty);
    this.setState({qty: ingredQty });
  }
  render() {
      return (
        <div className="row">
            <div className="form-group">
              <div className="col-sm-2">
                <input onChange={this.handleIngredientQauntity} type="number" className="form-control" name="ingredient_qty"  placeholder="Amount"/>
              </div>
            <div className="col-sm-3">
              <select className="selectpicker" title="Units" data-width="120px">
                <option value="cups">Cup(s)</option>
                <option value="tblsp">Tablespoon(s)</option>
                <option value="tsp">Teaspoon(s)</option>
                <option value="lbs">Pounds</option>
                <option value="each">Qty</option>
              </select>
            </div>
            <div className="col-sm-5">
              <div className="input-group">
              <input type="text" className="form-control" name="ingredient_input"  placeholder="Ingredient Name..."/> <span className="input-group-btn">
        <button className="btn btn-success" type="button"><span className="glyphicon glyphicon-plus"></span></button>
      </span>
    </div>
            </div>
          </div>
        </div>

      )

    }

}

module.exports = {
  RecipeFormContainer
}
