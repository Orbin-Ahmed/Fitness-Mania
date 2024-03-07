import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={"/"} className="underline">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
