import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type AuthFormProps = {
  header: string;
  subHeader: string;
  checkBoxText: string;
  buttonText: string;
  forgetPass: boolean;
};

const AuthForm = ({
  header,
  subHeader,
  checkBoxText,
  buttonText,
  forgetPass,
}: AuthFormProps) => {
  return (
    <div className="flex justify-start items-center h-screen w-full bg-auth-image bg-no-repeat bg-cover">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow mx-4 md:basis-2/5 md:mx-20">
        {/* Form area */}
        <form>
          <h1 className="text-3xl text-gray-900 font-bold flex gap-4 items-center justify-between">
            {header}
            <Link to={"/"}>
              <HomeIcon className="w-12 h-12 text-primary-300 border border-primary-300 rounded-full p-2" />
            </Link>
          </h1>
          <p className="font-bold text-sm mb-4">{subHeader}</p>
          {!forgetPass && (
            <div>
              <InputField
                type="text"
                placeHolderText="NAME"
                name="user_name"
                id="user_name"
                required={true}
              />
            </div>
          )}

          <div>
            <InputField
              type="text"
              placeHolderText="EMAIL"
              name="user_email"
              id="user_email"
              required={true}
            />
          </div>

          <div>
            <InputField
              type="password"
              placeHolderText="PASSWORD"
              name="user_pass"
              id="user_pass"
              required={true}
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900 mb-4">
                {checkBoxText}
              </label>
            </div>
            {forgetPass && (
              <a
                href="#"
                className="ms-auto text-sm text-black hover:underline"
              >
                Lost Password?
              </a>
            )}
          </div>
          <Button className="w-full" type="submit">
            {buttonText}
          </Button>
        </form>
        {/* Form area end */}
      </div>
    </div>
  );
};

export default AuthForm;
