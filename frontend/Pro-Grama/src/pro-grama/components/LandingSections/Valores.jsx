import React from "react";
import { FiHeadphones } from "react-icons/fi";

const Valores = () => {
  return (
    <div className="min-h-screen min-w-fit bg-Blue">
      <div className="text-center">
        <h2 className="text-4xl py-16">Nuestros Valores</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center py-6 text-center ">
        <div className="py-6">
          <div className="bg-gray-500 rounded-lg w-[19.5rem] h-[17.8rem] mx-auto ">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/ways-to-relax-1590605206.jpg"
              className="h-full aspect-video rounded"
            />
          </div>
          <div className="py-4 text-3xl text-center">
            <p>Flexibilidad</p>
          </div>
          <div className="text-xl max-w-md">
            <p>
              Consideramos que cada persona es unica, y por lo tanto queremos
              dár la oportunidad de que estudien a su manera y su tiempo.
            </p>
          </div>
        </div>
        <div className="py-6">
          <div className="bg-gray-500 rounded-lg w-[19.5rem] h-[17.8rem] mx-auto ">
            <img
              src="https://statics.forbesargentina.com/2022/01/61d9cbaedaa6a.jpeg"
              className="h-full aspect-video rounded"
            />
          </div>
          <div className="py-4 text-3xl text-center">
            <p>Comunidad</p>
          </div>
          <div className="text-xl max-w-md">
            <p>
              Todo proceso de aprendisaje es más llevadero si estamos
              acompañados, por lo que te invitamos a que te unas a nuestra
              comunidad de discord asi nos ayudamos a crecer mutuamente.
            </p>
          </div>
        </div>
        <div className="py-6">
          <div className="bg-gray-500 rounded-lg w-[19.5rem] h-[17.8rem] mx-auto ">
            <img
              src="https://baufest.com/wp-content/uploads/2021/07/Programadores-Que-Trabajan-En-El-Software-En-La-Oficina.-Equipo-De-Personas-Codificando-Nueva-AplicaciA%C2%B3n.-1200x796.png"
              className="h-full aspect-video rounded"
            />
          </div>
          <div className="py-4 text-3xl text-center">
            <p>Innovación</p>
          </div>
          <div className="text-xl max-w-md">
            <p>
              Estamos interesados en el futuro y que seas parte del mismo, por
              eso procuramos tener los cursos con las habilidades más recientes,
              que te puedan ayudar a ser parte del mañana.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <button class="relative overflow-hidden text-md font-medium text-BlueDark rounded-lg  bg-Green hover:text-GrayDark dark:text-white focus:ring-4 focus:outline-none focus:ring-GreenLight dark:focus:ring-Green">
          <span className="flex px-16 py-2.5 text-BlueDark">
            <FiHeadphones className="text-2xl" />
            Discord
          </span>
        </button>
      </div>
    </div>
  );
};

export default Valores;
