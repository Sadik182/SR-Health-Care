import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import auth from "../firebase/firebase.init";
import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
  const { allContext} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  // const history = useHistory();
  const redirect_uri = location?.state?.from || "/home";
const {signInUsingGoogle, user, signInUsingEmailAndPassword} = allContext;
  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            navigate(redirect_uri)
        })
  };

  const [
    signInWithEmailAndPassword,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailLogin = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password)
    .then(() => {
      navigate(redirect_uri)
    })
           
  }
  if(user) {
    navigate('/home');
  }
  return (
    <>
    <div className="login-form my-5">
      <div className="form p-5">
        <h2>Login</h2>
        <Form onSubmit={handleEmailLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
          </Button>
        </Form>
        <p>
          New to Health-Care? <Link to="/register">Create an Account</Link>
        </p>
        <div>-----------OR-------------</div>
        <button
          onClick={handleGoogleLogin}
          className="btn-regular me-3 rounded-3 p-1"
        >
          Google SignIn
        </button>
        <button className="btn-regular rounded-3 p-1 ">Facebook LogIn</button>
      </div>
    </div>
    </>
  );
};

export default Login;
