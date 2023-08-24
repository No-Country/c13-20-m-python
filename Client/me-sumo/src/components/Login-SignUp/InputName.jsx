import { useForm } from "react-hook-form";

export default function InputName() {
  const {
    register,
    // formState: { errors },
  } = useForm();

  return (
    <div>
      {" "}
      <label
        htmlFor="name"
        className="flex ml-1 mb-1.5 text-sm font-medium text-gray-900 dark:text-white"
      >
        Nombre
      </label>
      <input
        type="text"
        {...register("name")}
        name="name"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1"
        placeholder="Ingresa tu nombre de Usuario"
        required="true"
      ></input>
    </div>
  );
}
