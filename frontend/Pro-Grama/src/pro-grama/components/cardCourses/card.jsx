import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faList, faClock} from "@fortawesome/free-solid-svg-icons";

export const Card = ({name,level,modules,hours,img}) => {
  return (
    <div class="w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 hover:drop-shadow-2xl">
    <a href="#">
        <img class="rounded-t-lg object-contain" src={img} alt="" />
    </a>
    <div class="p-5">
        <div class="flex flex-row justify-between items-center">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">{name} </h5>
            <span class="font-bold text-white">{level} </span>
        </div>
        <div class="mt-3 flex justify-between items-center">
            <span className="text-white"><FontAwesomeIcon icon={faList}/> {modules} modules</span>
            <span className="text-white"><FontAwesomeIcon icon={faClock}/> {hours} hours</span>
        </div>
    </div>  
</div>
  )
}
