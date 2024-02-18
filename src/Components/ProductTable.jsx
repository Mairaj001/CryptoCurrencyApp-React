import React, { useState, useEffect } from 'react';
import { useSearch } from '../Context/Search';
const ProductTable = ({ currency = [] }) => {
  const {value}=useSearch();

  const [coin, setCoin] = useState([]);
  
  useEffect(() => {
    let filteredCoins = [];
    if (value && typeof value === 'string') {
        filteredCoins = currency.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    } else {
     filteredCoins = [...currency];
    } 
   setCoin(filteredCoins);
  }, [currency,value]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Coin Name
            </th>
            <th scope="col" className="px-6 py-3">
              Market Cap
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Price Change
            </th>
          </tr>
        </thead>
        {coin.map(({ name, marketCap, price, change, iconUrl }, index) => (
          <tbody key={index}>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-2 py-4 flex font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <a to="/" className="flex items-center  ">
                  {iconUrl && <img src={iconUrl} className="mr-3 h-5" alt="Logo" />}
                </a>
                {name}
              </th>
              <td className="px-9 py-4">{marketCap}</td>
              <td className="px-6 py-4">${Math.round(price)}</td>
              <td className="px-9 py-4 text-red-500">{change}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ProductTable;
