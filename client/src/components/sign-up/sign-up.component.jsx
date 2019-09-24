import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signUpStart } from "../../redux/user/user.actions";
import { signInLoader } from "../../redux/user/user.selector";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpSpan, SignUpTitle } from "./sign-up.styles";

const SignUp = ({ signUpStart, isLoading }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      {isLoading ? (
        ""
      ) : (
        <div>
          <SignUpTitle> I do not have an account </SignUpTitle>
          <SignUpSpan>Sign up with your email & password </SignUpSpan>

          <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit"> SIGN UP</CustomButton>
          </form>
        </div>
      )}
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: signInLoader
});

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
