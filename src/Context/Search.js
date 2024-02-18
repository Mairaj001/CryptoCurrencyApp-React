import { createContext, useContext } from "react";


export const SearchContext=createContext({
    value:"",
    setValue:(val)=>{},
})

export const SearchProvider=SearchContext.Provider;

export const useSearch=()=>(useContext(SearchContext))


