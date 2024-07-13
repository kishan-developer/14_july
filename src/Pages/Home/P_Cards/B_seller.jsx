import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

function B_seller() {

    // show the product price and title
    const product = [
        {
            id: 1,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/files/0Q8A9855_4f973943-da57-4e3d-8baf-3e81cdb30bc5_650x.jpg?v=1716300648",
            title: "Yellow - Bengal Jamdani Handloom ",
            material: "linen",
            price: 25000

        },

        {
            id: 2,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/files/0Q8A1740_68b4a04f-d115-4eac-8ef6-094559bb4764_650x.jpg?v=1720098358",
            title: "3pc Dharwad Suit Material Sets",
            material: "coton",
            price: 25000

        },
        {
            id: 3,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/files/0Q8A3924_f59683f5-c460-4911-8776-f9c22e36f450_650x.jpg?v=1692707026",
            title: "3pc Dharwad Suit Material Sets",
            material: "silk",
            price: 25000
        },
        {
            id: 4,
            image: "https://itokri.com/cdn/shop/collections/BeFunky-collage_18_d0afcb24-c241-42cb-aa5c-8ac0851722b2.jpg?v=1720703519",
            title: "3pc Dharwad Suit Material Sets",
            material: "coton",
            price: 25000
        },
    ]


    return (
        <div className="w-full bg-red-50 xl:h-[500px] lg:h-[500px] flex flex-row gap-5 py-3 ">
            {
                product.map((item, index) => (
                    <div key={index} className="w-1/4 h-full border-2 border-black  bg-white">
                        <img src={item.image} alt="product images" />
                        <div className=" flex flex-col items-start p-2 font-semibold cursor-pointer">
                            <p>{item.title}</p>
                            <div className="w-full flex flex-row items-center justify-between mt-3">
                                <p>₹{item.price} INR</p>
                                <IconButton onClick={()=> alert("add to cart")}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default B_seller