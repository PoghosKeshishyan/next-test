import "./globals.css";
import Header from "@/components/header";
import ProductProvider from "@/contexts/ProductContext";
import SidebarProvider from "@/contexts/SidebarContext";
import CartProvider from "@/contexts/CartContext";
import Basket from "@/components/basket";

export const metadata = {
  title: "Shop",
};

export default function RootLayout({ children }) {

  return (
      <CartProvider>
          <SidebarProvider>
              <ProductProvider >
                <html lang="en">
                <head>
                    <title></title>
                </head>
                <body>
                    <Header/>
                    <Basket />
                    {children}
                </body>
                </html>
              </ProductProvider>
          </SidebarProvider>
      </CartProvider>
  );
}
