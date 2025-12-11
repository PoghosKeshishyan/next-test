"use client";

import {createContext, memo, useEffect, useState} from "react";

export const CartContext = createContext(null);


// eslint-disable-next-line react/display-name
const CartProvider = memo(({ children }) => {
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOrders(JSON.parse(localStorage.getItem("orders")));
    }, []);

    useEffect(() => {
        const amount = orders.reduce((acc, curr) => {
            const {price} = curr;
            return acc + curr.quantity * price;
        }, 0);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTotalPrice(amount.toFixed(2));

        localStorage.setItem("orders", JSON.stringify(orders));

    }, [orders]);


    const addToCart = (product) => {
        const existingOrder = orders.find((elem) => elem.id === product.id);
        if (!existingOrder) {
            const newOrder = {...product, quantity: 1};
            setOrders([...orders, newOrder]);
        }
    }

    const plus = (product) => {
        product.quantity++;
        setOrders([...orders]);
    }

    const minus = (product) => {
        if (product.quantity > 1) {
             product.quantity--;
             setOrders([...orders]);
        } else {
            removeFromCart(product.id);

        }
    }

    const removeFromCart = (id) => {
        setOrders(orders.filter(product => product.id !== id));
    }

    const deleteAll = () => {
        setOrders([]);
    }

    const totalCount = orders.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <CartContext.Provider value={{
                                        orders,
                                        totalPrice,
                                        totalCount,
                                        addToCart,
                                        plus,
                                        minus,
                                        removeFromCart,
                                        deleteAll,
                                    }}>
            {children}
        </CartContext.Provider>
    )
});

export default CartProvider;