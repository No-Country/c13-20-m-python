// Importa componentes y bibliotecas necesarias
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

// Define una función llamada CardEvent que toma varias propiedades como argumento
export default function CardEvent({
  name,
  image,
  date,
  location,
  price,
  eventHost,
}) {

  const username = eventHost ? eventHost.username : "Desconocido";
  

 // Formatea la fecha en el formato deseado utilizando objetos Date
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

  // Retorna un componente Card con contenido dinámico basado en las propiedades
  return (
    <Card className="mt-6 ml-7  w-[299px] border rounded-2xl bg-orange-50 drop-shadow-lg h-[400px]">
      <CardHeader  className="relative drop-shadow-lg  h-56">
        
        {/* Muestra una imagen centrada y ajustada */}
        <div className="items-stretch w-full h-full overflow-hidden">
          <img
            src={image}
            alt="card-image"
            className="w-full h-full object-cover rounded-lg "
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </CardHeader>
      <CardBody className="text-left items-stretch relative  whitespace-normal ">
       
        {/* Muestra el nombre del evento */}
        <Typography
          className="mt-2 w-[267px] [font-family:'Lato-ExtraBold',_Helvetica] font-extrabold text-[#003049] text-[20px] tracking-[0] leading-[normal]"
        >
          {name}
        </Typography>
        
        {/* Muestra la fecha y hora del evento */}
        <div className="mt-4 flex items-center">
          <BsCalendar3  className="mr-2 w-[20px] h-[20px] text-[#003049]" />
          <Typography
            className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-normal text-[14px] tracking-[0] leading-[24px] ">
            {formattedDateString} - {formattedTimeString}
          </Typography>
        </div>
        
        {/* Muestra la ubicación del evento */}
        <div className="mt-4 flex items-center">
          <BsGeoAltFill className="mr-2 flex-shrink-0 w-[20px] h-[20px] text-[#003049]" />
          <Typography 
            className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-normal text-[14px] tracking-[0] leading-[24px]">
            {location}
          </Typography>
        </div>
        
        {/* Muestra el precio del evento */}
        <div className="mt-4 flex items-center">
          <MdOutlineConfirmationNumber className="mr-2 w-[20px] h-[20px] text-[#003049]" />
          <Typography
            className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-normal text-[14px] tracking-[0] leading-[24px]">
             {price === "Gratis" ? "Gratis" : `A partir de $${price}`}
          </Typography>
        </div>
        
        {/* Muestra el anfitrión del evento y los iconos de compartir y me gusta */}
        <div className="mt-4 flex items-center">
          <RxAvatar className="mr-2 w-[20px] h-[20px] text-[#003049]"  />
          <Typography
            className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-normal text-[14px] tracking-[0] leading-[24px]">
            {username}
          </Typography>
          <div className="ml-28 flex items-center space-x-2">
            <div className="w-[20px] h-[18px] flex items-center justify-center text-[#F77F00]">
              <BsShare />
            </div>
            <div className="w-[20px] h-[18px] flex items-center justify-center text-[#F77F00]">
              <AiOutlineHeart size={20} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}








