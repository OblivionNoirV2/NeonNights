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

//used to pass the subtotal to the checkout page
interface SubTotalProps {
    total: number;
    setTotal: (total: number) => void;
}
export const SubTotalContext = createContext<SubTotalProps>({
    total: 0,
    setTotal: () => { }
})

export function SubTotalContextProvider({ children }: { children: React.ReactElement }) {
    const [total, setTotal] = useState<number>(0);
    return (
        <SubTotalContext.Provider value={{ total, setTotal }}>
            {children}
        </SubTotalContext.Provider>
    )
}
export default {}