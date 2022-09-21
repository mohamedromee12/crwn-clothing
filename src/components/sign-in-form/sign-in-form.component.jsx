import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

import { Button } from "../button/button.component.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;


  const { setCurrentUser } = useContext(UserContext);

  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    //setCurrentUser(user);
    
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} =await signInAuthUserWithEmailAndPassword(email, password);
     // console.log(user);
      //setCurrentUser(user);
      resetFormFields();
     // console.log('cont');
    } catch (error) {
      console.log(error.code);
      if (!(error.code !== "auth/user-not-found")) {
        //console.log('entered')
        alert("The email not exist");
      } else if (!(error.code !== "auth/wrong-password")) {
        alert("The password is incorrect");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handelChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handelChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit"> Sign in </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
