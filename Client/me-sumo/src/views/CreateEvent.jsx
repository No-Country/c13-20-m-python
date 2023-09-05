import { useForm, useController } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Select from "react-select";

import Input from "../components/Shared/Input";
import Checks from "../components/Shared/checks";
import useEvents from "../hooks/useEvents";
import eventSchema from "../validations/event";
export default function CreateEvent() {
  const { handleCreateEvent } = useEvents();
  const {
    handleSubmit,
    register,
    // setValue,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(eventSchema),
    defaultValues: {
      name: "",
      categories: [],
      description: "",
      capacity: 0,
      date: "",
      virtual: false,
      state: true,
      ticketPrice: 0,
      event_images: null,
      location: "Tandil, Buenos Aires",
    },
  });
  const navigate = useNavigate();
  function useClick() {
    console.log("chau");
    navigate("/");
  }
  useEffect(() => {});

  const categorias = [
    "Fiesta",
    "Evento",
    "Religioso",
    "Musica",
    "Arte",
    "Tecnologia",
  ];
  const options = categorias.map((cat, index) => ({
    value: index,
    label: `${cat}`,
  }));
  const {
    field: { value: category, onChange: categoriesOnChange },
  } = useController({ name: "categories", control });

  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-bold items-center justify-center">
          Crear un nuevo Evento
        </h1>
      </div>
      <Checks />
      <div className="flex justify-center w-full h-auto ">
        <div className="w-full max-w-screen-md xl:max-w-screen-lg p-4 lg:py-0">
          <form
            className="space-y-1 w-full mb-4"
            action="#"
            onSubmit={handleSubmit((newEvent) => {
              handleCreateEvent(newEvent);
            })}
          >
            <div>
              <Input
                labelText="Nombre del Evento"
                type="text"
                placeholder="Escriba el nombre del evento"
                name="name"
                register={register}
                error={errors.name?.message}
              />
              <label className="m-0 p-0 flex mb-2 ml-1 text-sm font-small text-gray-600 dark:text-white">
                Escriba el nombre del evento
              </label>
            </div>
            <div>
              <Input
                labelText="Descripcion"
                type="text"
                placeholder="Añada una breve descripción"
                name="description"
                register={register}
                error={errors.description?.message}
              />
              <label className="m-0 p-0 flex mb-2 ml-1 text-sm font-small text-gray-600 dark:text-white">
                Añada una breve descripción
              </label>
            </div>
            <div>
              <label className="flex mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white">
                Categoría
              </label>
              {/* <select
                required={true}
                {...register("categories")}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {categorias.map((cat, index) => (
                  <option
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    key={index}
                    value={[index]}
                  >
                    {cat}
                  </option>
                ))}
              </select> */}
              <Select
                defaultValue={options.map((categories, index) => ({
                  value: index,
                  label: `${index}, ${categories}`,
                }))}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isSelected ? "black" : "black",
                  }),
                }}
                placeholder="Seleccione Categoria/s"
                isMulti
                options={options}
                value={options.find((t) => t.value === category)}
                onChange={(e) => categoriesOnChange(e.map((c) => c.value))}
                // theme={(theme) => ({
                //   ...theme,
                //   borderRadius: 0,
                //   colors: {
                //     ...theme.colors,
                //     primary25: "grey",
                //     primary: "black",
                //   },
                // })}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "blue",
                    primary: "black",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label className="flex mb-2 ml-1 text-sm font-small text-gray-600 dark:text-white">
                Elija una categoria
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-1/2 md:pr-2">
                <Input
                  labelText="Fecha de Inicio"
                  type="datetime-local"
                  name="date"
                  register={register}
                  error={errors.date?.message}
                />
              </div>
              <div className="md:w-1/2 md:pl-2">
                <Input
                  labelText="Fecha de Fin"
                  type="datetime-local"
                  // name="date-end"
                  // register={register}
                  // error={errors.userName?.message}
                />
              </div>
            </div>
            {/* <div className="mb-3">
              <Input
                labelText="Imagen de Portada"
                type="file"
                accept="image/jpeg,image/png,image/gif"
                placeholder="Seleccione una imagen de Portada"
                name="event_images"
                register={register}
                // onChange={(e) =>
                //   e.map((c) => setValue("event_images", [c.value]))
                // }
                //error={errors.email?.message}
              />
            </div> */}
            <div className="bg-gray-50 sticky bottom-0 left-0 right-0 flex justify-center p-4">
              <Button
                variant="outlined"
                onClick={useClick}
                className="m-2"
                title="Cancelar"
              >
                Cancelar
              </Button>
              <Button title="Crear Evento" type="submit" className="m-2">
                Continuar →
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
