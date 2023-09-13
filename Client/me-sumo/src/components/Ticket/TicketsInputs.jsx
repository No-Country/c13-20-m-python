export default function TicketsInputs({
  placeholderText,
  labelText,
  register,
  type,
  name,
}) {
  return (
    <div className="flex flex-col ml-7 pl-10 pt-5">
      <label className="flex mb-2 ml-1 text-sm font-medium text-primary-800 dark:text-white">
        <h1>{labelText}</h1>
      </label>
      <input
        type={type}
        name={name}
        {...register(name)}
        placeholder={placeholderText}
        className="h-10 p-2 border border-primary-800 rounded-xl shadow appearance-none w-full bg-transparent placeholder-primary-800"
      />
    </div>
  );
}
