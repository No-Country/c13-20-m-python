import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { BsGeoAltFill } from "react-icons/bs";
import ellipse1 from "../../../images/ellipse1.png";
import ellipse2 from "../../../images/ellipse2.png";
import ellipse3 from "../../../images/ellipse3.png";
import ellipse4 from "../../../images/ellipse4.png";

// Crea una matriz con las imágenes
const cardImages = [ellipse1, ellipse2, ellipse3, ellipse4];

export default function CardHost({ eventHost, location }) {
  // Verificar si eventHost está definido antes de acceder a sus propiedades
  if (!eventHost) {
    return <div>No se encontró información del host.</div>;
  }

  // Obtener el username de eventHost
  const username = eventHost.username;

  // Estado para mantener un registro de las imágenes utilizadas
  //eslint-disable-next-line
  const [usedImages, setUsedImages] = useState([]);
  // Estado para almacenar la imagen aleatoria
  //eslint-disable-next-line
  const [randomImage, setRandomImage] = useState(null);

  // Función para obtener una imagen no utilizada aleatoria
  const getRandomImage = () => {
    // Filtra las imágenes que no se han utilizado
    const availableImages = cardImages.filter(
      (image) => !usedImages.includes(image)
    );

    // Si ya se han utilizado todas las imágenes, reinicia el registro de imágenes utilizadas
    if (availableImages.length === 0) {
      setUsedImages([]);
      setRandomImage(cardImages[0]); // Devuelve la primera imagen
    } else {
      // Obtiene una imagen aleatoria de las disponibles
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const selectedImage = availableImages[randomIndex];

      // Registra la imagen utilizada
      setUsedImages([...usedImages, selectedImage]);

      // Establece la imagen aleatoria
      setRandomImage(selectedImage);
    }
  };

  // Obtener una imagen aleatoria cuando el componente se monta
  //eslint-disable-next-line
  useEffect(() => {
    getRandomImage();
    //eslint-disable-next-line
  }, []);

  if (!randomImage) {
    return null; // Mostrar un componente de carga o manejar el caso de imagen nula
  }

  return (
    <Card className="mt-6 ml-7 w-[299px] border rounded-2xl bg-orange-50 drop-shadow-lg h-[300px] flex flex-col justify-center items-center">
      <CardHeader className="w-[120px] h-[120px] rounded-full relative flex items-center justify-center border-black">
        <img
          src={randomImage}
          alt={username}
          className="w-full h-full rounded-full"
        />
      </CardHeader>
      <CardBody className="text-left items-stretch relative whitespace-normal">
        <Typography className="mt-2 w-[267px] [font-family:'Lato-ExtraBold',_Helvetica] font-extrabold text-[#003049] text-[20px] tracking-[0] leading-[normal]">
          {username}
        </Typography>
        <div className="mt-4 flex items-center">
          <BsGeoAltFill className="mr-2 flex-shrink-0 w-[20px] h-[20px] text-[#003049]" />
          <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-normal text-[14px] tracking-[0] leading-[24px]">
            {location}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-[#F77F00]">Seguir</Button>
      </CardFooter>
    </Card>
  );
}
