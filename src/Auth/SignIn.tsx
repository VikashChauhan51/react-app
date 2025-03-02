// components/Auth/SignIn.tsx
import React from 'react';
import * as Label from '@radix-ui/react-label';
import { TextField,Button,Checkbox ,Text ,Flex ,Box,Heading,Container   } from '@radix-ui/themes';
import { Form } from "radix-ui";
import './Auth.css';

const SignIn = () => {
  return (
    <Box >
      <Container align="center" className="auth-container">
      <Heading align="center">Sign In</Heading>
      <Form.Root className="auth-form" >
        <div className="form-group">
          <Label.Root htmlFor="signin-email" className="form-label">
            Email
          </Label.Root>
          <TextField.Root
            type="email"
            id="signin-email"
            name="email"
            placeholder="you@example.com"
            
          />
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
            
          />
        </div>
        <div className="form-group checkbox-group">
        <Text as="label" size="2">
	<Flex gap="2">
		<Checkbox  />
    Remember me
	</Flex>
</Text>
        </div>
        <Button type='submit' variant="solid">
          Sign In
        </Button>
      
      </Form.Root>
      </Container>
    </Box>
  );
};

export default SignIn;
