import {useForm} from "react-hook-form"
import Input from "../components/Shared/Input";
import InputTerms from "../components/Login-SignUp/InputTerms";
import { Button } from "@material-tailwind/react";
// import construction from "../assets/under-construction.png";


export default function CreateEvent() {
      const {
        handleSubmit,
        register,
        //formState: { errors },
      } = useForm();
      const categorias = ["Fiesta", "Evento", "Religioso", "Musica", "Arte", "Tecnologia"];
      return (
        <div className="items-center">
          <div>
            <h1 className="text-2xl font-bold p-5 items-center justify-center">
                  Informacion Basica
            </h1>
          </div>
          <div>
          <svg
          xmlns="../../../assets/icons/check_circle.svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <title>Check</title>
            </svg>hola
          </div>
          <div className="flex justify-center w-full h-screen ">
            <div className="w-full max-w-screen-md xl:max-w-screen-lg p-4 h-screen lg:py-0">
              <form
                className="space-y-1 w-full"
                action="#"
                onSubmit={handleSubmit(() => {
                  //handleRegister(data);
                              })}
              >
                <div>
                  <Input
                    labelText="Nombre del Evento"
                    type="text"
                    placeholder="Escriba el nombre del evento"
                    name="name"
                    register={register}
//                    error={errors.email?.message}
                  />
                </div>
                <div>
                  <Input
                    labelText="Descripcion"
                    type="text"
                    placeholder="Añada una breve descripción"
                    name="lastName"
                    register={register}
//                    error={errors.email?.message}
                  />
                </div>
    
                <div>
                <select
          required={true}
          { ...register('categoria') }
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {categorias.map((cat, index) => (
              <option className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              key={index} value={cat}>{cat}</option>
            ))}
          </select>
                </div>
    
                <div>
                  <Input
                    labelText="Fecha de Inicio"
                    type="datetime-local"
                    name="fecha-inicio"
                    register={register}
                    // error={errors.userName?.message}
                  />
                                    <Input
                    labelText="Fecha de Fin"
                    type="datetime-local"
                    name="fecha-inicio"
                    register={register}
                    // error={errors.userName?.message}
                  />
                </div>
                <InputTerms />
                <Button title="Cancelar">Cancelar</Button>
                <Button title="Registrarme">Crear Evento</Button>
              </form>
            </div>
          </div>
        </div>
      );
    }

