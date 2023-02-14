import { HeaderBSide } from "../../pro-grama/components"
import { ProgressBar } from "../components"


export const Register3 = () => {
  return (
    <>
    <HeaderBSide />
    <ProgressBar />
    <div className="flex flex-col justify-center items-center gap-10">
        <h3 className="font-bold text-3xl text-start ">¿Sabes Programar?</h3>
        <h6 className="w-[30rem] text-center ">Utilizaremos tu respuesta para recomendarte cursos que se adecúen a tu nivel de conocimientos y experiencia</h6>
        <div className="flex gap-10 w-[38rem] text-center ">
        <input type="checkbox" id="react-option" value="" class="hidden peer" required=""/>
        <label for="react-option" class="inline-flex items-center justify-between w-full h-[15rem] p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div class="w-full text-sm">Ya cuento con conocimientos</div>
        </label>
        <input type="checkbox" id="option" value="" class="hidden peer" required=""/>
        <label for="option" class="inline-flex items-center justify-between w-full h-[15rem] p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div class="w-full text-sm">Soy Principiante</div>
        </label>
        </div>
        <div className="flex justify-between items-center gap-9 mb-6 ">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Volver</a>
              <button type="button" class="text-blue-700 w-[200px] hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Comenzar</button>
          </div>
    </div>    
    </>
  )
}
