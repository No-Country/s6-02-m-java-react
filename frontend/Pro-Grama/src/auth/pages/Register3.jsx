import { useSelector } from "react-redux"
import { useAuthStore } from "../../hooks/useAuthStore"
import { HeaderBSide } from "../../pro-grama/components"
import { ProgressBar } from "../components"


export const Register3 = () => {
     const{registerForm}=useSelector(state=>state.auth)
     const{startRegister}=useAuthStore()
     const{email,name,lastName,password}=registerForm
  const handleSubmit = (e)=>{
          e.preventDefault();
          startRegister({email:email,name:name,lastName:lastName, password:password})
  }
  return (
    <div className="bg-BlueDark">
    <HeaderBSide />
    <ProgressBar />
    <div className="flex flex-col justify-center items-center gap-10">
        <h3 className="font-bold text-3xl text-start text-white ">¿Sabes Programar?</h3>
        <h6 className="w-[30rem] text-center text-white  ">Utilizaremos tu respuesta para recomendarte cursos que se adecúen a tu nivel de conocimientos y experiencia</h6>
        <div className="flex gap-10 w-[38rem] text-center ">
        <input type="checkbox" id="react-option" value="" class="hidden peer accent-Green" required 
        />
        <label for="react-option" class="inline-flex items-center justify-between w-full h-[15rem] p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div class="w-full text-sm">Ya cuento con conocimientos</div>
        </label>
        <input type="checkbox" id="option" value="" class="hidden peer" required=""/>
        <label for="option" class="inline-flex items-center justify-between w-full h-[15rem] p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ">                           
                <div class="w-full text-sm">Soy Principiante</div>
        </label>
        </div>
        <div className="flex justify-between items-center gap-9 mb-6 ">
              <a href="#" class="font-medium text-Green hover:underline">Volver</a>
              <button type="button" onClick={handleSubmit} class="text-white bg-Green w-[200px] hover:text-white border border-Green hover:bg-BlueDark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:text-white  dark:focus:ring-blue-800">Comenzar</button>
          </div>
    </div>    
    </div>
  )
}
