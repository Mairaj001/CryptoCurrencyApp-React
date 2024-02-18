import React, { useEffect, useState } from 'react'
import Logo from '../images/logo (1).png'

import { useTheme } from '../Context/Theme';
import { useSearch } from '../Context/Search';



export default function Header() {

    const {theme,settheme}=useTheme();
    const [searchedValue,setSearchedValue]=useState("");
    const {setValue}=useSearch();
    
    const handleValue=(e)=>{
      const a=e.target.value;
      
      setSearchedValue(a)
      
      console.log("serached value"+searchedValue)
    }
    useEffect(()=>{
      setValue(searchedValue)
    },[searchedValue])
    const HandleChange=(e)=>{
        let status=e.currentTarget.checked;
        status?settheme("dark"):settheme("light")

    }

    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark")
        document.querySelector('html').classList.add(`${theme}`)
    }
    ,[theme])


    return (
        <header className="shadow ">
            <nav className=" border-gray-200 px-4 lg:px-2 py-0">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a to="/" className="flex items-center filter brightness-50 ">
                        <img
                           src={Logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </a>
                    <div className="flex items-center lg:order-2">
                    <div className=" relative  ml-4">
                         <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked={theme==='dark'}  onChange={HandleChange}/>
                           <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      
                            </label>
                            </div>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                         <form className="flex  w-96  shadow rounded my-5" >
          
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          

          <div className="relative w-full ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" "
              value={searchedValue}
              onChange={handleValue}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
            
            
          </div>

           
          
       
          
          
        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

