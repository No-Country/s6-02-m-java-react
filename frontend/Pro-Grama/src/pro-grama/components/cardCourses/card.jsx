import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faList, faClock} from "@fortawesome/free-solid-svg-icons";

export const Card = ({name,level,modules,hours,img}) => {
  return (
    <div class="w-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 hover:drop-shadow-2xl">
    <a href="#">
        <img className="rounded-t-lg object-contain" src={img} alt="" />
    </a>
    <div className="p-5">
        <div className="flex flex-row justify-between items-center">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">{name} </h5>
            <span className="font-bold text-white">{level} </span>
        </div>
        <div className="mt-3 flex justify-between items-center">
            <span className="text-white"><FontAwesomeIcon icon={faList}/> {modules} modules</span>
            <span className="text-white"><FontAwesomeIcon icon={faClock}/> {hours} hours</span>
        </div>
    </div>  
</div>
  )
}
