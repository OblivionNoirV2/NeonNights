import { createContext, useState } from 'react';
//will be used for managing cart items, a list of strings 
//number over the cart icon will be the length of this array
interface CartContextProps {
    cart: string[];
    setCart: (cart: string[]) => void;
}

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => { }
})

export function CartContextProvider({ children }: { children: React.ReactElement }) {
    const [cart, setCart] = useState<string[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default {}