"use client";

import {memo, useContext} from "react";
import {ProductContext} from "@/contexts/ProductContext";
import styles from "./search.module.css"

// eslint-disable-next-line react/display-name
const Search = memo(() => {

    const {search, setSearch} = useContext(ProductContext);

    return (
        <div className={styles.searchInput}>
            <input
                type="search"
                placeholder="Search here..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
        </div>
    );
});

export default Search;