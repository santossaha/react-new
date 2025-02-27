import { NavLink } from "react-router-dom";
const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
import React from "react";
console.log(categories);

export default function CategoryList(){
    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="flex space-x-4">
          
          {categories.map((category, index) => (
             <NavLink 
             key={index}
             to={`/category/${category.toLowerCase()}`}
             className={(isActive) => isActive ? "bg-blue-500 text-white p-2 rounded" : "bg-gray-200 p-2 rounded hover:bg-blue-300"}
             >{category}</NavLink>
          )
          )}
         
        </div>
      </div>
    )

}