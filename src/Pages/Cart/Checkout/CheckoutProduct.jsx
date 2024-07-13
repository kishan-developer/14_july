import React, { useEffect, useRef, useState } from 'react'
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';
// import useDeleteProduct from '../../../Utils/API/useDeleteProduct';
import { useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CheckoutProduct({ item, key, handleSizeChange, handleQuantityChange, cartDatas}) {
    const ref = useRef(null);
    // const [allItemData, setallItemData] = useState(item);
    const [item_products, setItemsProducts] = useState(item.product);
    const { cartData, quantity, setQuantity, size, setSize, setproductID, productID, getCartItem, removeWishlistProduct, OrderCartItem, setOrderCartItem, total, setTotal, cartproductQuantity, setCartproductQuantity } = useThemeContextValue();

    
    // console.log(" item", item)
    // console.log(" item_products1", item_products)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // setting the new cart item inside the state and use to order the product in paymet page 
    // useEffect(()=> {
    //     console.log("check 2")
    //     // setOrderCartItem([...OrderCartItem, item_products]);  // this method is over ride the previes data 
    //     setOrderCartItem(prevOrderCartItem => [...prevOrderCartItem, item_products]);
    // }, [])
    // console.log(item);

    const navigate = useNavigate();

    useEffect(()=> {
        setTotal(item_products.price)
        setCartproductQuantity(item.quantity)
    },[])

    const _id = item_products.name;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);
    // console.log(rootId);
    // here set the current product id in setproduct id 
    // using navigate fun to navigate the review page usign rootId 
    function handleReviewPage(id) {
        setproductID(id); // pass the current image product id 
        navigate(`/review/${rootId}`, {
            state: {
                // item is the key and product in hole vlaue of current product 
                item: item_products
            }
        });
    }
    


////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // localStorage.setItem('Cart_All_Products :', JSON.stringify(item));
    localStorage.setItem('Cart_Product_All_Details : ', JSON.stringify(item));
    localStorage.setItem('Cart_Product_Main_Details : ', JSON.stringify(item_products))

    useEffect(() => {
        setproductID(item_products._id);
    }, [productID, quantity]);

    // this method is use to delete the product 
    const removeCartData = async () => {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`;
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
        const authToken = localStorage.getItem("token");
        const raw = "";
        const options = {
            method: 'DELETE', // or 'GET', 'PUT', 'DELETE', etc.
            headers: {
                ...headers,
                "Authorization": `Bearer ${authToken}`,
                "projectId": "rcetbaqftf5m"
            },
            body: raw,
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // if (result.status === "success" || result.status === "fail") {
            //     toast(result.message);
            //     getCartItem();
            // }
           
            // console.log("remove data from cart.....", result);
        } catch (error) {
            console.log(error);
        }
    }
   

    const handleClickDelete = async () => {
        try {
            await removeCartData();
            getCartItem(); // Assuming getCartItem is a function to update cart items
        } catch (error) {
            console.error('Error occurred while deleting:', error);
        }
    };
    // console.log("delete data ",data);
    // console.log("item product ", item);




    // console.log("checkout page allItemData : 5 ", allItemData.quantity);

    // const handleQuantityChange = (e) => {
    //     // console.log(e.target.value);
    //     // setQuantity(quantity+e.target.value)
    //     // const selectedValue = e.target.value;
    //     // // console.log('selectedValue 6 ',selectedValue);
    //     // const newQuantity = quantity + selectedValue;
    //     // console.log("newQuantity 7 ", newQuantity);
    //     // setQuantity(newQuantity);

    // };
    // console.log(quantity);

    // // const name = item.name.slice(0, 18);
    const savePrice = 1000 - item_products.price;



    function addToFav() {
        setTimeout(() => {
            const button = ref.current; // corresponding DOM node
            button.className = "active";
        }, [])
        // dispatch add to cart action
        // console.log("call the add to fav");
        MoveTwoWishlist();

        // here call this function because i want to removedata from cart after adding to fav bag

    }

    const MoveTwoWishlist = async () => {
        console.log("move to wishlist");
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`;
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
        const authToken = localStorage.getItem("token");
        const raw = JSON.stringify({
            "productId": productID
        });
        const options = {
            method: "PATCH", 
            headers: {
                ...headers,
                "Authorization": `Bearer ${authToken}`,
                "projectId": "rcetbaqftf5m"
            },
            body: raw,
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();


            if (result.status === "success" || result.status === "fail") {
                // toast(result.message);
                // removeWishlistProduct();
                removeCartData();
                getCartItem();
                // console.log("1355");
            }
            alert(result.message);

            // console.log("movetowishlist from cart.....", result);
        } catch (error) {
            console.log(error);
        }
    }

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    // add to cart wishlist data one by one
    const handleAddtoCart = (productID) => {
        setproductID(productID);
        // console.log("fn is calling haldeaddtocart")
        
        

    }
    // useEffect(() => {
    //     addToCart(productID);
    // }, [quantityIncrement])


    ////////////////////////////////////////////////////////////////////////////////////////////
    const addToCart = async (productID) => {
        // console.log(`addToCart function is colling,${productID}, ${quantity}, ${size}` )
        const tokens = localStorage.getItem("token");
        const myHeaders = new Headers();
        myHeaders.append("projectId", "rcetbaqftf5m");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${tokens}`);

        const raw = JSON.stringify({
            "quantity": cartproductQuantity,
            "size": size
        });

        const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            // console.log("11")
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, requestOptions);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            console.log(result.data);
            if (result.status === "success") {
                // setResultStatus(true);
                getCartItem();
                // toast(result.message);

            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error; // Rethrow the error for handling at a higher level if needed
        }
    };



   
    // useEffect(() => {
    //     addToCart(productID);
    // }, [])

    // console.log("cartDatas", cartDatas)
    const newQuntity=cartDatas.map(item=>{
        // return item.quantity;
        localStorage.setItem("cartupdate quantityes",item.quantity);
    })

    const newqut = localStorage.getItem("cartupdate quantityes");
    


   

    return (
        <div className='h-[fit] lg:max-w-[665px]  lg:min-w-[435px] px-[15px] border-2 border-gray-300 rounded-lg mb-5'>
            <div className=' px-[5px] py-[20px] flex gap-2 items-center justify-between text-[10px] lg:text-[14px] md:text-[13px]'>
                <div className=' '>
                    <h2 className='pb-[8px]'>{item_products.name}</h2>
                    <h2 className='pb-[8px] '>
                        <span className='font-bold text-black text-lg'>₹{item_products.price} </span>
                        <del>₹899</del>
                    </h2>
                    <h2 className='text-[16px]  h-[27px] pb-[10px] text-[#1D8802] font-bold'>{`You Save ₹${savePrice}!`}</h2>
                    <div className='w-full flex gap-3 mt-2 '>
                        {/* <button className='w-[full] h-[40px] border-2 border-gray-300 px-2'>
                            size : <span className=' px-3 font-semibold py-2'>{item.size}</span>
                        </button> */}
                        {/* <button className='w-[full] h-[40px] border-2 border-gray-300 px-2'>
                            Quantity : <span className=' px-3 font-semibold py-2'>{item.quantity}</span>
                        </button> */}
                        
                        {/* <div className="flex gap-2">
                            <button className="w-[50px] text-lg h-15 bg-gray-300" onClick={quantityDecrement}>-</button>
                            <p>{cartproductQuantity}</p>
                            <button className="w-[50px] text-lg h-15 bg-gray-300" onClick={quantityIncrement}>+</button>
                        </div> */}

                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item_products._id, parseInt(e.target.value))}
                        />
                        <label>Size:</label>
                        <input
                            type="text"
                            value={item.size}
                            onChange={(e) => handleSizeChange(item_products._id, e.target.value)}
                        />
                    </div>
                </div>
                {/* <div className='w-[320px]'>

                </div> */}
                <div className='w-[104px] h-[130px] rounded-lg'>
                    <img className='w-full rounded-lg' onClick={() => handleReviewPage(item_products._id)} src={item_products.displayImage} alt="" />
                </div>
            </div>
            <div className=' lg:max-h-[50px] lg:min-h-[50px] flex items-center text-gray-600  border-t-2 border-gray-300 sm:m-0'>
                <button
                    onClick={handleClickDelete}
                    className='h-50px w-[225px] mt-0 py-[5px] border-r-2 border-gray-400 cursor-pointer'
                >
                    Remove
                </button>

                <button
                    onClick={addToFav}
                    className='h-50px w-[425px] py-[2px] cursor-pointer '
                >
                    Move to Wishlist
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CheckoutProduct;