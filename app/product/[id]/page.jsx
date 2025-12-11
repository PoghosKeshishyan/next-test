"use client";

import {useContext} from "react";
import {FaCartPlus} from "react-icons/fa";
import {useParams} from "next/navigation";
import {CartContext} from "@/contexts/CartContext";
import {SidebarContext} from "@/contexts/SidebarContext";
import {ProductContext} from "@/contexts/ProductContext";
import Image from "next/image";
import styles from "./singlepage.module.css";


const SinglePage = () => {
    const { id } = useParams();
    const { setShow } = useContext(SidebarContext);
    const {findProductById} = useContext(ProductContext);
    const product = findProductById(id);

    const {addToCart} = useContext(CartContext);
    // console.log(product);
    if (!product) {
        return (
            <div className={styles.container}>
                <h1>Loading...</h1>
            </div>
        );
    }
    const {image, title, price, description, category} = product;

    return product && (
        <div
            className={styles.container}
            onClick={() => {setShow(false)}}
        >
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                loading="eager"
                style={{objectFit: "contain"}}
                className={styles.img}
            />

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p  className={styles.desc}>{description}</p>
                <p className={styles.tags}>#{category}</p>
                <p className={styles.price}>$ {price.toFixed(2)}</p>
                <button
                    className={styles.addBtn}
                    onClick={() => {addToCart(product)}}
                >
                    <FaCartPlus/>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default SinglePage;
