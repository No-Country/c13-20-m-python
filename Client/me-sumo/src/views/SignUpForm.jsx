import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signUpImg from "../assets/sign-up-image.png";
import InputName from "../components/Login-SignUp/InputName";
import InputMail from "../components/Login-SignUp/InputMail";
import InputPassword from "../components/Login-SignUp/InputPassword";
import InputTerms from "../components/Login-SignUp/InputTerms";
import LoginButton from "../components/Login-SignUp/LoginButton";

export default function SignUpForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <div className="flex -mt-5">
      <section className="flex bg-gray-50 dark:bg-gray-900 -mt w-screen rounded-xl">
        <img
          src={signUpImg}
          alt="img-login"
          className="h-4/6 mt-10 ml-48 mr-0 rounded-2xl"
        />
        <div className="flex flex-col items-center justify-center ml-0 mr-48 py-8 w-full md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight  tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Fromulario de Registro
              </h1>
              <form
                className="space-y-2 md:space-y-4"
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
