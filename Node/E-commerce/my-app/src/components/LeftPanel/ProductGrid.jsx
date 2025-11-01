
function ProductGrid () {

    const products =[
         { id : 1 ,
        name : "Gaming Laptop",
        price : 1200,
        image : ""https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500""
        categories : ["Laptops" , "Gaming"]
         } ,

       {
    id: 2,
    name: "Business Ultrabook",
    price: 950,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    categories: ["Laptops"]
  },
  {
    id: 3,
    name: "External SSD 1TB",
    price: 120,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    categories: ["Storage"]
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 150,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    categories: ["Peripherals", "Gaming"]
  },
  {
    id: 5,
    name: "4K Ultra HD Monitor",
    price: 450,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    categories: ["Monitors"]
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    price: 80,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    categories: ["Peripherals", "Gaming"]
  },
  {
    id: 7,
    name: "All-in-One Printer",
    price: 200,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500",
    categories: ["Printers"]
  },
  {
    id: 8,
    name: "Portable Hard Drive 2TB",
    price: 85,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500",
    categories: ["Storage"]
  }
    ]


    return (
        <div>Product Grid</div>
    )
};

export default ProductGrid;