"use client";

import LoginForm from "@/components/login-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          email={email}
          onEmailChange={setEmail}
          password={password}
          onPasswordChange={setPassword}
          onLogin={loginHandler}
        />
      </div>
    </div>
  );
};

export default LoginPage;
