import Cards from "../components/Home/Cards";

export default function Home() {
  return (
    <div className="w-full pt-4">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        HOME
      </h1>
      <Cards />
    </div>
  );
}
