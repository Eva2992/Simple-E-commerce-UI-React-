

export function FilterSection() {

    const categories = ["Laptops", "Gaming", "Storage", "Peripherals", "Monitors", "Printers"];


return (
    <div>
    <div>
       { categories.map( (category) => (
            <button key = {category} > {category}</button>
        )) }

       { /*<button>Laptops</button>
        <button>Gaming</button>
        <button>Storage</button>
        <button>Peripherals</button>
        <button>Monitors</button>
        <button>Printers</button> */ }
        
    </div>
    
        <div>
            <button>Clear Filters</button>
        </div>

        </div>
);

}