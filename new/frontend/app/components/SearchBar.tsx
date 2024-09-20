"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchItem } from "./SearchItem";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleInputChange = (event: any) => {
    setShowSearch(true);
    setInputValue(event.target.value);
  };

  return (
    <div className=" relative">
    <div className="flex  items-center border border-black rounded-3xl px-4 py-2 w-full ">
      {!inputValue && <FaSearch className="text-gray-500 mr-2" />}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search here..."
        className="flex-grow bg-transparent outline-none"
      />
      
    </div>
    { showSearch && inputValue.length > 0 && <div className=" absolute w-full h-auto text-center z-50">
    {[1,2,3,4].map((i) => (
        <SearchItem  product={i} key={i} />
      ))}
    </div>}
    </div>
  );
};
