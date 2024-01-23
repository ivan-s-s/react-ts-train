import { useState } from "react";
import type { FC, FocusEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import { fetchUserSignup } from "api/account";
import { Button, FormField } from "ui-kit";
import "./FormFieldPage.scss";
import { normalizePhoneNumber } from "utils/normalizePhoneNumber";

export interface TSignupForm {
  firstName: string;
  lastName: string;
  email?: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
};

const schema = yup
  .object().shape({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "The first name must not contain numbers")
      .required("Write your first name"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "The last name must not contain numbers")
      .required("Write your last name"),
    email: yup
      .string()
      .required("Write your email")
      .email("Invalid email. Check if your email is entered correctly/"),
    password: yup
      .string()
      .required("Write your password")
      .min(8, "Must be at 8 characters"),
    passwordConfirm: yup
      .string()
      .required("Write your confirm password")
      .min(8, "Must be at 8 characters"),
    phoneNumber: yup
      .string()
      .required("Write your phone number"),
  });

export const FormFieldPage: FC = () => {
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirm: false,
    phoneNumber: false,
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<TSignupForm>({
    resolver: yupResolver(schema)
  });
  const watchAllFields = watch();

  const onSubmit = (data: TSignupForm) => {
    const phoneNumberNormalize = normalizePhoneNumber(data.phoneNumber);
    if (data.password === data.passwordConfirm) {
      setIsPasswordMatch(true);
      const options = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        phoneNumber: phoneNumberNormalize,
      };
      console.log("data: ", options);
      // fetchUserSignup(data);
    } else {
      setIsPasswordMatch(false);
    };
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused({...isFocused, [event.target.name]: true});
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[event.target.name] !== "") {
      setIsFocused({...isFocused, [event.target.name]: true});
    } else {
      setIsFocused({...isFocused, [event.target.name]: false});
    }
  };

  const errorPasswordMessage = (message: string) => {
    if (message) {
      return message;
    };
    if (!isPasswordMatch) {
      return "Password mismatch";
    };
  };

  return (
    <div className="FormPage">
      <div className="FormPage-Content">
        <h1 className="FormPage-ContentTitle">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FormPage-FormFieldGroup">
            <FormField
              label="First Name"
              name="firstName"
              type="text"
              register={register}
              error={errors.firstName && errors.firstName.message}
              isFocused={isFocused.firstName}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Last Name"
              name="lastName"
              type="text"
              register={register}
              error={errors.lastName && errors.lastName.message}
              isFocused={isFocused.lastName}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Phone"
              name="phoneNumber"
              type="tel"
              register={register}
              error={errors.phoneNumber && errors.phoneNumber.message}
              isFocused={isFocused.phoneNumber}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Email"
              name="email"
              type="text"
              register={register}
              error={errors.email && errors.email.message}
              isFocused={isFocused.email}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errorPasswordMessage(errors.password?.message)}
              isFocused={isFocused.password}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Confirm password"
              name="passwordConfirm"
              type="password"
              register={register}
              error={errorPasswordMessage(errors.password?.message)}
              isFocused={isFocused.passwordConfirm}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <Button className="FormPage-Button" typeButton="submit">Sing up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};