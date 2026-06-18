import { FieldError, Input, Label, TextField } from "@heroui/react";
import type { ComponentProps } from "react";

type FormFieldProps = ComponentProps<typeof TextField> & {
  label: string;
  autoComplete?: string;
};

export function FormField({ label, autoComplete, ...textFieldProps }: FormFieldProps) {
  return (
    <TextField {...textFieldProps} fullWidth>
      <Label>{label}</Label>
      <Input autoComplete={autoComplete} />
      <FieldError />
    </TextField>
  );
}
