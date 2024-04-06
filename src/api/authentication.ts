import { storeSessionStorage } from "@/utils";

type FormDataType = {
  username?: string;
  email: string;
  password: string;
};

export const userLogin = async (
  forgetPass: boolean,
  formData: FormDataType
) => {
  const url = forgetPass
    ? "https://backend-fitness-mania.vercel.app/auth/login"
    : "https://backend-fitness-mania.vercel.app/auth/register";

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
