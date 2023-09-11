import Select from "react-select";
import { useForm, useController } from "react-hook-form";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setFilterEventsBy } from "../../redux/sliceEvents";

export default function Dropdown({ events, placeholder, property }) {
  const { control } = useForm();
  const dispatch = useDispatch();

  const options = events.map((cat) => ({
    value: cat[property],
    label: `${cat[property]}`,
  }));
  const {
    field: { value: category, onChange: categoriesOnChange },
  } = useController({ name: "categories", control });

  const onChangeCat = (selectedCategories) => {
    dispatch(setFilterEventsBy(selectedCategories));
  };

  const renderOption = (option) => {
    if (typeof option.value === "number") {
      return option.value === 0 ? "gratis" : option.value;
    } else if (moment(option.value, "YYYY-MM-DDTHH:mm:ssZ", true).isValid()) {
      const date = moment(option.value);
      if (date.isSame(moment(), "week")) {
        return "Eventos de esta semana";
      } else if (date.isSame(moment(), "month")) {
        return "Eventos de este mes";
      }
    }
    return option.label;
  };

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
        options={options.map((option) => ({
          ...option,
          label: renderOption(option),
        }))}
        value={options.find((t) => t.value === category)}
        onChange={(e) => {
          const selectedCategories = e.map((c) => c.value);
          categoriesOnChange(selectedCategories); // Update the category state
          onChangeCat(selectedCategories); // Dispatch the action
        }}
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
        className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-72 mt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
