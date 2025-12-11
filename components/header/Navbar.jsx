import {memo} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";

// eslint-disable-next-line react/display-name
const Navbar = memo(({menu}) => {
    const pathName = usePathname();

    const routes = [
        {id: 1, name: "Men's-Clothing", href: "/products/mensCloth"},
        {id: 2, name: "Women's-Clothing", href: "/products/womenCloth"},
        {id: 3, name: "Jewelery", href: "/products/jewelery"},
        {id: 4, name: "Electronics", href: "/products/electronics"},
    ]

    return (
        <nav className={`${styles.navbar}  ${menu ? "" : styles.dropdown}`}>
            {
                routes.map(route => (
                    <Link
                        key={route.id}
                        href={route.href}
                        className={`${styles.link} ${pathName === route.href ? styles.active : ""}`}
                    >{route.name}</Link >
                ))
            }
        </nav>
    );
});

export default Navbar;