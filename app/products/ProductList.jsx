"use client";

import {useContext} from "react";
import {ProductContext} from "@/contexts/ProductContext";
import ProductItem from "@/components/homepage/ProductItem";

const ProductList = ({products}) => {

    const {search} = useContext(ProductContext);

    const filteredProducts = products?.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            {filteredProducts && filteredProducts.map(elem => (
                <ProductItem key={elem.id} elem={elem} />
            ))}
        </>
    );
};

export default ProductList;