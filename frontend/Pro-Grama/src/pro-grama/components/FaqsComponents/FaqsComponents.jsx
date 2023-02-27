import React from "react";
import AccordionFaqs from "./AccordionFaqs";

const accountsHelp = [
  {
    id: 1,
    title: "Olvide mi contraseña",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 2,
    title: "Quiero quitar un curso de mi ruta",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 3,
    title: "Quiero cambiar mi información de usuario",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
];

const generalAsks = [
  {
    id: 1,
    title: "¿Como puedo ver las notas que tome sin entrar al curso?",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 2,
    title: "Hay lecciones que no me son utiles",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 3,
    title: "Mis codigos no funcionan",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 4,
    title: "Quisiera unirme a la comunidad de Discord",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 5,
    title: "¿Cuantos cursos puedo hacer de manera gratuita?",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 6,
    title: "¿Que salida laboral tienen los cursos?",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
  {
    id: 7,
    title: "¿Tengo que tener conocimientos previos en programación?",
    paragraph:
      "Flowbite is an open-source library of interactive components builton top of Tailwind CSS including buttons, dropdowns, modals,navbars, and more.",
  },
];

const FaqsComponents = () => {
  return (
    <div className="px-12 pb-16">
      <h1 className="text-5xl text-white mt-12">Ayuda</h1>
      <AccordionFaqs help={accountsHelp} title={"Problemas con mi cuenta"}/>
      <AccordionFaqs help={generalAsks} title ={"Problemas y dudas generales"}/>
    </div>
  );
};

export default FaqsComponents;
