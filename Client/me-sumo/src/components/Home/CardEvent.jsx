import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

// Define un arreglo de imágenes por defecto con las URLs específicas.
const defaultImages = [
  "https://static3.mujerhoy.com/www/multimedia/202203/17/media/cortadas/apertura-party-kjgF-U1601347275536ie-624x624@MujerHoy.jpeg",
  "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2022/09/GI-1411239140-Day-of-Dead-Feature-1920x1080.jpg",
  "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2022/09/GI-1411239140-Day-of-Dead-Feature-1920x1080.jpg",
  "https://ucarecdn.com/6a00bcdc-efe0-482c-937a-f91202be17c4/-/preview/",
 
];

 // Función para obtener las primeras 4 imágenes de forma aleatoria.
 function getRandomInitialImages() {
  const initialImages = [];
  while (initialImages.length < 4) {
    const randomIndex = Math.floor(Math.random() * defaultImages.length);
    const randomImage = defaultImages[randomIndex];
    if (!initialImages.includes(randomImage)) {
      initialImages.push(randomImage);
    }
  }
  return initialImages;
}

export default function CardEvent({
  name,
  image,
  date,
  location,
  price,
  host,
}) {

  // Genera un índice aleatorio para seleccionar una imagen por defecto.
  const randomIndex = Math.floor(Math.random() * initialImages.length);

  // Selecciona la imagen por defecto usando el índice aleatorio.
  const defaultImage = initialImages[randomIndex];

// Arreglo que almacena las primeras 4 imágenes aleatorias.
const initialImages = getRandomInitialImages();

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image || defaultImage}  alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{date}</Typography>
        <Typography>{location}</Typography>
        <Typography>{price}</Typography>
        <Typography>{host}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
