import userIcon from "../../assets/user-icon.png";

export default function MyAccountButton() {
  return (
    <button className="w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img
        src={userIcon}
        className="w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      />
    </button>
  );
}
