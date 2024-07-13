import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import reducer, { initialState } from '../reducer/reducer';
import { useNavigate } from 'react-router-dom';


// const DataContaxt = useContext(createContext());
export const DataContaxt = createContext();

// console.log(DataContaxt);

function ThemeContext(props) {
    const [addresssMode, setmodelAddress] = useState(false);
    // all data
    const [isOpen, setOpen] = useState(false);
    const [Data, setData] = useState([]);
    const [logging, setLodding] = useState(true);
    const [auth, setAuth] = useState(false);
    // set page 
    const [page, setPage] = useState(1)
    // cart data
    const [cart, setCart] = useState([]);
    // fildet data
    const [filteredData, setFilteredData] = useState(Data);
    // search data
    const [search, setNewSearch] = useState("");

    // this state is use to admit model pop 
    const [model, setModel] = useState(false);

    // setting product review state data 
    const [review, setReview] = useState([]);

    // setTheQuantity of product added in
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState('S');

    // this state use to set the admin name display in the admin model
    const [adminData, setAdminData] = useState({
        name: "",
        email: ""
    });
    // setReiew page data 
    const [productID, setproductID] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    const [cartData , setCartData] = useState([]);
    const [cartLength, setCartLength] = useState('0');
    const [cartItems, setCartItems] = useState([]);
    // favpage 
    const [favData , setFavData] = useState([]);
    const [favlength, setFavlength] = useState(0);

    // set the payment page data using
    const [paymentData , setPaymentData]= useState([]); 

    // get order item in order page and set the inside this state and use the same data in payment page 
    const [orderData, setOrderData] = useState([]);

    // cart state total price and quantity
    const [total, setTotal] = useState(0);
    const [cartproductQuantity, setCartproductQuantity] = useState(0);
    // ///////////////////////////////////////////////////////////////////////////////////

    // thsi state value is passing inside the useThemeContextvalue file to use any where thsi state value like payment pay to check state vlaue is true than use will be able order the product and inside the cart page this state value is true than inside the cart page "add address " button text is change to "procced to ckeckout page"
    // it help to user will be add one tiem address than order any time any product in the same address 
    // thats the reason i am use the this state inside the "useThemeContextValue()"
    
    const [formData, setFormData] = useState({
        addressType: 'HOME',
        street: '',
        city: '',
        state: '',
        country: 'USA',
        zipCode: ''
    });



    /// cart page data store inside the state after click the "proced to ckeckout " button 
    const [OrderCartItem, setOrderCartItem] = useState([]);


    // ////////////////////////////////////////////////////////////////////////////////////

    //user name
    const userName = localStorage.getItem("login User Name.......");
    //user Email
    const userEmail = localStorage.getItem("login User Email.......");

    // localStorage.setItem('Total Cart Price : ', JSON.stringify(cartItems.totalPrice) )
    const token = localStorage.getItem('token');
    // addToCart add set the data in cart page usign current product id
    const authToken = localStorage.getItem("token");

    useEffect(()=> {
        getAllProductFav();
        setFavlength(favData.results);
    },[]);

    // console.log("00000000",favlength);



    ///////////////////////////////////////////////////////////////////////////////////////////////
    // get all Product in Favorites (Protected Route):
    const getAllProductFav = async () => {
        // console.log("***********")
        let myHeaders = new Headers();
        myHeaders.append("projectId", "rcetbaqftf5m");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            raw: "",
            redirect: "follow"
        };

        // console.log("getAllProductFav",headers)

        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, requestOptions);
            const result = await response.json();
            // console.log("get all data fav cart page", result);
           
            setFavData(result);
            setFavlength(result.results);
            
        } catch (error) {
            console.log(error);
        }
    }
   
    useEffect(()=> {
        getCartItem();
        // console.log("calling Get Cart Item using useEffect")
    }, []);

    useEffect(()=> {
        addToCart();
        console.log("calling ADD TO CART using useEffect ")
    }, [quantity])
   
    const handleSize = (item) => {
        console.log(size);
        setSize(item);
    }

    //---------------------------------------------------------------------------------------------------------
    const addToCart = async () => {
        console.log(`addToCart function is colling,${productID}, ${quantity}, ${size}` )
        let myHeaders = new Headers();
        myHeaders.append("projectId", "rcetbaqftf5m");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        const raw = JSON.stringify({
            "quantity": quantity,
            "size": size
        });
        const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`,requestOptions);
            const result = await response.json();
            localStorage.setItem("addToCart Data:", JSON.stringify(result.data)); 
            setCartData(result.data);
            getCartItem()
            
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error; // Rethrow the error for handling at a higher level if needed
        }
    };


// -------------------------------------------------------------------------------------
    // get the all cart items 
    const getCartItem = async () => {
        
        let myHeaders = new Headers();
        myHeaders.append("projectId", "rcetbaqftf5m");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            raw : "",
            redirect: "follow"
        };

        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart",requestOptions);
            
            const result = await response.json();
            // console.log("get cart item", result.data);
            setCartLength(result.results);
            setCartItems(result.data);
            setOrderCartItem(result.data);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            // throw error; // Rethrow the error for handling at a higher level if needed
        }
    };

    useEffect(() => {
        localStorage.setItem("Faverate Data", JSON.stringify(state));
    }, [state]);

    //////////////////////////////////////////////////////////////////////////////////////////

    //clear cart using useDeleteProduct.js useCustom hook 
    const clearCartPage = async () => {
        localStorage.removeItem("Cart_Page_total_Quantity")
        localStorage.removeItem("Cart_Page_total_Price")
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/cart`;
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
            if(result.status==="success"){
                getCartItem();
            }
            alert(result.message);
        } catch (error) {
            console.log(error)
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // Get all product of product page initial call
    const FetchData = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=20&page=${page}`, {
                method: 'GET',
                headers: {
                    "projectId": "rcetbaqftf5m",
                },
                body: JSON.stringify()
            }
            );
            const result = await response.json();
            // console.log("result data",result.data);
            // setData(result.data);
            if(result.status==="success"){
                setLodding(true)
                // setData([...Data, ...result]); 
                setData((prevProducts) => [...prevProducts, ...result.data]); // Concatenate new data
                setLodding(false)
            }
        } catch (error) {
            setLodding(false)
            console.log(error);
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // pagination 
    const loadMore = () => {
        setPage(page + 1);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        FetchData();
        getAllProductFav();
    }, [page])


    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    const GenderType = (item) => {
        filterFunction(item);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // filter data using navbar Man and women 
    const filterFunction = (item) => {
        // console.log("item  2", item)
        const FetchDropDown = async () => {
            // console.log("item  3", item)
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"${item}"}`, {
                    method: 'GET',
                    headers: {
                        "projectId": "rcetbaqftf5m",
                    },
                    body: JSON.stringify()
                }
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const filter = await response.json();
                // console.log("sidebar filter data : ", filter);
                if (filter.length !== 0) {
                    setData(filter.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        FetchDropDown();
    }

    /////////////////////////////////////////////////////////////////////////////
    // remove product from wishlist
    const removeWishlistProduct = async () => {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`;
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
        const authToken = localStorage.getItem("token");
        // const raw = JSON.stringify({
        //   "productId": productID
        // });
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
            console.log("DELETE")
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`,options);
            const result = await response.json();
            // console.log("remove futn is calling",result);
            if (result.status === "success") {
                getAllProductFav();
                alert(result.message);
            }

        } catch (error) {
            console.log(error);
        }

    }

