import { Control } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { IFormLogin } from "../../pages/login/types";

export interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof IFormLogin;
  control: Control<IFormLogin>;
  errorMessage?: string;
}