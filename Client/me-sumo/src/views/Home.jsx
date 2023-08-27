import construction from "../assets/under-construction.png";

export default function Home() {
  return (
    <div className="w-full pt-4">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        HOME
      </h1>
      <img src={construction} alt="under-construction" />
    </div>
  );
}
