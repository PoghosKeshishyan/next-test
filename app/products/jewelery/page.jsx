import styles from "@/components/homepage/products.module.css";
import ProductList from "@/app/products/ProductList";
import FetchData from "@/app/products/FetchProducts";

const Jewelery = async () => {
    const category = "jewelery";

    const data = await FetchData();
    const products = data.filter(product => product.category === category);

    return (
        <>
            <h1
                className={styles.title}
            >{category} in our store</h1>
            <div className={styles.container}>
                <ProductList products={products} />
            </div>

        </>
    );
};

export default Jewelery;