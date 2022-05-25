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
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadProducto, setCantidadProducto] = useState(0)

    useEffect (() => (
        localStorage.setItem('item', JSON.stringify(cart))),
    [cart])


    const inTheCart = (id) => {
        return cart.find((productoCarrito) => productoCarrito.id == id)
        console.log(cart.find((productoCarrito) => productoCarrito.id == id))
    };

    const addItem = (producto, setCartItems) => {
        if (inTheCart(producto.id)) {
            setCantidadProducto(setCartItems + cantidadProducto)
            setCantidadTotal(cantidadTotal + cantidadProducto)
            setPrecioTotal(precioTotal + precioTotal)
            setCart([...cart, cantidadProducto])
        } else {
            setCantidadProducto(setCartItems)
            setCantidadTotal(cantidadTotal + cantidadProducto)
            setPrecioTotal(setCartItems * producto.precio)
            setCart([...cart, producto])
            // setCart([
            //     ...cart,
            //     {
            //         item: producto,
            //         quantity: counter,
            //     },
            // ])
        }
    }

    const removeItem = (id) => {
        const newCart = [...cart].filter((producto) => producto.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([])
    }


    
    return (
        <Provider value={{ cart, addItem, clearCart, removeItem, cantidadTotal, cantidadProducto }}>
            {children}
        </Provider>
    )

}

export default CustomProvider