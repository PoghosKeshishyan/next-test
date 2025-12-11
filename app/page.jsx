import ProductList from "@/components/homepage/ProductList";
import Search from "@/components/homepage/Search";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.home}>
        <Search />
        <ProductList />
    </div>
  );
}
