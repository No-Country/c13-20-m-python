import CreateEventButton from "./CreateEventButton";
import LoginButton from "./LoginButton";
import MyAccountButton from "./MyAccountButton";

export default function Buttons() {
  return (
    <div className="flex gap-5">
      <div className="btn join-item">
        <CreateEventButton />
      </div>
      <div className="btn join-item">
        <LoginButton />
      </div>
      <div className="">
        <MyAccountButton />
      </div>
    </div>
  );
}
