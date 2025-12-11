import Search from "@/components/homepage/Search";
import modules from "@/app/page.module.css";

export default function Layout({children}) {
    return (
            <div className={modules.home}>
                <Search />
                {children}
            </div>
    );
};

