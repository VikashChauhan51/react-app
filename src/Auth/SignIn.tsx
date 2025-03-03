import { SubmitHandler, useForm  } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const SignInRequestSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
 
});

type SignInRequest = z.infer<typeof SignInRequestSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInRequest>({ resolver: zodResolver(SignInRequestSchema) });

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
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <Label.Root htmlFor="signin-password" className="form-label">
              Password
            </Label.Root>
            <TextField.Root
              type="password"
              id="signin-password"
              placeholder="Your Password"
              {...register("password" )}
            />
            {errors.password && <span>{errors.password.message}</span>}
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
