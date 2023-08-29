import { GoogleLogin } from "@react-oauth/google";
import { CLIENT_ID } from "../../services/Google";

export default function GoogleLoginButton() {
  const onSuccess = (response) => {
    console.log(response);
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
    />
  );
}
