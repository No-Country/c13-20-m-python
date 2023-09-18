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
    <div >
      <div className="flex justify-center h-screen gap-8">
       
          <img
            src={signUpImg}
            alt="img-login"
            className="h-screen w-1/2 object-cover md:block"
          />
       
        <div className="w-full md:w-1/2 p-4 md:h-screen lg:py-0 ">
        <h1 className="mt-10 text-3xl md:text-4xl font-semibold text-[#003049] text-center tracking-[0] leading-[normal] mb-4">
           Formulario de Registro
          </h1>
          <form
            className=" space-y-1 w-4/5 ml-auto mr-auto"
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
