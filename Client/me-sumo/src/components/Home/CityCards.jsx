import { Spinner, Carousel, Button } from '@material-tailwind/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CityCards = () => {
  // Supongamos que tienes una lista de ciudades similar a la de eventos en tu estado global.
  const cities = [
    {
      name: 'Salta',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd8ua48MV-GvaUeTpmCEk_WTPxBlfbv8wUvb1HPUSIUx14NjhS',
    },
    {
      name: 'CABA',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/927/877/124/argentina-buenos-aires-city-light-trails-wallpaper-preview.jpg',
    },
    {
      name: 'Misiones',
      imageUrl: 'https://www.argentina.gob.ar/sites/default/files/cataratas_2.jpg',
    },
    {
      name: 'Tucumán',
      imageUrl:
        'https://media.istockphoto.com/id/538481317/es/foto/independencia-asamblea-en-tucuman-argentina.jpg?s=612x612&w=0&k=20&c=AeWckVQ47xmmoEDfP7mUqgX5pUwZoayJYwfelvMnvD8=',
    },
    {
      name: 'Tandil',
      imageUrl: 'https://i.pinimg.com/1200x/ce/e5/db/cee5dbb4b910eada56848d0cf4911607.jpg',
    },
    {
      name: 'Rosario, Santa Fe',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGTkZRHXrLTJOlFP9HrFHdNy729tgNYIst-eH0XP2Za7x_yOhu61x-1X2rRTf3sS9Fmw&usqp=CAU',
    },
    {
      name: 'Bariloche',
      imageUrl: 'https://media.tacdn.com/media/attractions-content--1x-1/0b/e1/fe/93.jpg',
    },
    {
      name: 'Mendoza',
      imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/91/ff.jpg',
    },
  ];

  const activateSpinner = cities.length === 0;

  return (
    <div className='mt-10 mb-20  mx-28'>
      <Carousel className='border rounded-lg ' controls>
        {activateSpinner ? (
          <div className='flex justify-center gap-2'>
            <Button size='lg' color='black'>
              <FiChevronLeft className='cursor-pointer' />
              <FiChevronRight className='cursor-pointer' />
            </Button>
          </div>
        ) : Array.isArray(cities) && cities.length > 0 ? (
          Array(Math.ceil(cities.length / 4))
            .fill()
            .map((_, index) => (
              <div className='flex gap-4' key={index}>
                {cities.slice(index * 4, (index + 1) * 4).map((city, cityIndex) => (
                  <div key={cityIndex} className='ml-7 border rounded-2xl drop-shadow-lg  w-[299px]'>
                    <div
                      className='w-[299px] h-[400px]  rounded-[12px]'
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(247, 127, 0, 0) 50%, #f77f00 100%), url(${city.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                      }}>
                      <div className="absolute bottom-7 w-[267px] [font-family:'Lato-ExtraBold',_Helvetica] font-extrabold text-orange-50  text-[20px] tracking-[0] leading-[normal]">
                        {city.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
        ) : (
          <Spinner className='h-12 w-12' />
        )}
      </Carousel>
    </div>
  );
};

export default CityCards;
