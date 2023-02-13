import React, { useState } from "react";
import Button from "../../../app/common/button/Button.common";
import MyTextInput from "../../../app/common/form/MyTextInput.common";
import "./SignInForm.css";
import { useDispatch } from "react-redux";
import {
  emailSignInLoading,
  googleSignInLoading,
} from "../../../app/stores/user/user.action";

const initialFormValues = {
  email: "",
  password: "",
};

const SignInForm = ({ setFormType }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { email, password } = formValues;
  const dispatch = useDispatch();

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInLoading(email, password));
      resetFormValues();
    } catch (error) {
      throw error;
    }
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInLoading());
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>

      <p className="form-action-container">
        <span>Sign in with your email and password or</span>
        <button className="link-btn" onClick={() => setFormType("sign up")}>
          Sign up instead
        </button>
      </p>

      <form onSubmit={handleSubmit}>
        <MyTextInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <MyTextInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="btns-container">
          <Button type="submit">Sign In</Button>
          <Button btnType="google" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;