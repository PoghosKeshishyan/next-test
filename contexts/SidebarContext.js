"use client";

import {createContext, useContext, useState} from 'react';

 export const SidebarContext = createContext(null);


 export default function SidebarProvider({children}) {
     const [show, setShow] = useState(false);

     return (
        <SidebarContext.Provider value={{show, setShow}}>
            {children}
        </SidebarContext.Provider>
     );

}