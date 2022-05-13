import React from "react"
import { createContext, useState, useEffect } from "react";

export const cartContext = createContext()

const { Provider } = cartContext

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState( () => {
        try {
            const productosEnLocalStorage = localStorage.getltem('item');
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage):[];
        }catch (error){
            return [];
        }
    })

    useEffect (() => (
        localStorage.setItem('item', JSON.stringify(cart))), [cart])


    const addItem = (producto, counter) => {
        if (inTheCart(producto.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if (element.item.id === producto.id) {
                    producto.counter = it.counter + counter
                }
            }
            setCart(newCart)
        } else {
            setCart([
                ...cart,
                {
                    item: producto,
                    quantity: counter,
                },
            ])
        }
    }

    const inTheCart = (id) => {
        return cart.find((e) => e.id === id)
    };

    const removeItem = (id) => {
        const newCart = [...cart].map((element) => element.id !== id)
        setCart(newCart)
    }
    
    const clearCart = () => {
        setCart([])
    }
    
    return (
        <Provider value={{ cart, addItem, clearCart, removeItem }}>
            {children}
        </Provider>
    )

}

export default CustomProvider