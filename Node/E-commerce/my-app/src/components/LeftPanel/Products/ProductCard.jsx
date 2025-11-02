


function ProductCard (product) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} 
                className="w-full h-48 object-cover rounded-md mb-3" />
                <p className="font-semibold text-gray-800">{product.name}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{`$${product.price}`}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition" >Add to Cart</button>

            </div>
        </div>
    );

};

export default ProductCard;