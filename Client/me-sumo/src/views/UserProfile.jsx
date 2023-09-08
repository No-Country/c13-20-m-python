import { Link } from 'react-router-dom';
import Input from '../components/Shared/Input';
import { useForm } from 'react-hook-form';

export default function UserProfile() {
  const {
    // handleSubmit,
    register,
    //formState: { errors },
  } = useForm();
  return (
    <div className='bg-gray-100 min-h-screen p-4'>
      <div className='max-w-2xl flex mx-auto bg-white rounded-lg shadow-lg p-6'>
        <div className='bg-gray-800 text-white w-1/4 relative top-0 left-0 flex-col'>
          <div className='p-6 my-2 text-2xl font-semibold'>Menú</div>
          <ul className='flex flex-col p-4'>
            <li className='my-3'>
              <Link to='/mis-datos' className='hover:bg-gray-600 p-2 rounded'>
                Mis datos
              </Link>
            </li>
            <li className='my-3'>
              <Link to='/intereses' className='hover:bg-gray-600 p-2 rounded'>
                Intereses
              </Link>
            </li>
            <li className='my-3'>
              <Link to='/ajustes' className='hover:bg-gray-600 p-2 rounded'>
                Ajustes
              </Link>
            </li>
          </ul>
        </div>
        <div className='p-8'>
          <div className='flex justify-center items-center mb-4'>
            {/* <img src='' alt='Foto de perfil' className='w-16 h-16 rounded-full mr-4' /> */}
            <h1 className='text-2xl font-semibold mb-4'>Perfil de Usuario</h1>
          </div>
          <div>
            <Input
              labelText='Nombre y apellido'
              type='text'
              placeholder=''
              name='name'
              register={register}
              //                    error={errors.email?.message}
            />
            <Input
              labelText='Correo electronico'
              type='text'
              placeholder=''
              name='name'
              register={register}
              //                    error={errors.email?.message}
            />
            <Input
              labelText='Telefono'
              type='text'
              placeholder=''
              name='name'
              register={register}
              //                    error={errors.email?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
