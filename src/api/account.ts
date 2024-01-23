import axios from "axios";
import { TSignupForm } from "pages/FormFieldPage/FormFieldPage";

export interface IUserSignup {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
};

export const fetchUserSignup = async ({
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
  phoneNumber
}: TSignupForm): Promise<IUserSignup> => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    phoneNumber
  });

  const response = await axios.post<IUserSignup>(
    `http://127.0.0.1:8000/api/v1/auth/users`,
    body,
    config,
  );
  console.log("response: ", response);

  return response.data;
};