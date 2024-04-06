import AuthForm from "@/components/AuthForm";

type Props = {};

function SignUp({}: Props) {
  return (
    <AuthForm
      header="Track Your Progress & More!"
      subHeader="Start your fitness journey today"
      checkBoxText="Send me email notifications for new program launches, website or
                    store updates"
      buttonText="Create Your Account"
      forgetPass={false}
    />
  );
}

export default SignUp;
