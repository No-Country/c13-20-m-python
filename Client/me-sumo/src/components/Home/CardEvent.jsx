export default function CardEvent({
  name,
  image,
  date,
  location,
  price,
  host,
}) {
  return (
    <div className="card w-72 h-72 bg-base-100 shadow-xl">
      <div className="p-5 rounded-xl">
        <img src={image} alt="card-image" />
        <h2 className="">{name}</h2>
        <p>{date}</p>
        <p>{location}</p>
        <p>Precio: {price}</p>
        <h3>{host}</h3>
      </div>
    </div>
  );
}
