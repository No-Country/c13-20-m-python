import logo from "../assets/nuestro-logo.png";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import loginImg from "../assets/login-image.png";
import Input from "../components/Shared/Input";
import ForgotPassModal from "../components/Login-SignUp/ForgotPassModal";
import RememberUser from "../components/Login-SignUp/RememberUser";
import LoginButton from "../components/Login-SignUp/LoginButton";
import RegisterLink from "../components/Login-SignUp/RegisterLink";
import ForgotPassLink from "../components/Login-SignUp/ForgotPassLink";
import GoogleLoginButton from "../components/Login-SignUp/GoogleLoginButton";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { handleLogin, isModalOpen, handleCloseModal, handleOpenModal } =
    useLogin();

  return (
    <div className="flex -mt-10">
      <section className="flex bg-gray-50 dark:bg-gray-900 -mt w-full rounded-xl">
        <img
          src={loginImg}
          alt="img-login"
          className="h-fit mt-20 ml-48 mr-0 rounded-2xl hidden md:block"
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
                  handleLogin(data);
                })}
              >
                <div>
                  <Input
                    labelText="Email"
                    type="text"
                    placeholder="Escriba su email"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                  />
                </div>
                <div>
                  <Input
                    labelText="Password"
                    type="password"
                    placeholder="Escriba su contraseña"
                    name="password"
                    register={register}
                    error={errors.password?.message}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <RememberUser />
                  <ForgotPassLink handleOpenModal={handleOpenModal} />
                </div>
                <div className="flex items-center justify-between mb-12">
                  <LoginButton text="Ingresar" />
                  <GoogleLoginButton />
                </div>
                <RegisterLink />
              </form>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <ForgotPassModal onClose={handleCloseModal} />}
    </div>
  );
}
