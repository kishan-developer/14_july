import React from 'react'

function P_Cards() {

    const dataS = [
        { 
            id: 101, 
            image: "https://itokri.com/cdn/shop/collections/sample-nitin-collection-thumb_957934d9-12db-45a0-a333-d56317854c54.jpg?v=1720789764" ,
            title: "3pc Dharwad Suit Material Sets",
            category: "from Karnataka"

        },

        {   id: 102,
             image: "https://itokri.com/cdn/shop/collections/Partners_Handcrafted_Jewelry_Accessories_by_Divine_Guidance_Creations.jpg?v=1720793685",
            title: "Tribal Handmade Jewelry",
            category: "by Divine Guidance Creations"
            
        },
        {   id: 103, 
            image: "https://cdn.shopify.com/s/files/1/0155/8131/products/X2A9964_5b854c8c-4821-4b89-8576-74b1db91dcc6.jpg?v=1674124579" ,
            title: "3pc Dharwad Suit Material Sets",
            category: "from Karnataka"
        },
        {   id: 104, 
            image: "https://itokri.com/cdn/shop/files/Jaipur_Printed_Bottoms_11_1500x.jpg?v=1720084175" ,
            title: "3pc Dharwad Suit Material Sets",
            category: "from Karnataka"
        },
        {   id: 105, 
            image: "https://cdn.shopify.com/s/files/1/0155/8131/files/3T1A1919_650x.jpg?v=1720783620",
            title: "Patua Handpainted Wooden Coasters",
            category: "from Bengal"
        },
        {
            id: 106,
            image: "https://itokri.com/cdn/shop/files/3T1A1942.jpg?v=1720786005&width=533",
            title: "Patua Handpainted Wooden Coasters",
            category: "from Bengal"
        },
        {
            id: 107,
            image: "https://itokri.com/cdn/shop/files/3T1A1922.jpg?v=1720783718&width=533",
            title: "Jamdani Handloom Dupattas",
            category: "from Bengal"
        },
        {
            id: 108,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/files/0X2A0170-Copy_d6bf849c-b5f4-48fc-8440-84a8fde50249.jpg?v=1702627858",
            title: "Handcrafted Bags",
            category: "in Upcycled Denim"
        },
       
        

    ]


  return (
    <div className="w-auto h-[fit-content] bg-red-50 flex gap-5 flex-row flex-wrap items-center pt-5">
        {/* her show 4 cards with images */}
        {
            dataS.map((item, index)=> (
                <div key={index} className="card_details h-full w-auto  cursor-pointer">
                    <img onClick={()=> alert(item.id)}  className=" h-[360px] bg-gray-300 hover:scale-x-105 rounded-lg " src={item.image} />
                    <div className="flex flex-col items-start px-3 py-1">
                        <p className="text-md font-semibold ">{item.title}</p>
                        <p>{item.category}</p>
                    </div>   
                </div>
            ))
        }
    </div>
  )
}

export default P_Cards