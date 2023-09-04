import useInterestSelector from "../../hooks/useInterestSelector"; // Importa el gancho personalizado para gestionar la selección de intereses
import InterestSelector from "../../components/Interests/InterestSelector2"; // Importa un componente para mostrar la selección de intereses

// Importa una serie de iconos para categorías de intereses
import {
  MdOutlineSportsBasketball,
  MdRestaurant,
  MdSportsEsports,
} from "react-icons/md";
import { AiFillSignal } from "react-icons/ai";
import { PiMusicNotesFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidMovie, BiDuplicate } from "react-icons/bi";
import { FaPalette } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { MdScience } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { Alert, Typography, Button } from "@material-tailwind/react"; // Importa componentes de Material Tailwind para alertas, texto y botones

// Definición de intereses y sus categorías
const interests = [
  { nombre: "Deportes", categoria: "Deportes" },
  { nombre: "Gastronomia", categoria: "Gastronomia" },
  { nombre: "Negocios", categoria: "Negocios" },
  { nombre: "Musica", categoria: "Musica" },
  { nombre: "E-sports", categoria: "E-sporst" },
  { nombre: "Cursos y Capacitaciones", categoria: "Cursos y Capacitaciones" },
  { nombre: "Cine", categoria: "Cine" },
  { nombre: "Arte", categoria: "Arte" },
  { nombre: "Teatro", categoria: "Teatro" },
  { nombre: "Ciencia y Tecnologia", categoria: "Ciencia y Tecnologia" },
  { nombre: "Salud", categoria: "Salud" },
  { nombre: "Otros", categoria: "Otros" },
];

// Iconos asociados a categorías de intereses
const categoryIcons = {
  Deportes: MdOutlineSportsBasketball,
  Gastronomia: MdRestaurant,
  Negocios: AiFillSignal,
  Musica: PiMusicNotesFill,
  "E-sporst": MdSportsEsports,
  "Cursos y Capacitaciones": IoSchoolSharp,
  Cine: BiSolidMovie,
  Arte: FaPalette,
  Teatro: MdTheaterComedy,
  "Ciencia y Tecnologia": MdScience,
  Salud: GiHealthNormal,
  Otros: BiDuplicate,
};

// Componente principal de la página de intereses
const InterestsPage = () => {
  // Utiliza el gancho personalizado `useInterestSelector` para gestionar la selección de intereses
  const {
    selectedInterests,
    toggleInterest,
    showAlert,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useInterestSelector(interests);

  return (
    <div>
      {/* Sección de Alerta que se muestra si no se seleccionan intereses */}
      {showAlert && (
        <div className="flex justify-center items-center h-full">
          <Alert color="red" className="w-2/5">
            <Typography variant="small" font="poppins">
              Por favor selecciona al menos un interés.
            </Typography>
          </Alert>
        </div>
      )}
      
      {/* Componente `InterestSelector` que muestra la selección de intereses */}
      <div className="w-2/8 mb-4">
        <InterestSelector
          interests={interests}
          selectedInterests={selectedInterests}
          toggleInterest={toggleInterest}
          handleNextButtonClick={handleNextButtonClick}
          showAlert={showAlert}
          categoryIcons={categoryIcons}
        />
      </div>

      {/* Botones para avanzar y retroceder */}
      <div className="mt-4 flex justify-end space-x-2">
        <Button
          color="black"
          buttonType="filled"
          size="small"
          rounded
          block={false}
          ripple="light"
          onClick={handlePrevButtonClick}
          className="hover:bg-gray-900 active:bg-gray-900"
        >
          Anterior
        </Button>
        <Button
          color="black"
          buttonType="filled"
          size="small"
          rounded
          block={false}
          ripple="light"
          onClick={handleNextButtonClick}
          className="hover:bg-gray-900 active:bg-gray-900"
        >
          Finalizar y guardar
        </Button>
      </div>
    </div>
  );
};

export default InterestsPage;

