import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import userPhoto from "../assets/user.jpg";

export default function UserProfile() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState("");

  const { searchUserData } = useUserData();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await searchUserData();
      setUserName(userData.userName);
      setUserEmail(userData.userEmail);
      setUser(userData.user);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="bg-primary-500 shadow-md  min-h-screen p-4">
      <div className="max-w-2xl flex mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="bg-primary-700 text-primary-800 w-1/4 relative top-0 left-0 flex-col">
          <div className="p-6 my-2 text-2xl font-semibold">Menú</div>
          <ul className="flex flex-col p-4">
            <li className="my-3">
              <Link
                to="/user-profile"
                className="hover:bg-gray-600 p-2 rounded"
              >
                Mis datos
              </Link>
            </li>

            <li className="my-3">
              <Link to="/organizador" className="hover:bg-gray-600 p-2 rounded">
                Organizador
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-8">
          <div className="flex justify-center items-center mb-4">
            <img
              src={userPhoto}
              alt="Foto de perfil"
              className="w-16 h-16 rounded-full mr-4"
            />
            <h1 className="text-2xl font-semibold text-primary-800">
              Perfil de Usuario
            </h1>
          </div>
          <div>
            <div>
              <p className="text-left ml-3 mb-1">Nombre de Usuario</p>
              <div className="text-xl text-primary-800 flex pt-2 justify-center border border-primary-50 border-1 rounded-xl h-12">
                {user}
              </div>
            </div>

            <div>
              <p className="text-left ml-3 mb-1 mt-3">Nombre y Apellido</p>
              <div className="text-xl text-primary-800 flex pt-2 justify-center border border-primary-50 border-1 rounded-xl h-12">
                {userName}
              </div>
            </div>

            <div className="">
              <p className="text-left ml-3 mb-1 mt-3">Correo Electrónico</p>
              <div className="text-xl text-primary-800 flex pt-2 justify-center border border-primary-50 border-1 rounded-xl h-12">
                {userEmail}
              </div>
            </div>

            <button className="bg-orange-600 w-28 h-9 rounded-xl ml-80 mt-5 text-gray-50">
              Modificar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
