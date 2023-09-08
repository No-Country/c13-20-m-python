import Cards from "../components/Home/Cards";
import CarouselWithContent from "../components/Home/Carousel";
import { Typography } from "@material-tailwind/react";
export default function Home() {
  return (
    <div className="w-full pt-4 wx-10%">
      <CarouselWithContent />
    <div className="text-left">
      <Typography variant="h5" font="poppins" weight="semibold" className="mt-4 mb-2 text=xs">
        Eventos Populares
      </Typography>
    </div>
      <Cards />
    </div>
  );
}
