

export function FilterSection() {

    const categories = ["Laptops", "Gaming", "Storage", "Peripherals", "Monitors", "Printers"];


return (
    <div className="mb-6 py-4 ">
    <div className="flex flex-wrap justify-center gap-2">
       { categories.map( (category) => (
            <button key = {category} 
            className="bg-emerald-500 text-white  hover:bg-emerald-800 hover:text-white  px-7 py-2 rounded-md transition"
            > {category}</button>
        )) }

       { /*<button>Laptops</button>
        <button>Gaming</button>
        <button>Storage</button>
        <button>Peripherals</button>
        <button>Monitors</button>
        <button>Printers</button> */ }
        
    </div>

        <div className="flex justify-start mt-8 ">
            <button className="bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-700 transition">
                Clear Filters</button>
        </div>

        </div>
);

}