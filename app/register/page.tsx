"use client";

import { Button, Form } from "@heroui/react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { FormField } from "@/components/auth/form-field";

const handleSubmit: ComponentProps<typeof Form>["onSubmit"] = (event) => {
  event.preventDefault();
  // TODO: wire up to a registration API route / next-auth
};

export default function Register() {
  return (
    <AuthCard
      title="Create an account"
      description="Join Dishly to save and share recipes"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-accent hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField name="name" label="Name" autoComplete="name" isRequired />
        <FormField name="email" label="Email" type="email" autoComplete="email" isRequired />
        <FormField
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          isRequired
        />
        <FormField
          name="confirmPassword"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          isRequired
        />
        <Button type="submit" variant="primary" fullWidth>
          Create account
        </Button>
      </Form>
    </AuthCard>
  );
}
