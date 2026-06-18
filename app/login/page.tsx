"use client";

import { Button, Form } from "@heroui/react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { FormField } from "@/components/auth/form-field";

const handleSubmit: ComponentProps<typeof Form>["onSubmit"] = (event) => {
  event.preventDefault();
  // TODO: wire up to next-auth signIn()
};

export default function Login() {
  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to your Dishly account"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-accent hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField name="email" label="Email" type="email" autoComplete="email" isRequired />
        <FormField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          isRequired
        />
        <Button type="submit" variant="primary" fullWidth>
          Sign in
        </Button>
      </Form>
    </AuthCard>
  );
}
