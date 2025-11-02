
import { FilterSection } from "./filter_section";
import ProductGrid from './Products/ProductGrid';
export function Left_Panel() { //  import with curly braces in App.jsx
    return (
        <div className="w-full lg:w-full p-4 lg:p-6">
          <div className="w-full bg-teal-500 p-2 rounded-lg " >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Gadgets Hub</h1>
          <p className="text-grey-800 font-bold ">Your one-stop shop for the latest and greatest in tech!</p>
          </div>
        <FilterSection/>
        <ProductGrid/>
        
      </div>
    )
}