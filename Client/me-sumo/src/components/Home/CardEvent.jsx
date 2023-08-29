import construction from "../../assets/under-construction.png";

export default function CardEvent() {
  return (
    <div className="card w-72 h-72 bg-base-100 shadow-xl">
      <figure>
        <img src={construction} alt="Shoes" />
      </figure>
      <div className="p-5 rounded-xl">
        <h2 className="">CARD DE PRUEBA</h2>
        <p>Esta es una card de prueba para mostrar un evento</p>
      </div>
    </div>
  );
}
