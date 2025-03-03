import { SubmitHandler, useForm  } from "react-hook-form";
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


type SignInRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInRequest>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<SignInRequest> = (data) => console.log(data);

  return (
    <Box>
      <Container align="center" className="auth-container">
        <Heading align="center">Sign In</Heading>
        <Form.Root className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Label.Root htmlFor="signin-email" className="form-label">
              Email
            </Label.Root>
            <TextField.Root
              type="email"
              id="signin-email"
              placeholder="you@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && <p role="alert">Email is required</p>}
          </div>
          <div className="form-group">
            <Label.Root htmlFor="signin-password" className="form-label">
              Password
            </Label.Root>
            <TextField.Root
              type="password"
              id="signin-password"
              placeholder="Your Password"
              {...register("password", { required: true })}
            />
            {errors.password && <p role="alert">Password is required</p>}
          </div>
          <div className="form-group checkbox-group">
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox id="remember-me"  {...register("rememberMe")} />
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
