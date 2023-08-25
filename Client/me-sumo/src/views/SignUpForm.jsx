import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
    <div className="flex items-center justify-center h-screen">
      <div className="w-4/5 max-w-screen-sm p-4">
        <h1 className="text-xl font-bold text-center mb-4">
          Formulario de Registro
        </h1>
        <form
          className="space-y-2"
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
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <InputPassword />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Confirmar Password
            </label>
            <InputPassword />
          </div>
          <InputTerms />
          <LoginButton text="Registrarme" />
        </form>
      </div>
    </div>
  );
}
