import { useForm } from "react-hook-form";

export default function InputMail() {
  const {
    register,

    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div>
      {" "}
      <label
        htmlFor="email"
        className="flex mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        email
      </label>
      <input
        type="email"
        {...register("email")}
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Ingresa tu email"
        required=""
      ></input>
    </div>
  );
}
