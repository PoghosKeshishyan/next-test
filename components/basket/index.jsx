"use client";

import {SidebarContext} from "@/contexts/SidebarContext";
import {FaArrowRight, FaTrash } from "react-icons/fa6";
import {useContext} from "react";
import {CartContext} from "@/contexts/CartContext";
import BasketProductItem from "@/components/basket/BasketProductItem";
import styles from "./style.module.css";

const Basket = () => {
    const {show, setShow} = useContext(SidebarContext);
    const {orders, totalPrice, totalCount, deleteAll} = useContext(CartContext);

    return (
        <div className={`${styles.basket} ${show ? "" : styles.close}`}>
            <div className={styles.head}>
                <h2>Basket items (<span className={styles.count}>{totalCount}</span>) </h2>
                <FaArrowRight onClick={() => setShow(false)} />
            </div>
            <div className={styles.container}>
                {orders && orders.map((product, index) => (
                    <BasketProductItem key={product.id} elem={product} num={index+1}/>
                ))}
            </div>
            {
                orders.length > 0 && (
                    <div className={styles.total}>
                        <div className={styles.amount}>
                            Total:
                            <span>
                               $ {totalPrice}
                            </span>
                        </div>
                        <FaTrash 
                            onClick={() => {
                                deleteAll();
                                setShow(false);
                            }}
                        />
                    </div>)
            }
        </div>
    );
};

export default Basket;