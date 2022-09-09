import { createContext, useState } from "react";

export const NavigationContext = createContext();

export function NavigationPrivider({ children }) {
    const [page, setpage] = useState('home')
    const data = {page, setpage};

    return (
        <NavigationContext.Provider value={data}>
            {children}
        </NavigationContext.Provider>
    )
}