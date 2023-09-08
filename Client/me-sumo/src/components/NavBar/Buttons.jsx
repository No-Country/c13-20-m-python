import CreateEventButton from "./CreateEventButton";
import LoginButton from "./LoginButton";
// import MyAccountButton from "./MyAccountButton";

export default function Buttons() {
  return (
    <div className='flex'>
      <div className='btn mx-5 join-item'>
        <CreateEventButton />
      </div>
      <div className='btn mx-5 join-item'>
        <LoginButton />
      </div>
      {/* <div className='mx-5'>
        <MyAccountButton />
      </div> */}
    </div>
  );
}
