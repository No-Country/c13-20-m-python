import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { BsCalendar3, BsShare, BsGeoAltFill } from "react-icons/bs";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CardEvent({
  eventId,
  name,
  image,
  date,
  location,
  price,
  eventHost
}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Cambia el estado al hacer clic
  };

  const username = eventHost ? eventHost.username : "Desconocido";
  const formattedDate = new Date(date);
  const formattedDateString = formattedDate.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTimeString = formattedDate.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // URL de la imagen por defecto
  const defaultImageURL =
    "https://www.eventindustryshow.com/img/blog/Trabalhar-em-Eventos-11.jpg";

  // Usar la imagen por defecto si 'image' es null o no se proporciona
  const imageUrl = image || defaultImageURL


  return (

    <Link to={`/event/${eventId}`}>
<Card
  onClick={handleCardClick} // Agrega un manejador de clic
  className={`mt-6 ml-7 w-[300px] border rounded-2xl bg-orange-50 h-[400px] transform transition-transform ${
    isClicked
      ? 'scale-105 opacity-70'
      : 'hover:scale-105 hover:opacity-70'
  }`}
>
      <CardHeader className="h-[160px]">
        <div className="items-stretch w-full h-full ">


          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </CardHeader>

      <CardBody className=" text-left items-stretch whitespace-normal">
        <Typography className="mt-2 w-[267px] font-extrabold [font-family:'Lato-ExtraBold',_Helvetica] text-[#003049] text-[18px] tracking-[0] leading-[normal]">
          {name}
        </Typography>
        <div className="mt-4 flex items-center">
          <BsCalendar3 className="mr-2 w-5 h-5 text-[#003049]" />
          <Typography className="text-[#003049] font-normal [font-family:'Lato-ExtraBold',_Helvetica] text-[14px] ${locationFontSizeClass} tracking-[0] leading-[24px]">
            {formattedDateString} - {formattedTimeString}
          </Typography>
        </div>
        <div className="mt-4 flex items-center">
        <BsGeoAltFill
    className="mr-2 w-5 h-5] text-[#003049]"/>
         <Typography
    className={`text-[#003049] text-[14px] font-normal [font-family:'Lato-ExtraBold',_Helvetica] tracking-[0] ${
      location && location.length > 20 ? "leading-[15px]" : "leading-[24px]"
    }`}
  >
            {location}
          </Typography>
        </div>
        <div className="mt-4 flex items-center splace-x-4">
          <MdOutlineConfirmationNumber className="mr-2 w-[18px] h-[18px] text-[#003049]" />
          <Typography className="text-[#003049] font-normal [font-family:'Lato-ExtraBold',_Helvetica] text-[14px] tracking-[0] leading-[24px]">
            {price === "Gratis" ? "Gratis" : `A partir de $${price}`}
          </Typography>
        </div>
        <div className="mt-4 flex items-center justify-between">
  <div className="flex items-center">
    <RxAvatar className="mr-2 w-[18px] h-[18px] text-[#003049]" />
    <Typography className="text-[#003049] font-normal [font-family:'Lato-ExtraBold',_Helvetica] text-[14px] tracking-[0] leading-[24px]">
      {username}
    </Typography>
  </div>
  <div className="flex items-center space-x-2">
    <div className="w-[18px] h-[18px] flex items-center justify-center text-[#F77F00]">
      <BsShare />
    </div>
    <div className="w-[18px] h-[18px] flex items-center justify-center text-[#F77F00]">
      <AiOutlineHeart size={20} />
    </div>
  </div>
</div>

      </CardBody>
    </Card>
    </Link>
  );
}
