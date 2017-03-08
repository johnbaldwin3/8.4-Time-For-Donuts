var React = require('react');

function isActiveClass() {

}

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

               <li><a href="#recipe_list/">Recipe Vault</a></li>
                <li><a href="#recipe_form/">Recipe Creator</a></li>
                <li className="active"><a href="#app/">Serving Calculator<span className="sr-only">(current)</span></a></li>
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




// function Header(props) {
//   return (
//     <h1>Welcome Back, Chef! The Kitchen is Yours...</h1>
//   )
// }
//
// function LoginHeader(props) {
//   return (
//     <h1>Please Login to ChefAssist</h1>
//   )
// }

module.exports = {
  BaseLayout
}
