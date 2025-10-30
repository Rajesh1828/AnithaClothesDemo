import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";





export const ShopContext = createContext();

const currency = "₹";
const deliveryFee = 50

const ShopContextProvider = (props) => {
    
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState({})
    
    // Add to cart
    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size]++;
            }
            else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

    //update Quantity
const updateQuantity =async(itemId,size,quantity)=>{
    let cartItemsCopy = structuredClone(cartItems)
    cartItemsCopy[itemId][size] = quantity
    setCartItems(cartItemsCopy)
}

//getCartTotal Amount

const getCartTotalAmount =()=>{
    let totalAmount =0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
                totalAmount += cartItems[items][item] * products.find((product)=>product._id===items).price
            } catch (error) {
                console.log(error);
            }
        }
    }
    return totalAmount
}


//get cart items count
  const getCartItemsCount =()=>{
     let count = 0;
     for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
                if(cartItems[items][item]>0){
                    count += cartItems[items][item]
                }
            } catch (error) {
                console.log(error);
            }
        }
     }
     return count
  }


    const value = {
        products,
        currency,
        deliveryFee,
        cartItems,
        navigate,
        addToCart,
        getCartItemsCount,
        updateQuantity,
        getCartTotalAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider