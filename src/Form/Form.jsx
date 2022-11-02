import React, { useState } from "react";

const FormExampleForm = () => {
 
  const [form, setForm] = useState({
    email: "",
  });

  const [errMsg, setErrMsg] = useState(null);

  const onSubmit = (e) => {
    const { email } = e.target;
    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    const emailCharFormat =/^[A-z0-9\u0000-\u007f\s'.,-/@#!$%^&*;:{}=\-_`~()]+$/;
    if(email?.value==""){
      setErrMsg("Please enter your email in this format: name@company.com.");
    }
    if (email?.value && !emailCharFormat.test(email.value)) {
      setErrMsg( "We don't allow any special characters in the customers email and ID.");
    }
    else{
      if (email?.value && !emailFormat.test(email.value)) {
        setErrMsg( "Please enter your email in this format: name@company.com.");
      }
      else if( email?.value && emailCharFormat.test(email.value) && emailFormat.test(email.value)){
        setErrMsg ("Email is valid");
      }
  }
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="container-form" noValidate>
        <div className="field">
          <label className="field-label" htmlFor="name">
            Email :{" "}
          </label>
          <input className="field-input" type="email" id="name" name="email" data-testid="inputTestId" />
        </div>
        <p data-testid="submitTestIdPara" style={errMsg!="Email is valid"?{color:"red"}:{color:"green"}}>{errMsg}</p>
        <input className="form-button" type="submit" value="Submit" data-testid="submitTestId" />
      </form>
    </>
  );
};

export default FormExampleForm;
