import Cards from "../components/Home/Cards";
import CarouselWithContent from "../components/Home/Carousel";
import { Typography } from "@material-tailwind/react";
import HostCards from "../components/Home/Host";
import { FooterWithSocialLinks } from "../components/Footer/Footer";
import CityCards from "../components/Home/CityCards";

export default function Home() {
  return (
    <div>
      <CarouselWithContent className=" w-full" /> 
      <div className="w-full pt-4">
        <div className="text-left ">
          <Typography  className="md:justify-start text-[#003049] [font-family:'Lato-SemiBold',_Helvetica] font-semibold  text-[40px] tracking-[0] leading-[normal] whitespace-nowrap mt-32 mb-10 ml-52">
            Eventos Populares
          </Typography>
        </div>
        <Cards />
      </div>
      <div>
      <div className="text-left">
      <Typography className="text-[#003049] [font-family:'Lato-SemiBold',_Helvetica] font-semibold  text-[40px] tracking-[0] leading-[normal] whitespace-nowrap mt-32 mb-10 ml-52">
        Organizadores
          </Typography>
          </div>
        <HostCards  />
      </div>
      <div>
        <div className="text-left">
          <Typography className="text-[#003049] [font-family:'Lato-SemiBold',_Helvetica] font-semibold  text-[40px] tracking-[0] leading-[normal] whitespace-nowrap mt-32 mb-10 ml-52">
            Explora eventos en estas ciudades
          </Typography>
        </div>
        <CityCards /> 
      </div>
      <div>
        <FooterWithSocialLinks className="w-full" /> 
      </div>
    </div>
  );
}


