// eslint-disable-next-line
import check_circle from "../../assets/icons/check_circle.svg";

export default function Checks({ firstCheck, secondCheck, thirdCheck }) {
  return (
    <div>
      <div className="flex justify-center items-center flex-row p-4">
        <div className="">
          <img src={check_circle} className="h-auto m-1 pl-8 md:pl-12" />
          <p className="text-center">{firstCheck} </p>
        </div>
        <div className="">
          <p className="mb-5"> . . . . . . . . . . . . . </p>
        </div>
        <div className="">
          <img src={check_circle} className="h-auto m-1 ml-9 pl-4" />
          <p className="text-center">
            {secondCheck} <br />{" "}
          </p>
        </div>
        <div className="">
          <p className="mb-5"> . . . . . . . . . . . . . </p>
        </div>
        <div className="">
          <img src={check_circle} className="h-auto  m-1 pl-4" />
          <p className="text-center ml-4">
            {thirdCheck} <br />
          </p>
        </div>
      </div>
    </div>
  );
}
