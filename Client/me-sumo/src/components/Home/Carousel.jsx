import { Carousel, Typography} from "@material-tailwind/react";
import loginImg from "../../assets/login-image.png";
import asistente from "../../assets/images/asistente.png";
const images = [
  {
    src: loginImg,
    text: "Fiesta de disfraces",
  },
  {
    src: asistente,
    text: "Tomar el te",
  },
  {
    src: loginImg,
    text: "Juegos de mesa",
  },
];

export default function CarouselWithContent() {
  return (

    <Carousel loop={true} className="h-96 ">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-96">
          <div className="relative h-96">
            <img
              src={image.src}
              alt={`image ${index + 1}`}
              className="absolute inset-0 w-full h-96 object-cover"
            />

          </div>
          <div className='absolute inset-0 grid place-items-center bg-black/75'>
            <div className='w-3/4 text-center md:w-2/4'>
              <Typography variant='h1' color='white' font='poppins' className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
                {image.text}
              </Typography>
              <Typography variant='lead' color='white' font='poppins' className='mb-12 opacity-80'>
                It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
