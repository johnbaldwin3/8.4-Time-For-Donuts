var React = require('react');
var Backbone = require('backbone');

var LoginLayout = require('./layouts/loglayout.jsx').LoginLayout;

var User = require('../models/user').User;

class LoginContainer extends React.Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }
  login(credentials){
    console.log('logcreds', credentials);
    User.login(credentials, function(user){
      Backbone.history.navigate('app/', {trigger: true});
    });
  }
  createAccount(credentials){
    var user =  User.signup(credentials);
      User.store(user);
    // var user = new User(credentials);
    // user.save().then(function(data){
    //   localStorage.setItem('user', JSON.stringify(data));
      Backbone.history.navigate('app/', {trigger: true});
    //});
  }
  render(){
    return (
      <LoginLayout isUserLoggedIn={false}>

        <div className="col-md-5 well">
          <h1>Login</h1>
          <LoginForm action={this.login} submitButton="Welcome Back Chef!"/>
          </div>
          <div className="col-md-5 col-md-offset-1 well">
          <h1>Sign Up!</h1>
          <SignupForm action={this.createAccount} submitButton="Unlock the Kitchen Doors!"/>
        </div>

      </LoginLayout>
    )
  }
}

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleEmailChange(e){
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    // input data.... this.state
    this.props.action(this.state);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email-login">Email address</label>
          <input onChange={this.handleEmailChange} className="form-control" name="email" id="email-login" type="email" placeholder="Your Address" />
        </div>

        <div className="form-group">
          <label htmlFor="password-login">Password</label>
          <input onChange={this.handlePasswordChange} className="form-control" name="password" id="password-login" type="password" placeholder="Password Required" />
        </div>

        <input className="btn btn-danger" type="submit" value={this.props.submitButton} />
      </form>
    )
  }
}


class SignupForm extends LoginForm {

}

module.exports = {
  LoginContainer
}
