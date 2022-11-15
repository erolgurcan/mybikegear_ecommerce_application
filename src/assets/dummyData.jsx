const  dummyShopData = [
  {
    id: 1,
    item: "Cannondale CAAD 13 Disc 105",
    brand: "Cannondale",
    category: "Bike",
    subcategory: "Road Bike",
    color: ["Black", "Red", "Blue"],
    model: "CAAD 13 Disc 105",
    year: 2021,
    price: 3035,
    description: "",
    availability: true,
    image: "/bike/cannondale.bmp",
    size: ["Large", "Small", "Medium"],
    rating: 3
  },
  {
    id: 2,
    item: "Scott Addict RC 20 Disc",
    brand: "Scott",
    category: "Bike",
    subcategory: "Road Bike",
    color: ["Black", "Red", "Blue"],
    model: "Addict RC 20 Disc",
    year: 2021,
    price: 3035,
    description: "",
    availability: true,
    image: "/bike/scott.bmp",
    size: ["Large", "Small", "Medium"],
    rating: 5
  },
  {
    id: 3,
    item: "Cannondale SystemSix Hi-Mod Dura Ace Di2",
    brand: "Cannondale",
    category: "Bike",
    subcategory: "Road Bike",
    color: ["Black", "Red", "Blue"],
    model: "SystemSix Hi-Mod Dura Ace Di2",
    year: 2021,
    price: 3035,
    description: "",
    availability: true,
    image: "/bike/cannondale.bmp",
    size: ["Large", "Small", "Medium"],
    rating: 4}
    

]

const  dummyCategoryData = [

  {
    id: 1,
    category: "Bike",
    subcategory: ["Road Bike", "Mountain Bike", "Cyclocross Bike"],
  },
  {
    id: 2,
    category: "Clothing",
    subcategory: ["Jersey", "Shorts", "Gloves"],
  },
  {
    id: 3,
    category: "Accessories",
    subcategory: ["Helmet", "Glasses", "Saddle"],
  },
  {
    id: 4,
    category: "Components",
    subcategory: ["Brakes", "Crankset", "Wheels"],
  },
  {
    id: 5,
    category: "Nutrition",
    subcategory: ["Energy Bars", "Energy Gels", "Energy Drinks"],
  },
  {
    id: 6,
    category: "Tools",
    subcategory: ["Pump", "Tire Levers", "Multi-Tools"],
  },

]

export {  dummyShopData, dummyCategoryData  }; 


