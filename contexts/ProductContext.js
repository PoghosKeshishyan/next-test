"use client";

import {createContext, memo, useEffect, useState} from "react";

export const ProductContext = createContext(null);


// eslint-disable-next-line react/display-name
const ProductProvider = memo(({children}) => {

    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const findProductById = (id) => {
        if(products.length){
            return products.find(elem => elem.id === parseInt(id));
        }
    }

    const filteredProducts = products?.filter(elem => {
        return elem.title.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <ProductContext.Provider value={{
            filteredProducts,
            findProductById,
            search,
            setSearch,
        }}>
            {children}
        </ProductContext.Provider>
    );
});

export default ProductProvider;