var React = require('react');
//var Select = require('react-select');
var models = require('../models/recipe.js');


class RecipeFormContainer extends React.Component {
  constructor(props) {
    super(props);

    var recipeCollection = new models.RecipeCollection();
    recipeCollection.fetch().then(()=> {
      this.setState({recipeCollection});
    });

    this.addNewRecipeToCollection = this.addNewRecipeToCollection.bind(this);
    this.state = {
      recipeCollection,

    }
  }
  addNewRecipeToCollection(data) {
    this.state.recipeCollection.create(data, {success: ()=> {
      this.setState({recipeCollection: this.state.recipeCollection});
    }});

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
               <a className="navbar-brand" href="#">ChefAssist <span className="glyphicon glyphicon-cutlery"></span></a>
             </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav">

                 <li><a href="#recipe_list/">Recipe Vault</a></li>
                  <li className="active" ><a href="#recipe_form/">Recipe Creator<span className="sr-only">(current)</span></a></li>
                  <li ><a href="#app/">Serving Calculator</a></li>
               </ul>
             </div>
          </div>
        </nav>
        <div className="container">

            <RecipeForm addNewRecipeToCollection= {this.addNewRecipeToCollection} />

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
    this.handleSubmitButton = this.handleSubmitButton.bind(this);

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
    //console.log(e.target.value);
    var publicOrPrivate = (e.target.value === true);
    //console.log('publicOrPrivate', typeof publicOrPrivate);
    this.setState({public: publicOrPrivate });
  }
  handleRecipeType(e) {
    var recipeType = e.target.value;
    //console.log('recipeType', typeof recipeType);
    this.setState({recipe_type: recipeType });
  }
  handlePrepTime(e) {
    var prepTime = parseInt(e.target.value);
    //console.log('prepTime', typeof prepTime);
    this.setState({prep_time: prepTime });
  }
  handleCookTime(e) {
    var cookTime = parseInt(e.target.value);
    //console.log('cookTime', cookTime);
    this.setState({cook_time: cookTime });
  }
  handleCookTemp(e) {
    var cookTemp = parseInt(e.target.value);
    //console.log('cookTemp', cookTemp);
    this.setState({cook_temp: cookTemp });
  }
  handleFOrC(e) {
    var fOrC = (e.target.value === true);
    //console.log('fOrC', fOrC);
    this.setState({faren: fOrC });
  }
  handleYieldAmount(e) {
    var servings = parseInt(e.target.value);
    //console.log('yieldAmount', yieldAmount);
    this.setState({servings: servings });
  }
  handleYieldType(e) {
    var yieldType = e.target.value;
    //console.log('yieldType', yieldType);
    this.setState({yield_type: yieldType });
  }
  handleSubmitButton(e) {
    e.preventDefault();
    //console.log('clickers');
    this.props.addNewRecipeToCollection(this.state);
    this.state = {}
  }

