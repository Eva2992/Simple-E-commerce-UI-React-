
import { FilterSection } from "./filter_section";
import ProductGrid from './Products/ProductGrid';
export function Left_Panel() { //  import with curly braces in App.jsx
    return (
        <div className="w-full lg:w-full p-4 lg:p-6">

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Simple E-Commerce</h1>
        <FilterSection/>
        <ProductGrid/>
        
      </div>
    )
}