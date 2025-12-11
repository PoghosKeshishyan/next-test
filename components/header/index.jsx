"use client";

import {memo, useContext, useState} from "react";
import {CartContext} from "@/contexts/CartContext";
import {SidebarContext} from "@/contexts/SidebarContext";
import { IoCartSharp } from "react-icons/io5";
import { IoMenu, IoClose  } from "react-icons/io5";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";
import styles from "./header.module.css"

// eslint-disable-next-line react/display-name
const Header = memo(() => {
    const {totalCount} = useContext(CartContext);
    const {setShow} = useContext(SidebarContext);
    const [menu, setMenu] = useState(true);

    return (
        <header className={styles.header}>
            <Link
                href="/"
                className={styles.logo}
            >
                Wildberries
            </Link>


            <div className={styles.nav_div}>
                <div>
                    <Navbar menu={menu} />
                </div>
                <div onClick={() => {
                    setMenu(!menu);
                }}>
                {menu 
                    ? <IoMenu className={styles.menu_icon}/>
                    : <IoClose className={styles.menu_icon} />
                }
                </div>
                <div className={styles.cart}>
                    <IoCartSharp onClick={() => setShow(true)} />
                    <p
                        className={`${totalCount ? styles.non_empty : styles.empty}`}
                    >
                        {totalCount}
                    </p>
                </div>
            </div>
        </header>
    );
});

export default Header;