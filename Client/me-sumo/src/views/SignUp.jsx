import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputName from "../components/Login-SignUp/InputName";
import InputMail from "../components/Login-SignUp/InputMail";
import InputPassword from "../components/Login-SignUp/InputPassword";
import InputTerms from "../components/Login-SignUp/InputTerms";
import LoginButton from "../components/Login-SignUp/LoginButton";
import signUpImg from "../assets/sign-up-image.png";
import GoogleLoginButton from "../components/Login-SignUp/GoogleLoginButton";

export default function SignUpForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <div className="items-center">
      <div>
        <h1 className="text-2xl font-bold p-5 items-center justify-center">
          Formulario de Registro
        </h1>
      </div>
      <div className="flex justify-center h-screen gap-8">
        <div className="text-center">
          <img
            src={signUpImg}
            alt="img-login"
            className="h-4/6 mt-2 ml-48 mr-0 rounded-2xl hidden md:block"
          />
        </div>
        <div className="w-3/5 max-w-screen-sm p-4 md:h-screen lg:py-0">
          <form
            className="space-y-2 w-4/6"
            action="#"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              navigate("/home");
            })}
          >
            <div>
              <InputName />
            </div>
            <div>
              <InputMail />
            </div>
            <div>
              <label
                htmlFor="password"
                className="flex ml-1 mb-1.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <InputPassword />
            </div>
            <div>
              <label
                htmlFor="password"
                className="flex ml-1 mb-1.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirmar Password
              </label>
              <InputPassword />
            </div>
            <InputTerms />
            <LoginButton text="Registrarme" />
            <GoogleLoginButton />
          </form>
        </div>
      </div>
    </div>
  );
}
