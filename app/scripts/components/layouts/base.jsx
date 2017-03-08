var React = require('react');
var Backbone = require('backbone');


function BaseLayout(props) {


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

               <li className={activeClass('recipe_list/')}><a href="#recipe_list/">Recipe Vault</a></li>
                <li className={activeClass('recipe_form/')}><a href="#recipe_form/">Recipe Creator</a></li>
                <li className={activeClass('app/')}><a href="#app/">Recipe View and Serving Calculator</a></li>
             </ul>
           </div>
        </div>
      </nav>
      <div className="container">

        {props.children}

      </div>
    </div>
  )

}


function isActive (url) {
  return Backbone.history.fragment == url;
}

function activeClass(url) {
  return isActive(url) ? 'active' : '';
}
module.exports = {
  BaseLayout
}