  render() {

    return(
      <form>
        <div className="row">
          <div className="col-sm-2">
             <img src="https://unsplash.it/120" alt="..." className="img-thumbnail" />
             <input onChange={this.handleUrl} type="text" placeholder="Your image-url"/>
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
          <hr noshade/>
      <div className="row">
        <div className="form-group">
          <div className="col-sm-2">
            <select onChange={this.handleRecipeType} className="" title="Recipe Type..." data-width="120px">
              <option value="breakfast" defaultValue>Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div className="col-sm-2">
            <input onChange={this.handlePrepTime} type="number" className="form-control" name="prep_time" id="prep_time" placeholder="Prep Time (mins)"/>
          </div>
          <div className="col-sm-2">
            <input onChange={this.handleCookTime} type="number" className="form-control" name="cook_time" id="cook_time" placeholder="Cook Time (mins)"/>
          </div>
          <div className="col-sm-2">
            <input onChange={this.handleCookTemp} type="number" className="form-control" name="cook_time" id="cook_temp" placeholder="Cook Temp"/>
          </div>
          <select onChange={this.handleFOrC} className="" title="F" data-width="auto">
            <option value="true" defaultValue>Farenheit</option>
            <option value="false">Celsius</option>
          </select>
        </div>
      </div>
      <hr noshade/>
      <div className="row">
        <div className="form-group">
          <label htmlFor="servings" className="col-sm-2 control-label">This Recipe Will Make...</label>
          <div className="col-sm-2">
            <input onChange={this.handleYieldAmount} type="number" className="form-control" name="servings" id="servings" placeholder="Amount"/>
          </div>
          <div className="col-sm-3">
            <input onChange={this.handleYieldType} type="text" className="form-control" name="yield_type" id="yield_type" placeholder="cookies, loaves, etc..."/>
          </div>
        </div>
      </div>
      <hr noshade/>
      <IngredientInputForm />
      <hr noshade/>
        <div className="form-group">
          <div className="col-sm-2">
            <button onClick={this.handleSubmitButton} type="submit" className="btn btn-primary">Save This Recipe~</button>
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
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleIngredientName = this.handleIngredientName.bind(this);
    this.handleIngredientUnit = this.handleIngredientUnit.bind(this);

    this.state = {
      ingredientCollection,
      newIngredientRow: new models.Ingredient()
    }
  }
  handleIngredientQauntity(e) {
    var ingredQty = e.target.value;
    console.log('ingredQty', ingredQty);
    this.state.newIngredientRow.set({qty: ingredQty});
    console.log(this.state.newIngredientRow);
  }
  handleIngredientUnit(e) {
    var ingredUnit = e.target.value;
    console.log('ingredUnit', ingredUnit);
    this.state.newIngredientRow.set({units: ingredUnit});
    console.log(this.state.newIngredientRow);
  }
  handleIngredientName(e) {
    var ingredName = e.target.value;
    console.log('ingredName', ingredName);
    this.state.newIngredientRow.set({name: ingredName});
  }

  handleNewIngredient(e) {
    e.preventDefault();
    //console.log("clicked");
    var ingredientCollection = this.state.ingredientCollection;
    ingredientCollection.add(this.state.newIngredientRow.clone());
    this.setState({ingredientCollection: ingredientCollection});
    console.log('INGCOLLECT', this.state.ingredientCollection );

  }

  render() {


      return (
          <div>
            <div className="row">
              <div className="form-group ">
                <div className="col-sm-2">
                  <input onChange={this.handleIngredientQauntity} type="number" className="form-control" name="ingredient_qty"  placeholder="Amount"/>
                </div>
                <div className="col-sm-2">
                  <select onChange={this.handleIngredientUnit} className="" title="Units" data-width="120px">
                    <option value="cups" defaultValue>Cup(s)</option>
                    <option value="tblsp">Tablespoon(s)</option>
                    <option value="tsp">Teaspoon(s)</option>
                    <option value="lbs">Pounds</option>
                    <option value="each">Qty</option>
                  </select>
                </div>
                <div className="col-sm-8">
                  <div className="input-group">
                    <input onChange={this.handleIngredientName} type="text" className="form-control" name="ingredient_input"  placeholder="Ingredient Name..."/>
                      <span className="input-group-btn">
                        <button onClick={this.handleNewIngredient} className="btn btn-success" type="button"><span className="glyphicon glyphicon-plus"></span>

                        </button>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          <NewIngredientListAddRow handleNewIngredient={this.handleNewIngredient} ingredientCollection={this.state.ingredientCollection} />
        </div>

          )

        }

    }

class NewIngredientListAddRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientCollection: this.props.ingredientCollection
    }

  }
  componentWillReceiveProps(nextProps){
    this.setState({ingredientCollection: this.props.ingredientCollection})
    //console.log(this.state, 'cWRP');
  }
  render() {
      var newIngredientRow = this.state.ingredientCollection.map(ingred => {
        return (
          <div key={ingred.cid} className="row">
            <hr noshade/>
            <div className="col-sm-2">
              <input onChange={this.handleIngredientQauntity} type="number" className="form-control" name="ingredient_qty"  placeholder="Amount"/>
            </div>
            <div className="col-sm-2">
              <select className="" title="Units" data-width="120px">
                <option value="cups">Cup(s)</option>
                <option value="tblsp">Tablespoon(s)</option>
                <option value="tsp">Teaspoon(s)</option>
                <option value="lbs">Pounds</option>
                <option value="each">Qty</option>
              </select>
            </div>
            <div className="col-sm-8">
              <div className="input-group">
                <input type="text" className="form-control" name="ingredient_input"  placeholder="Ingredient Name..."/>
                  <span className="input-group-btn">
                    <button onClick={this.props.handleNewIngredient} className="btn btn-success" type="button"><span className="glyphicon glyphicon-plus"></span></button></span>
              </div>
            </div>
            <hr noshade/>
          </div>
    );
  })

  return (
    <div className="row">
      {newIngredientRow}
    </div>
  )
}

}

module.exports = {
  RecipeFormContainer
}
