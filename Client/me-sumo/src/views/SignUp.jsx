import { useForm } from "react-hook-form";
import InputTerms from "../components/Login-SignUp/InputTerms";
import LoginButton from "../components/Login-SignUp/LoginButton";
import signUpImg from "../assets/sign-up-image.png";
import GoogleLoginButton from "../components/Login-SignUp/GoogleLoginButton";
import Input from "../components/Shared/Input";
import useRegister from "../hooks/useRegister";

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { handleRegister } = useRegister();

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
            className="h-full ml-48 mr-0 rounded-2xl hidden md:block"
          />
        </div>
        <div className="w-3/5 max-w-screen-sm p-4 md:h-screen lg:py-0">
          <form
            className="space-y-1 w-4/6"
            action="#"
            onSubmit={handleSubmit((data) => {
              handleRegister(data);
            })}
          >
            <div className="mb-0">
              <Input
                labelText="Nombre"
                type="text"
                placeholder="Escriba su nombre"
                name="name"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText="Apellido"
                type="text"
                placeholder="Escriba su nombre"
                name="lastName"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText="Email"
                type="email"
                placeholder="Escriba su email"
                name="email"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText="Nombre de Usuario"
                type="text"
                placeholder="Escribi un nombre de Usuario"
                name="userName"
                register={register}
                error={errors.userName?.message}
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

            <div>
              <Input
                labelText="Confirmar Password"
                type="password"
                placeholder="Escriba su contraseña"
                name="confirmPassword"
                register={register}
                error={errors.password?.message}
              />
            </div>
            <InputTerms />
            <div className="flex items-center justify-between mt-12 mb-12">
              <LoginButton text="Registrarme" />
              <GoogleLoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
