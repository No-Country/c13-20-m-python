import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function Event() {
    const {
        handleSubmit,
        register
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            direccion: '',
        },
    });

    const [address, setAdress] = useState('Sta Fe 581, S2000 Rosario, Santa Fe');
    const [autocomplete, setAutocomplete] = useState('');

    function initMap() {
        // eslint-disable-next-line no-undef
        const geocoder = new google.maps.Geocoder();
        const mapOptions = {
            center: { lat: -32.94759613076781, lng: -60.630369245338336 },
            zoom: 15,
        };

        // eslint-disable-next-line no-undef
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);

        geocoder.geocode({ address: address }, (results, status) => {
            // eslint-disable-next-line no-undef
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                // eslint-disable-next-line no-undef, no-unused-vars
                const marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                });
            } else {
                console.error('Geocode was not successful for the following reason:', status);
            }
        });
    }

    useEffect(() => {
        initMap();

        const input = document.getElementById('direccion');

        // eslint-disable-next-line no-undef, no-unused-vars
        setAutocomplete(new google.maps.places.Autocomplete(input, {
            types: ['geocode'],
            fields: ['name'],
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address]);

    const handleMap = () => {
        // eslint-disable-next-line no-undef
        let place = autocomplete.getPlace();
        setAdress(place.name);
    }


    return (
      <div className='flex items-center justify-center h-screen bg-gray-500'>
        <div className='w-4/5 max-w-screen-sm p-4'>
          <h1 className='text-xl font-bold text-center mb-4'>Creacion de evento</h1>
          <form className='space-y-2' onSubmit={handleSubmit(handleMap)}>
            <div>
              <input
                {...register('direccion')}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='direccion'
                type='text'
                placeholder='Escriba la direccion del evento'
                name='direccion'
              />
            </div>
            <button id='buscar'>Buscar</button>
          </form>
          <div id='map' className='w-full h-96 my-5'></div>
        </div>
      </div>
    );
}
