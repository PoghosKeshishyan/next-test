"use client";

import {memo, useContext} from "react";
import {SidebarContext} from "@/contexts/SidebarContext";
import {ProductContext} from "@/contexts/ProductContext";
import ProductItem from "@/components/homepage/ProductItem";
import styles from "./products.module.css"

// eslint-disable-next-line react/display-name
const ProductList = memo(() => {

    const {filteredProducts} = useContext(ProductContext);
    const {setShow} = useContext(SidebarContext);

    return (
        <>
            <h1 className={styles.title}>our store&#39;s products</h1>
            <div
                className={styles.container}
                onClick={() => setShow(false)}
            >
                {
                    filteredProducts && filteredProducts.map((product) => (
                        <ProductItem key={product.id} elem={product} />
                    ))
                }
            </div>
        </>
    );
});

export default ProductList;