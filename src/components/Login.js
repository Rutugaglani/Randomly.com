import React ,{Component} from "react";
import {Link} from'react-router-dom';

import signin_image from "../images/signin-image.jpg";

import "../css_styling/auth.css";
import fire from '../config/firebase'

class Login extends Component {
  constructor(props)
  {
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this)
    this.state={
      email:"",
      password:"",
     
    }
  }

  handleChange=(e)=>{
    this.setState({
     [e.target.name]:e.target.value 
    })
 }
 handleSubmit=(e)=>{
     e.preventDefault();
     console.log(this.state)
     fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
     .then((u)=>console.log(u))
    .then(()=>this.props.history.push("/nasa"))
    .catch((err) => {
      console.error(err);
    });
 }
  render(){
  return (
    <div className="main">
      <section className="sign-in">
        <div className="custom-container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signin_image} alt="sigin image" />
              </figure>
              <Link to="/register" className="signup-image-link">
                Create an account
              </Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="custom-input"
                    id="email"
                    onChange={this.handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    className="custom-input"
                    id="pass"
                    placeholder="Password"
                    required
                  />
                </div>
          <div className="form-group form-button">
                  <input
                  onClick={this.handleSubmit}
                    type="submit"
                    value="Log in"
                    className="custom-input form-submit"
                    name="signin"
                    id="signin"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
}

export default Login;
