import QRCode from "react-qr-code";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getEventSelected } from "../../redux/sliceTickets";
import { BiArrowToBottom } from 'react-icons/bi';
import { BsCalendar3, BsGeoAltFill} from 'react-icons/bs';
import { MdOutlineConfirmationNumber } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import moment from 'moment';

export default function TicketQR({onClose}) {
  const event = useSelector(getEventSelected)
  const value = "QR";
  const formatedDate = moment(event.date).locale('es').format('ddd. D [de] MMMM, HH:mm')
  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60'>
      <div className='flex flex-col justify-between modal-content bg-white m-auto p-6 rounded-lg text-left w-1/2'>
        <div className='flex flex-row items-center mt-4 mb-1'>
          <img src={event.event_images} />
        </div>
        <div className='flex flex-row items-center self-center mt-4 mb-1'>
          <RxAvatar />
          <p className='text-left text-m ml-1 text-primary-800'>{event.eventHost.username}</p>
        </div>
        <div className='flex flex-row mt-4 mb-1'>
          <p className='text-left text-xl text-bold ml-1 text-primary-800'>{event.name}</p>
        </div>
        <div className='flex flex-row items-center mt-4 mb-1'>
          <MdOutlineConfirmationNumber />
          <p className='text-left text-l ml-1 text-primary-800'>Precio de la entrada: {event.ticketPrice}</p>
        </div>
        <div className='flex flex-row items-center mt-4 mb-1'>
          <BsCalendar3 />
          <p className='text-left text-xs ml-1 text-primary-800'>{formatedDate}</p>
        </div>
        <div className='flex flex-row items-center mt-4 mb-1'>
          <BsGeoAltFill />
          <p className='text-left text-xs ml-1 text-primary-800'>{event.location}</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-4 mb-3'>Tu QR de la entrada del evento</p>
          <QRCode size={220} value={value} />
          <p className='mt-4'>Descargalo para usarlo luego</p>
          <BiArrowToBottom className="h-8 w-8 cursor-pointer"/>
          <button
            type='submit'
            onClick={onClose}
            className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
            Volver atras
          </button>
        </div>
      </div>
    </div>
  );
}
