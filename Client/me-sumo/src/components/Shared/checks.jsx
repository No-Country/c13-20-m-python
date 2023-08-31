// eslint-disable-next-line
import check_circle from "../../assets/icons/check_circle.svg"

export default function Checks() {
  return (
      <div>
      <div className="flex justify-center items-center flex-row p-4">
            <div className="">
              <img
                src={check_circle}
                className="h-auto m-1 pl-8 md:pl-12"
              />
              <p className="text-center">Informacion Basica </p>
            </div>
            <div className=""> . . . . . . . . . . . . . </div>
            <div className="">
              <img
                src={check_circle}
                className="h-auto m-1 pl-4"
              />
              <p className="text-left">Entradas <br /> </p>
            </div >
            <div className=""><p> . . . . . . . . . . . . . </p></div>
            <div className="">
              <img
                src={check_circle}
                className="h-auto  m-1 pl-4"
              />
              <p className="text-left">Publicar <br /></p>
            </div>
          </div>
      </div>
  );
}
