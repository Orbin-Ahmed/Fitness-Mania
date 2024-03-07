import AuthForm from "@/components/AuthForm";

type LoginProps = {};

const Login = ({}: LoginProps) => {
  return (
    <AuthForm
      header="Welcome Back!"
      subHeader="Get more out of your fitness journey"
      checkBoxText="Keep me signed in"
      buttonText="Login"
      forgetPass={true}
    />
  );
};

export default Login;
