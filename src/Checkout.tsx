//this one holds the actual shipping/payment/tax/all that 
import { useContext } from "react";
import { SubTotalContext, CartContext } from "./Context";
import { images_sources, image_source_lookup, product_name_lookup, getPrice } from "./ProductInfo";
import CartElement from "./Cart";
//goes on the right
export function formatCurrency(num: number) {
    return "$" + num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " ";
}
const ShippingAndPayment = () => {
    return (
        <section className="flex flex-col text-white ml-16 mt-4">
            <div className="flex flex-row">
                <h1>Shipping Address</h1>
                <ul className="ml-8">
                    <li>Mr. AGI Overlord</li>
                    <li>Tower of Doom</li>
                    <li>Zerg, Saturn 834675</li>
                </ul>
            </div>
            <div className="flex flex-row mt-4">
                <h1>Payment Method</h1>
                <ul className="ml-8">
                    <li>NeuroCard ending in 7645</li>
                </ul>
            </div>
        </section>
    )
}
//add $3 to shipping for each item
const ItemsSummary = () => {
    const { total, setTotal } = useContext(SubTotalContext);
    const { cart, setCart } = useContext(CartContext);
    return (
        <section className="text-white">
            <h1 className="text-4xl">Order Summary</h1>
            <hr></hr>
            <section className="flex flex-col text-xl mb-4">
                <ul>
                    <li className="my-6">
                        Items ({cart.length}): {formatCurrency(total)}
                    </li>
                    <li className="my-6">
                        Shipping: {formatCurrency(cart.length * 3)}
                    </li>
                    <li className="my-6">
                        Total before tax: {formatCurrency(total + cart.length * 3)}
                    </li>
                    <li className="my-6">
                        Estimated tax: {formatCurrency((total + cart.length * 3) * 0.07)}
                    </li>
                    <hr className="w-4/5"></hr>
                    <li className="text-3xl">
                        Order total: {formatCurrency((total + cart.length * 3) * 1.07)}
                    </li>
                </ul>
            </section>
        </section>
    )
}
//row with 2 cols
const Checkout = () => {
    const { total, setTotal } = useContext(SubTotalContext);
    const { cart } = useContext(CartContext);
    const unique_items = Array.from(new Set(cart));
    return (
        <main className="w-3/5 checkout-page justify-center 
        flex flex-row mx-auto text-white ">
            <section className="flex flex-col">
                <ShippingAndPayment />
                <hr className="mt-4 w-2/3"></hr>
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
            </section>
            <section className="mr-36  mt-2 w-1/2">
                <ItemsSummary />
            </section>
        </main>
    )
}

export default Checkout;