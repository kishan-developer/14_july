import React from 'react'

function OriginData() {

    // https://itokri.com/cdn/shop/files/3T1A1942.jpg?v=1720786005&width=533
    // https://cdn.shopify.com/s/files/1/0155/8131/products/WhatsApp-Image-2021-01-02-at-11.04.19-AM.jpg?v=1641900839
    // https://cdn.shopify.com/s/files/1/0155/8131/products/0Q8A1199.jpg?v=1658237300
    // https://cdn.shopify.com/s/files/1/0155/8131/products/AAC-41-45-52-PA_1.jpg?v=1661344070
    const datas = [
        {
            id: 1,
            image: "https://itokri.com/cdn/shop/files/3T1A1942.jpg?v=1720786005&width=533",
            title: "Yellow - Bengal Jamdani Handloom Linen Dupatta with",
            material: "linen"

        },

        {
            id: 2,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/products/WhatsApp-Image-2021-01-02-at-11.04.19-AM.jpg?v=1641900839",
            title: "3pc Dharwad Suit Material Sets",
            material: "coton"

        },
        {
            id: 3,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/products/0Q8A1199.jpg?v=1658237300",
            title: "3pc Dharwad Suit Material Sets",
            material: "silk"
        },
        {
            id: 4,
            image: "https://cdn.shopify.com/s/files/1/0155/8131/products/AAC-41-45-52-PA_1.jpg?v=1661344070",
            title: "3pc Dharwad Suit Material Sets",
            material: "coton"
        },
    ]

    const data = [
        {
            id: 1,
            image: "https://i.pinimg.com/474x/a0/c1/99/a0c19937d72da4567521b4df043579d0.jpg",
            title: "Yellow - Bengal Jamdani Handloom Linen Dupatta with",
            material: "linen"

        },

        {
            id: 2,
            image: "https://i.pinimg.com/236x/67/00/16/670016abf14e9c7673fbb3a421f746b4.jpg",
            title: "3pc Dharwad Suit Material Sets",
            material: "coton"

        },
        {
            id: 3,
            image: "https://i.pinimg.com/236x/d3/db/c5/d3dbc574eec813091469cc68b7c5f1ae.jpg",
            title: "3pc Dharwad Suit Material Sets",
            material: "silk"
        },
        {
            id: 4,
            image: "https://i.pinimg.com/236x/9d/c5/7a/9dc57ac5b8525f4460c0bb7ec3e12266.jpg",
            title: "3pc Dharwad Suit Material Sets",
            material: "coton"
        },
    ]

  return (
    <div className="w-full flex flex-row gap-2">
        {
            datas.map((item,index)=> (
                <div className="images flex w-full ">
                    <img key={index}  src={item.image} alt="" />
                    
                </div>
            ))
        }
    </div>
  )
}

export default OriginData