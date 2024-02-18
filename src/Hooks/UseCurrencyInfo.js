import { useEffect, useState } from "react";



function useCurrencyInfo() {
    const [currency, setCurrency] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.coinranking.com/v2/coins`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setCurrency(data.data.coins);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []);
  
    return  currency;
  }
  

export default useCurrencyInfo
