
 function Right_Panel() 
{
    return (
        <div className="flex flex-col gap-4 items-center bg-orange-100 p-4 rounded-lg shadow-md"> 
          
          <div className="w-full bg-teal-500 p-2 rounded-md ">
            <h2 className="text-2xl font-semibold text-white"> YOUR CART 🛒 </h2> 
            </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">checkout</button>
      </div>
    

    )


}

export default Right_Panel;   //Import without curly braces in App.jsx