/////////////////////////////////////////////////////////////////////////////////////////////////////
    // get all order item 
    // get order item 
    const getOrderItem = async () => {
        const token = localStorage.getItem("token")
        const myHeaders = new Headers();
        myHeaders.append("projectId", "rcetbaqftf5m");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {

            const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order/",requestOptions);
            const result = await response.json();
            console.log("get order ", result.data);
            setOrderData(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    // orderData

    useEffect(()=> {
        getOrderItem();
    },[])

   

    return (
        <DataContaxt.Provider value={{ setAuth, auth, logging, Data, setData, cart, filteredData, setPage, GenderType, productID, setproductID, reducer, initialState, state, dispatch, setModel, model, setAdminData, adminData, loadMore, setmodelAddress, addresssMode, setReview, review, quantity, setQuantity, size, setSize, addToCart, cartData, cartLength, getCartItem, cartItems, handleSize, favData, setFavData, favlength, setFavlength, getAllProductFav, isOpen, setOpen, setCartData, removeWishlistProduct, paymentData, setPaymentData, orderData, setOrderData, getOrderItem, userName, userEmail, formData, setFormData, OrderCartItem, setOrderCartItem, clearCartPage, total, setTotal, cartproductQuantity, setCartproductQuantity }}>
            {props.children}
        </DataContaxt.Provider>
    )
    }

    export const useThemeContextValue = () => useContext(DataContaxt);

    export default ThemeContext;