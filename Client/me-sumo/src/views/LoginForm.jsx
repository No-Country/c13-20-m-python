import logo from "../assets/nuestro-logo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginImg from "../assets/login-image.png";
import InputMail from "../components/Login-SignUp/InputMail";
import InputPassword from "../components/Login-SignUp/InputPassword";
import RememberUser from "../components/Login-SignUp/RememberUser";
import LoginButton from "../components/Login-SignUp/LoginButton";
import RegisterLink from "../components/Login-SignUp/RegisterLink";
import ForgotPassLink from "../components/Login-SignUp/ForgotPassLink";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex -mt-10">
      <section className="flex bg-gray-50 dark:bg-gray-900 -mt w-screen rounded-xl">
        <img
          src={loginImg}
          alt="img-login"
          className="h-4/5 mt-14 ml-48 mr-0 rounded-2xl hidden md:block"
        />
        <div className="flex flex-col items-center justify-center ml-0 mr-48 py-8 w-full md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-45 h-15 mr-2" src={logo} alt="logo"></img>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-full w-full">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Ingresa a tu Cuenta
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                  navigate("/home");
                })}
              >
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
                <div className="flex items-center justify-between">
                  <RememberUser />
                  <ForgotPassLink />
                </div>
                <LoginButton text="Ingresar" />
                <RegisterLink />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
