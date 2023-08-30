import { useForm } from "react-hook-form";

export default function InputTerms() {
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
    <div className="flex items-start mb-2">
      <div className="flex items-center h-5">
        <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          {...register("checkbox")}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          required={true}
        ></input>
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="terms" className="text-gray-500 dark:text-gray-300">
          Acepto los términos y condiciones
        </label>
      </div>
    </div>
  );
}
