import React from "react";
import Button from "../Buttons/SubmitButton";
import Input from "../Inputs/TextInput";
function SignupForm() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("getval", name, value);
  };
  const handleSubmit = (e) => {
    const email = e.target.email.value;
    console.log("form", email);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <Input
          type="text"
          name="firstName"
          placeholder="FIrst Name"
          onChange={handleChange}
          half
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          half
        />
      </div>
      <div>
        <Input
          type="text"
          name="organizationName"
          placeholder="Organization Name"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
      </div>
      <Button type="submit" buttonText="Log in Submit"></Button>
    </form>
  );
}

export default SignupForm;
