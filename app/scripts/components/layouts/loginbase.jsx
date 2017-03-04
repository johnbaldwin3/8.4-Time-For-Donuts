var React = require('react');


function LoginBaseLayout (props) {

return (

    <div>
      <nav className="navbar navbar-inverse navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">

             <a className="navbar-brand" href="#">ChefAssist</a>
           </div>
        </div>
      </nav>
      <div className="container">
        {props.children}
      </div>
    </div>
  )


}

module.exports = {
  LoginBaseLayout
};
