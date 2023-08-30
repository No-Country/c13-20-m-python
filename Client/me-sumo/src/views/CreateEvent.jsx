import {useForm} from "react-hook-form"
import Input from "../components/Shared/Input";
import { Button } from "@material-tailwind/react";
import Checks from "../components/Shared/checks";
// import construction from "../assets/under-construction.png";


export default function CreateEvent() {
      const {
        handleSubmit,
        register,
        //formState: { errors },
      } = useForm();
      const categorias = ["Fiesta", "Evento", "Religioso", "Musica", "Arte", "Tecnologia"];
      return (
        <div className="">
          <div>
            <h1 className="text-2xl font-bold items-center justify-center">
                  Crear un nuevo Evento
            </h1>
          </div>
          <Checks/>
          <div className="flex justify-center w-full h-auto ">
            <div className="w-full max-w-screen-md xl:max-w-screen-lg p-4 lg:py-0">

              <form
                className="space-y-1 w-full mb-4"
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
                  <label className="m-0 p-0 flex mb-2 ml-1 text-sm font-small text-gray-600 dark:text-white">Escriba el nombre del evento</label>

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
                  <label className="m-0 p-0 flex mb-2 ml-1 text-sm font-small text-gray-600 dark:text-white">Añada una breve descripción</label>
                </div>
                <div>
                  <label           className="flex mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white">Categoría</label>
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
          <label           className="flex mb-2 ml-1 text-sm font-small text-gray-600 dark:text-white">Elija una categoria</label>

                     </div>
<div className="flex flex-col md:flex-row w-full">
  <div className="md:w-1/2 md:pr-2">
    <Input
      labelText="Fecha de Inicio"
      type="datetime-local"
      name="fecha-inicio"
      register={register}
      // error={errors.userName?.message}
    />
  </div>
  <div className="md:w-1/2 md:pl-2">
    <Input
      labelText="Fecha de Fin"
      type="datetime-local"
      name="fecha-fin"
      register={register}
      // error={errors.userName?.message}
    />
  </div>
</div>
<div className="mb-3">
                  <Input
                    labelText="Imagen de Portada"
                    type="file"
                    placeholder="Seleccione una imagen de Portada"
                    name="name"
                    register={register}
//                    error={errors.email?.message}
                  />
                </div>
                <div className="bg-gray-50 sticky bottom-0 left-0 right-0 flex justify-center p-4">
                  <Button variant="outlined" className="m-2" title="Cancelar">Cancelar</Button>
                  <Button title="Crear Evento" className="m-2">Continuar → </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

