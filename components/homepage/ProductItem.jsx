"use client";

import {memo, useContext} from "react";
import {CartContext} from "@/contexts/CartContext";
import {FaCartPlus, FaEye} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

// eslint-disable-next-line react/display-name
const ProductItem = memo(({elem}) => {
    const {id, image, title, price} = elem;
    const {addToCart} = useContext(CartContext);



    return (
        <div className={styles.product}>
            <Image
                src={image}
                alt={elem.title}
                width={150}
                height={200}
                loading="eager"
                className={styles.img}
                style={{objectFit: "contain"}}
            />

            <div className={styles.content}>
                <h2>{title.slice(0,30)}...</h2>
                <p>$ {price.toFixed(2)}</p>

                <div className={styles.refs}>
                    <button
                        onClick={() => addToCart(elem)}
                    ><FaCartPlus /> add to cart</button>
                    <Link href={`/product/${id}`}><FaEye/> view details</Link>
                </div>
            </div>
        </div>
    );
});

export default ProductItem;