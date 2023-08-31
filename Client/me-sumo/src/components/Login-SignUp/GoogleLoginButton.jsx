import { GoogleLogin } from "@react-oauth/google";
import { CLIENT_ID } from "../../services/Google";
import useLogin from "../../hooks/useLogin";

export default function GoogleLoginButton() {
  const { handleGoogleLogin } = useLogin();

  const onSuccess = (response) => {
    handleGoogleLogin(response);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      auto_select={true}
      clasName="h-"
    />
  );
}
