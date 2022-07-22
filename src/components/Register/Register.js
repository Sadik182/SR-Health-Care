import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="register-form">
      <div className="form p-5 my-5">
        <h2>Creater Account</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Control type="email" placeholder="Enter Your Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <div>-------------or---------------</div>
        <button onClick={handleGoogleLogin} className="btn-warning">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
