import styles from "@/components/homepage/products.module.css";

export default async function FetchData() {
    const resp = await fetch("https://fakestoreapi.com/products", {
        next: {
            revalidate: 300
        }
    });
    if (!resp.ok) {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}> Products Not Found</h1>
            </div>
        )
    }
    return await resp.json()
}