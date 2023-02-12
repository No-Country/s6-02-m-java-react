import { Link } from "react-router-dom";
import { HeaderBSide } from "../../pro-grama/components";

export const Login = () => {
  return (
    <>
      <HeaderBSide />

      {/* LEFT SIDE */}
      <div className="text-center bg-green-100 w-[50%] h-[90vh]">
        <div className="m-auto py-44 p-32 border-red-400 border-dashed">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 flex justify-start text-md font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ejemplo@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="flex justify-start mb-2 text-md font-medium text-gray-900"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Ejemplo***"
              />
            </div>
            <div className="flex justify-between mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 rounded "
                  required
                />
                <label
                  htmlFor="remember"
                  className="flex justify-start text-sm font-medium text-gray-900"
                >
                  Recuerdame
                </label>
              </div>
              <label className="text-sm font-medium text-gray-900">
                ¿Olvidaste tu contraseña?
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-Green hover:bg-GreenLight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100%] py-2.5 my-5 text-center dark:bg-GrayDark dark:hover:bg-green-800"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="text-center">¿No tienes cuenta? <Link to="/auth/register" className="text-md font-black">Registrate</Link></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-center absolute left-[50%] top-[5rem] bg-green-900 w-[50%] h-[90vh]">Rellenar</div>
    </>
  );
};
