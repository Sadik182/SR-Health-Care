import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import auth from "../firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const { allContext} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const redirect_uri = location?.state?.from || "/home";
const {signInUsingGoogle, user, signInUsingEmailAndPassword} = allContext;
  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            navigate(redirect_uri)
        })
  };

  const handleEmailLogin = e => {
    e.preventDefault();
    console.log(email, password);
    signInUsingEmailAndPassword(auth, email, password)
             
  }
  if(user) {
    navigate('/home');
  }
  return (
    <div className="login-form my-5">
      <div className="form p-5">
        <h2>Login</h2>
        <Form onSubmit={handleEmailLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
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
  );
};

export default Login;
