import { Carousel, Typography, Button } from "@material-tailwind/react";
import loginImg from "../../assets/login-image.png";
import asistente from "../../assets/images/asistente.png"
const images = [{
  src: loginImg,
  text: 'Fiesta de disfraces'
},
{
  src: asistente,
  text: 'Tomar el te'
},
{
  src: loginImg,
  text: 'Juegos de mesa'
}
];

export default function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, index) => (
        <div key={index} className="relative w-full">
          <div className="relative h-0 pb-[56.25%]">
            <img
              src={image.src}
              alt={`image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 grid place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {image.text}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explorá
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}