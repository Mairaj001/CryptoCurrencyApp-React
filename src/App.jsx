
import React, { useState } from "react"

import ProductTable from "./Components/ProductTable"
import { ThemeProvider } from "./Context/Theme"
import Header from "./Components/Header"
import useCurrencyInfo from "./Hooks/UseCurrencyInfo"
import { SearchProvider, useSearch } from "./Context/Search"
function App() {

  const currency=useCurrencyInfo()
  
  const [value,setValue]=useState("");
  console.log(value);
  return (
    <ThemeProvider>
    <SearchProvider value={{value,setValue}}>
    
      <div className="dark:bg-[#1f2937] min-h-screen py-3">
          <Header />
    
       <div className=" py-3 max-w-screen-xl mx-auto">
          <ProductTable currency={currency}/>
        </div>
    
      </div>
     
      
    </SearchProvider>
    </ThemeProvider>
    
  )
}

export default App
