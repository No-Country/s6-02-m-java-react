import React from "react";
import {
  AiFillBehanceSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Users = {
  data: [
    {
      id: 1,
      nombre: "Lucas López",
      rol: "Backend - Java",
      github: "https://github.com/LucasLopezd",
      linkedIn: "https://www.linkedin.com/in/lucas-l%C3%B3pez-delgado/",
    },
    {
      id: 2,
      nombre: "Lucas Gónzalez",
      rol: "Backend - Java",
      github: "https://github.com/lucas2205",
      linkedIn: "https://www.linkedin.com/in/lucasmartingonzalez/",
    },
    {
      id: 3,
      nombre: "Ale Vedoya",
      rol: "Backend - Java",
      github: "https://github.com/AleVedoya",
      linkedIn: "https://www.linkedin.com/in/alejandravedoya/",
    },
    {
      id: 4,
      nombre: "Adonis Castellanos",
      rol: "Backend - Java",
      github: "https://github.com/AdonisCastellanos",
      linkedIn: "-",
    },
    {
      id: 5,
      nombre: "Leonardo Dávalos",
      rol: "Backend - Java",
      github: "https://github.com/davaloslm",
      linkedIn: "https://linkedin.com/in/leonardo-davalos",
    },
    {
      id: 6,
      nombre: "Luciano Cerullo",
      rol: "React - Frontend",
      github: "https://github.com/LucianoCerullo77",
      linkedIn: "https://www.linkedin.com/in/lucianocerullo77/",
    },
    {
      id: 7,
      nombre: "Nicolas Gutierrez",
      rol: "React - Frontend",
      github: "https://github.com/ag171980",
      linkedIn: "https://www.linkedin.com/in/alexis-nicolas-gutierrez/",
    },
    {
      id: 8,
      nombre: "Luis Navarro",
      rol: "React - Frontend",
      github: " https://github.com/luisnava6667",
      linkedIn: "https://www.linkedin.com/in/luisnavarro-fullstack/ ",
    },
    {
      id: 9,
      nombre: "Francisco Santos",
      rol: "React - Frontend",
      github: "https://github.com/FranciscoSantos01",
      linkedIn: "https://www.linkedin.com/in/francisco-santos-a6973a1ab/",
    },
    {
      id: 10,
      nombre: "Nathalia Riascos",
      rol: "React - Frontend",
      github: "https://github.com/NathaliaRiascos",
      linkedIn: "https://www.linkedin.com/in/francisco-santos-a6973a1ab/",
    },
    {
      id: 11,
      nombre: "Sebastian Barcia",
      rol: "React - Frontend",
      github: "https://github.com/sebastianbarcia",
      linkedIn: "https://www.linkedin.com/in/francisco-santos-a6973a1ab/",
    },
    {
      id: 12,
      nombre: "Bianca Olsson",
      rol: "Diseñadora UX/UI",
      github: "https://github.com/olssonbianca",
      behance:"https://www.behance.net/exequielroblesvega",
      linkedIn: "https://www.linkedin.com/in/exequiel-robles-vega-b9432b211/",
    },
    {
      id: 13,
      nombre: "Exequiel Robles Vega",
      rol: "Diseñador UX/UI",
      github: "",
      behance: "https://www.behance.net/exequielroblesvega",
      linkedIn: "https://www.linkedin.com/in/exequiel-robles-vega-b9432b211/",
    },
    {
      id: 14,
      nombre: "Andrea Ceballos Alcaraz",
      rol: "Analista Pruebas Software",
      github: "https://github.com/andreAlcaraz",
      linkedIn: "https://www.linkedin.com/in/andreaceballosalcaraz/",
    },
  ],
};

const UsersInfo = () => {
  return (
    <div>
      <div className="text-center py-20 text-4xl">
        <h2>Nuestro Equipo</h2>
      </div>
      <div className="grid grid-cols-3 gap-5 py-4">
        {Users.data.map((info) => (
          <>
            {/*  CARD */}
            <div
              className="w-[28rem] h-fit rounded-xl border border-gray-300"
              key={info.id}
            >
              {/* Circulo */}
              <div className="py-4">
                <div className="px-2">
                  <div className="absolute rounded-full w-16 h-16 bg-gradient-to-r  from-cyan-500 to-blue-500" />
                </div>
                {/* ROL */}
                <div className="flex justify-end">
                  <div className="px-4 bg-gray-500 w-fit h-[2rem] rounded">
                    <span className="text-lg">{info.rol}</span>
                  </div>
                </div>
                {/* NOMBRE */}
                <div className="pt-10 px-4">
                  <div className="flex justify-start gap-2">
                    <p className="text-xl">{info.nombre}</p>
                  </div>
                  {/* ICONOS */}
                  <div>
                    <div className="flex justify-between py-4 ">
                      {info.github === "" ? (
                        <a href={info.behance}>
                          <AiFillBehanceSquare className="text-4xl" />
                        </a>
                      ) : (
                        <a href={info.github} target="_blank">
                          <AiFillGithub className="text-4xl" />
                        </a>
                      )}
                      <a href={info.linkedIn} target="_blank">
                        <AiFillLinkedin className="text-4xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UsersInfo;
