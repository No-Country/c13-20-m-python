import Select from "react-select";
import { useForm, useController } from "react-hook-form";

export default function Dropdown({ categorias, placeholder }) {
  const { control } = useForm();
  const options = categorias.map((cat, index) => ({
    value: index,
    label: `${cat}`,
  }));
  const {
    field: { value: category, onChange: categoriesOnChange },
  } = useController({ name: "categories", control });
  return (
    <div>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isSelected ? "black" : "black",
          }),
        }}
        placeholder={placeholder}
        isMulti
        options={options}
        value={options.find((t) => t.value === category)}
        onChange={(e) => categoriesOnChange(e.map((c) => c.value))}
        theme={(theme) => ({
          ...theme,
          borderRadius: 7,

          colors: {
            ...theme.colors,
            background: "grey",
            primary25: "grey",
            primary: "black",
          },
        })}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-72 mt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
