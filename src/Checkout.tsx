//this one holds the actual shipping/payment/tax/all that 
import { useContext } from "react";
import { SubTotalContext, CartContext } from "./Context";
import { images_sources, image_source_lookup, product_name_lookup, getPrice } from "./ProductInfo";
import CartElement from "./Cart";
//goes on the right
export function formatCurrency(num: number) {
    return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
}
//add $2 to shipping for each item
const ItemsSummary = () => {
    const { total, setTotal } = useContext(SubTotalContext);
    const { cart, setCart } = useContext(CartContext);
    return (
        <section className="text-white">
            <h1 className="text-4xl">Order Summary</h1>
            <hr></hr>
            <section className="flex flex-col text-xl">
                <ul className="space-y-8">
                    <li>Items ({cart.length}): {formatCurrency(total)}</li>
                </ul>

            </section>
        </section>


    )


}
//row with 2 cols
const Checkout = () => {
    const { total, setTotal } = useContext(SubTotalContext);
    const { cart, setCart } = useContext(CartContext);
    const unique_items = Array.from(new Set(cart));
    return (
        <main className="w-3/5 checkout-page justify-center 
        flex flex-row mx-auto text-white ">

            <section className="flex flex-col">
                {unique_items.map((item, index) => (
                    <ol key={index}>
                        <li className="flex flex-row ml-12">

                            <img src={image_source_lookup[item]}
                                className="w-2/12 h-2/12 my-4 ml-4">
                            </img>
                            <section className="flex-col ml-4 mt-8">
                                <div className="text-xl">
                                    {product_name_lookup[item]} x{cart.filter((i) => i === item).length}
                                </div>
                                <br></br>
                                <div className="text-lg">
                                    ${(getPrice(item) * cart.filter((i) => i === item).length).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                            </section>
                        </li>
                    </ol>
                ))}
            </section>
            <section className="mr-36  mt-2 w-1/2">
                <ItemsSummary />
            </section>
        </main>
    )
}

export default Checkout;