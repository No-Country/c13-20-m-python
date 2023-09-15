// eslint-disable-next-line
import check_circle from "../../assets/icons/check_circle.svg";

export default function Checks({ firstCheck, secondCheck, thirdCheck }) {
  return (
    <div>
      <div className="flex justify-center items-center flex-row p-8 pl-16">
        <div className="flex flex-col justify-center items-center">
          <img src={check_circle} className="h-auto m-1 " />
          <p className="text-center">{firstCheck} </p>
        </div>
        <div className="">
          <p className="mb-5"> . . . . . . . . . . . . . </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img src={check_circle} className="h-auto m-1 " />
          <p className="text-center"> {secondCheck}</p>
        </div>
        <div className="">
          <p className="mb-5"> . . . . . . . . . . . . . </p>
        </div>
        <div className="flex flex-col justify-center items-center ml-5">
          <img src={check_circle} className="h-auto m-1" />
          <p className="text-center">
            {thirdCheck} <br />
          </p>
        </div>
      </div>
    </div>
  );
}
