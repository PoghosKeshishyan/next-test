import {useContext} from "react";
import {CartContext} from "@/contexts/CartContext";
import {SidebarContext} from "@/contexts/SidebarContext";
import {FaEye, FaPlus, FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import styles from "./backetProduct.module.css";


const BasketProductItem = ({elem, num}) => {
    const {id,image, title, price, quantity} = elem;
    const { setShow } = useContext(SidebarContext);
    const { removeFromCart, plus, minus } = useContext(CartContext);

    return (
        <div className={styles.product}>
            <div className={styles.delete}>
                <span>{num}.</span>
                <IoClose 
                    onClick={() => {removeFromCart(id)}}
                />
            </div>
            <div className={styles.image_price}>
                <Image
                    src={image}
                    alt={title}
                    width={60}
                    height={110}
                    loading="eager"
                    style={{objectFit: "contain"}}
                />
                <div className={styles.btn}>
                    <FaPlus onClick={() => {plus(elem)}} />
                    <span>{quantity}</span>
                    <FaMinus onClick={() => {minus(elem)}} />
                </div>
                <div className={styles.actions}>
                    <strong>Price: $ {price.toFixed(2)}</strong>
                    <strong>Total: $ {(price * quantity).toFixed(2)}</strong>
                </div>
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{title.slice(0,22)}...</h4>
                <Link
                    href={`/product/${id}`}
                    onClick={() => {
                        setShow(false)
                    }}
                ><FaEye/> view details</Link>
            </div>
        </div>
    );
};

export default BasketProductItem;