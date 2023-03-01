import { Link } from "react-router-dom";
import { SidebarItems } from "./";
export { SidebarItems } from "./";
import { AiOutlineCode } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        // className="fixed top-0 left-0 z-10 w-16 hover:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        className="relative z-10 sidebar w-[6rem] hover:w-52 h-full "
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-[3rem] text-center bg-BlueDark">
          <Link to="/" className="flex items-center pl-2.5 mb-5">
            <AiOutlineCode className=" flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className=" px-4 logo_small hidden self-center text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <svg
                width="52"
                height="20"
                viewBox="0 0 52 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_220_101)">
                  <path
                    d="M28.8993 11.9864C28.7657 11.7143 28.9394 11.3878 29.2467 11.3606C30.1819 11.2654 30.8767 11.0205 31.3443 10.6395C31.9055 10.1633 32.186 9.25175 32.186 7.89121V3.51026C32.186 2.20414 31.9188 1.31978 31.3844 0.843591C30.85 0.367401 29.8212 0.136108 28.2981 0.136108H18.4378C18.1973 0.136108 18.0103 0.326585 18.0103 0.571483V1.68713C18.0103 1.93203 18.1973 2.1225 18.4378 2.1225L28.2981 2.20414C28.9126 2.20414 29.3001 2.27216 29.4738 2.42182C29.6475 2.57148 29.741 2.89801 29.741 3.38781V8.08169C29.741 8.57148 29.6475 8.89801 29.4738 9.04767C29.3001 9.19733 28.8993 9.27896 28.2981 9.27896H20.4687H18.4378C18.1973 9.27896 18.0103 9.46944 18.0103 9.71434V10.9933C18.0103 11.2381 18.1973 11.4286 18.4378 11.4286H20.4553V11.4014H25.7729C25.9332 11.4014 26.0802 11.4967 26.1603 11.6463L30.0082 19.6191C30.075 19.7688 30.222 19.864 30.3957 19.864H32.1593C32.48 19.864 32.6804 19.5239 32.5334 19.2245L28.8993 11.9864Z"
                    fill="#BCF0C0"
                  />
                  <path
                    d="M47.9784 20H40.2826C38.7328 20 37.6773 19.7279 37.1161 19.1701C36.555 18.6122 36.2878 17.4966 36.2878 15.8231V4.21769C36.2878 2.54422 36.5683 1.41497 37.1161 0.857143C37.6639 0.29932 38.7328 0 40.2826 0H47.9784C49.5283 0 50.5971 0.285714 51.1583 0.843537C51.7194 1.41497 52 2.53061 52 4.20408V15.8095C52 17.4694 51.7194 18.585 51.1583 19.1429C50.5971 19.7143 49.5283 20 47.9784 20ZM49.555 16.6395V3.22449C49.555 2.73469 49.4615 2.42177 49.2744 2.27211C49.0874 2.13605 48.6865 2.05442 48.0586 2.05442H40.2292C39.6012 2.05442 39.187 2.12245 39.0134 2.27211C38.8263 2.40816 38.7328 2.73469 38.7328 3.22449V16.6395C38.7328 17.1293 38.8263 17.4422 39.0134 17.5918C39.2004 17.7279 39.6012 17.8095 40.2292 17.8095H48.0586C48.6865 17.8095 49.1007 17.7415 49.2744 17.5918C49.4748 17.4422 49.555 17.1293 49.555 16.6395Z"
                    fill="#BCF0C0"
                  />
                  <path
                    d="M44.1439 11.6735C43.2354 11.6735 42.5005 10.9252 42.5005 10C42.5005 9.07484 43.2354 8.32654 44.1439 8.32654C45.0524 8.32654 45.7873 9.07484 45.7873 10C45.7873 10.9252 45.0524 11.6735 44.1439 11.6735Z"
                    fill="#BCF0C0"
                  />
                  <path
                    d="M13.3207 0.870802C12.7996 0.381006 11.7975 0.136108 10.2878 0.136108H0.440904C0.200411 0.136108 0.0133607 0.34019 0.0133607 0.585088V1.68713C0.0133607 1.93203 0.200411 2.1225 0.440904 2.1225L10.1542 2.20414C10.7688 2.20414 11.1696 2.28577 11.3566 2.43543C11.557 2.58509 11.6506 2.91162 11.6506 3.40141V8.29937C11.6506 8.78917 11.557 9.1157 11.3566 9.26536C11.1562 9.41502 10.7554 9.49665 10.1542 9.49665H0.427544C0.18705 9.49665 0 9.68713 0 9.93203L0.0133607 19.415C0.0133607 19.6599 0.213772 19.8504 0.440904 19.8504H2.01747C2.25796 19.8504 2.44502 19.6599 2.44502 19.415V12.0409C2.44502 11.796 2.63207 11.6055 2.87256 11.6055H10.3279C11.8109 11.6055 12.7996 11.347 13.3207 10.8436C13.8284 10.3402 14.0822 9.40141 14.0822 8.04087V3.6191C14.0956 2.28577 13.8417 1.3742 13.3207 0.870802Z"
                    fill="#BCF0C0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_220_101">
                    <rect width="52" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Link>
          {/* Responsive Menu Hamburguesa */}
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            class="flex items-start p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          {/* Separador  */}
          <SidebarItems />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
