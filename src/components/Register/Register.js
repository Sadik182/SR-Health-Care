import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import auth from "../firebase/firebase.init";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {
  const { allContext } = useAuth();
  const location = useLocation();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  // const history = useHistory();
  const navigate = useNavigate();
  const {signInUsingGoogle} = allContext
  const redirect_uri = location.state?.from || "/home";

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      navigate.push(redirect_uri);
    });
  };
  if(user) {
    navigate('/home')
  }
  return (
    <div className="register-form">
      <div className="form p-5 my-5">
        <h2>Creater Account</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
          </Button>
        </Form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <div>-------------or---------------</div>
        <button onClick={handleGoogleLogin} className="btn-warning">Google SignUp</button>
      </div>
    </div>
  );
};

export default Register;
