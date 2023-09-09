import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { BsCalendar3, BsShare } from "react-icons/bs";
import { RiPinDistanceLine } from "react-icons/ri";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";

export default function CardEvent({
  name,
  image,
  date,
  location,
  price,
  host,
  onAction,
}) {
  // Formatear la fecha en el formato deseado
  const formattedDate = new Date(date);
  const formattedDateTimeString = formattedDate.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="mt-6 w-72 border border-gray-300 rounded">
      <CardHeader color="blue-gray" className="relative h-56">
        {/* Centrar la imagen y ajustar su tamaño */}
        <div className="w-full h-full overflow-hidden" onClick={onAction}>
          <img
            src={image}
            alt="card-image"
            className="w-full h-full object-cover"
            style={{ maxHeight: "100%", maxWidth: "100%" }} // Agrega estilos para ajustar el tamaño de la imagen
          />
        </div>
        <div className="absolute top-2 right-2">
          <BsShare size={20} className="mr-2" />
          <AiFillHeart size={20} />
        </div>
      </CardHeader>
      <CardBody>
        <Typography
          variant="h2"
          color="blue-gray"
          font="poppins"
          weight="semibold"
          className="mb-2 text-xs"
        >
          {name}
        </Typography>
        <div className="mb-2">
          <div className="flex items-center">
            <BsCalendar3 size={20} className="mr-2" />
            <Typography
              variant="h6"
              color="blue-gray"
              font="poppins"
              weight="light"
              className="text-xs"
            >
              {formattedDateTimeString}
            </Typography>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <RiPinDistanceLine size={20} className="mr-2" />
            <Typography className="text-xs">{location}</Typography>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <MdOutlineConfirmationNumber size={20} className="mr-2" />
            <Typography
              variant="h6"
              color="blue-gray"
              font="poppins"
              weight="light"
              className="text-xs"
            >
              {price}
            </Typography>
          </div>
        </div>
        <div className="flex items-center">
          <RxAvatar size={20} className="mr-2" />
          <Typography
            variant="h6"
            color="blue-gray"
            font="poppins"
            weight="light"
            className="text-xs"
          >
            {host}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
