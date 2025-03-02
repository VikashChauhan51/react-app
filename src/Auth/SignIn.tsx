import React from "react";
import * as Label from "@radix-ui/react-label";
import {
  TextField,
  Button,
  Checkbox,
  Text,
  Flex,
  Box,
  Heading,
  Container,
} from "@radix-ui/themes";
import { Form } from "radix-ui";
import "./Auth.css";
import { useState } from "react";

type SignInRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type Errors = {
  email?: string;
  password?: string;
};

const SignIn = () => {
  const [signInRequest, setSignInRequest] = useState<SignInRequest>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInRequest({
      ...signInRequest,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signInRequest.email) {
      setErrors({
        ...errors,
        email: "Email is required",
      });
      return;
    }
    if (!signInRequest.password) {
      setErrors({
        ...errors,
        password: "Password is required",
      });
      return;
    }

    console.log(signInRequest);
  };
  return (
    <Box>
      <Container align="center" className="auth-container">
        <Heading align="center">Sign In</Heading>
        <Form.Root className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Label.Root htmlFor="signin-email" className="form-label">
              Email
            </Label.Root>
            <TextField.Root
              type="email"
              id="signin-email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <Label.Root htmlFor="signin-password" className="form-label">
              Password
            </Label.Root>
            <TextField.Root
              type="password"
              id="signin-password"
              name="password"
              placeholder="Your Password"
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group checkbox-group">
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox name="reremberMe" id="remember-me" />
                Remember me
              </Flex>
            </Text>
          </div>
          <Button type="submit" variant="solid">
            Sign In
          </Button>
        </Form.Root>
      </Container>
    </Box>
  );
};

export default SignIn;
