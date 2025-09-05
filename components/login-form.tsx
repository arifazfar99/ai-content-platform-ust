import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  email: string;
  onEmailChange: (email: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  onLogin: (e: React.FormEvent) => Promise<void>;
}

const LoginForm = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onLogin,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email and pasword below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="test@example.com"
                required
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href={"#"}
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="test123"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
