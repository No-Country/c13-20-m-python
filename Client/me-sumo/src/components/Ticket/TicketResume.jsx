import { useSelector } from "react-redux";
import { getBuyerData } from "../../redux/sliceTickets";

export default function TicketResume() {
  const buyer = useSelector(getBuyerData);

  return (
    <div className="bg-primary-500 shadow-md rounded-xl w-80 h-full ml-24 mt-5 p-7">
      <label className="flex mb-2 ml-1 text-xl font-medium text-primary-800 dark:text-white">
        <p>Resumen de Compra</p>
      </label>
      <label className="flex mt-5 mb-1 ml-1 text-l font-medium text-primary-800 dark:text-white">
        <p>Datos de Facturación</p>
      </label>
      <div className="flex justify-between">
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          Nombre y Apellido
        </p>
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          {buyer.name ? buyer.name : "-"}{" "}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          Email
        </p>
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          {" "}
          {buyer.email ? buyer.email : "-"}{" "}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          Telefono
        </p>
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          {" "}
          {buyer.telephone ? buyer.telephone : "-"}{" "}
        </p>
      </div>
      <label className="flex mt-5 mb-1 ml-1 text-l font-medium text-primary-800 dark:text-white">
        <p>Datos de Facturación</p>
      </label>
      <div className="flex ml-1 justify-between align-center">
        <p className="mt-4 mb-1 text-left text-sm text-primary-800">
          Entrada General
        </p>
        <p className="mt-4 mb-1 text-left text-sm ml-1 text-primary-800">$</p>
      </div>
      <div className="flex justify-between">
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800">
          Cantidad:
        </p>
        <p className="mt-4 mb-1 text-left text-xs ml-1 text-primary-800"> - </p>
      </div>
      <div className="flex justify-between">
        <p className="mt-4 mb-1 text-left text-xs text-primary-800">
          ____________________________________________________
        </p>
      </div>
      <div className="flex ml-1 justify-between align-center">
        <p className="mt-4 mb-1 text-left text-l font-medium text-primary-800 dark:text-white">
          TOTAL:
        </p>
        <p className="mt-4 mb-1 text-left text-l font-medium text-primary-800 dark:text-white">
          $
        </p>
      </div>
    </div>
  );
}
