import { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
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
  Skeleton,
} from "@radix-ui/themes";
import { Form } from "radix-ui";
import "./Auth.css";

const SignInRequestSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});

type SignInRequest = z.infer<typeof SignInRequestSchema>;

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInRequest>({ resolver: zodResolver(SignInRequestSchema) });

  const onSubmit: SubmitHandler<SignInRequest> = (data) => {
    try {
      setLoading(true);
      console.log(data);
    } finally {
      setLoading(false);
    }
  };

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
              className={errors.email ? "text-field-error" : ""}
            />
            {errors.email && (
              <span className="error-text">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <Label.Root htmlFor="signin-password" className="form-label">
              Password
            </Label.Root>
            <TextField.Root
              type="password"
              id="signin-password"
              placeholder="Your Password"
              {...register("password")}
              className={errors.password ? "text-field-error" : ""}
            />
            {errors.password && (
              <span className="error-text">{errors.password.message}</span>
            )}
          </div>
          <div className="form-group checkbox-group">
            <Text as="label" size="2">
              <Flex gap="2">
                <Controller
                  control={control}
                  name="rememberMe"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      onCheckedChange={onChange}
                      checked={value}
                      id="rememberMe"
                    />
                  )}
                />
                Remember me
              </Flex>
            </Text>
          </div>
          <Button type="submit" variant="solid">
            Sign In
          </Button>

          {loading && (
            <Skeleton loading={loading}>
               
            </Skeleton>
          )}
        </Form.Root>
      </Container>
    </Box>
  );
};

export default SignIn;
