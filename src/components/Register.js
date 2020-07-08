import React ,{Component} from "react";
import {Link} from'react-router-dom';

import signin_image from "../images/signin-image.jpg";

import "../css_styling/auth.css";
import fire from '../config/firebase'

class Register extends Component {
  constructor(props)
  {
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this)
    this.state={
      name:"",
      email:"",
      password:"",
      confirmPassword:""
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
     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
     .then((u)=>console.log(u))
    .then(()=>this.props.history.push("/nasa"))
    .catch((err) => {
      console.error(err);
    });
 }
  render(){
    return (
      <div className="main">
        <section className="signup">
          <div className="custom-container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="fas fa-user"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="custom-input"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="fas fa-envelope"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="custom-input"
                      onChange={this.handleChange}
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
                      id="pass"
                      placeholder="Password"
                      className="custom-input"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rpass">
                      <i class="fas fa-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="rpass"
                      placeholder="Confirm Password"
                      className="custom-input"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input custom-input"
                      type="checkbox"
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      I agree all statements in <a href="#">Terms of service</a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      onClick={this.handleSubmit}
                      value="Register"
                      name="signup"
                      id="signup"
                      className="form-submit custom-input"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signin_image} alt="sigin image" />
                </figure>
                <Link to="/" className="signup-image-link">
                  I am already a member
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
