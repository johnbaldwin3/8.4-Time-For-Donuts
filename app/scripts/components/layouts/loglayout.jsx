var React = require('react');
var LoginBaseLayout = require('./loginbase.jsx').LoginBaseLayout;

function LoginLayout(props) {
  return (

    <LoginBaseLayout {...props}>
      <div>
        {props.children}
      </div>
    </LoginBaseLayout>

  );
}

module.exports = {
  LoginLayout
};
