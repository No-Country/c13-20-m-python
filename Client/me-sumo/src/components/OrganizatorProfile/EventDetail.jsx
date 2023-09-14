import { Typography } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import moment from "moment";

export default function EventDetail({
  image,
  name,
  date,
  totalTickets,
  saledTickets,
  price,
  state,
}) {
  const ticketsSaled = Math.ceil((saledTickets / totalTickets) * 100);
  const totalSales = price * saledTickets;

  const formatedDate = moment(date)
    .locale("es")
    .format("ddd. D [de] MMMM, HH:mm");

  return (
    <div className="w-full flex pb-10 border-b border-solid border-primary-800 border-opacity-25">
      <div className="w-1/3 mt-10 pl-7 flex">
        <div className="w-1/3 ">
          <img src={image} alt="event-img" className="rounded-xl" />
        </div>
        <div className="w-2/3 pl-5">
          <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-semibold text-[20px] tracking-[0] leading-[24px] pt-5">
            {name}
          </Typography>
          <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-medium text-[15px] tracking-[0] leading-[24px] pt-3">
            Fecha: {formatedDate}
          </Typography>
          <div className="flex items-center gap-1 pt-10">
            <BsPencilSquare />
            <a href="">Detalles del evento</a>
          </div>
        </div>
      </div>
      <div className="flex w-2/3 pl-7 justify-center items-center">
        <div className="w-1/4">
          <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-medium text-[15px] tracking-[0] leading-[24px] ml-10 mb-1">
            {saledTickets} / {totalTickets}
          </Typography>
          <div className="w-4/6">
            <Progress value={ticketsSaled} size="sm" color="orange" />
          </div>
        </div>
        <div className="w-1/4">
          <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-medium text-[15px] tracking-[0] leading-[24px]">
            $ {totalSales}
          </Typography>
        </div>
        <div></div>
        <div className="w-1/4">
          {state ? (
            <div className="flex justify-center items-center text-gray-50 bg-green-800 w-28 h-9 rounded-lg">
              <GoDotFill className="mt-1 mr-1" /> Activo
            </div>
          ) : (
            <div>Inactivo</div>
          )}
        </div>
        <div className="w-1/4 text-xl pl-7">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
}
