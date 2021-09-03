import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.removeItem("isAuthenticated")
  }, [])

  const onSubmit = e => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;

    if (userName === "foo" && password === "bar") {
      router.push("/home");
      sessionStorage.setItem("isAuthenticated", true);
    }
  };

  return (
    <div className="login">
      <h1>Login page</h1>
      <form onSubmit={onSubmit} className="login__form">
        <Input
          label="Username"
          type="text"
          name="username"
          id="user-name"
          placeholder="Enter your username"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
