import { removeSessionStorage, storeSessionStorage } from "@/utils";
const baseUrl = process.env.API_URL;

type FormDataType = {
  username?: string;
  email: string;
  password: string;
};

export const userLoginRegister = async (
  forgetPass: boolean,
  formData: FormDataType
) => {
  const url = forgetPass ? `${baseUrl}auth/login` : `${baseUrl}auth/register`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      storeSessionStorage("c_user", data.username);
      storeSessionStorage("c_id", data.id);
      storeSessionStorage("c_s", data.sessionToken);
    } else {
      const errorMessage = await response.json();
      return { error: errorMessage.message };
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const userLogout = async (token: string) => {
  const url = `${baseUrl}auth/logout`;
  const jsonBody = {
    sessionToken: token,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    });
    if (response.ok) {
      await response.json();
      removeSessionStorage("c_user");
      removeSessionStorage("c_id");
      removeSessionStorage("c_s");
      window.location.href = "/";
    } else {
      const errorMessage = await response.json();
      console.error(errorMessage);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
