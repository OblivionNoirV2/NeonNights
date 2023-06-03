//this one holds the actual shipping/payment/tax/all that 
import { useContext } from "react";
import { SubTotalContext, CartContext } from "./Context";
import { image_source_lookup, product_name_lookup, getPrice } from "./ProductInfo";



export function toPennies(amount: number) {
    return Math.round(amount * 100);
}

//Convert pennies back to dollars for display
export function fromPennies(amount: number) {
    return amount / 100;
}
//Display in correct currency format
export function formatCurrency(amountInPennies: number) {
    return "$" + fromPennies(amountInPennies).toLocaleString('en-US', {
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

const ConfirmButton = () => {
    return (
        <button onClick={() => alert("Order confirmed!")}
            className="checkout-btn rounded-lg text-white lg:mb-0 
         px-4 py-4">
            Confirm Order
        </button>
    )
}
//add $3 to shipping for each item
const ItemsSummary = () => {
    const { total } = useContext(SubTotalContext);
    const { cart } = useContext(CartContext);
    const total_pennies = toPennies(total);
    const shipping_pennies = toPennies(total * .005);
    const pre_tax_total = total_pennies + shipping_pennies;
    const estimated_tax = Math.round(pre_tax_total * 0.07);
    const order_total = pre_tax_total + estimated_tax;

    return (
        <section className="text-white ml-4">
            {cart.length !== 0 ?
                <>
                    <h1 className="text-4xl">Order Summary</h1>
                    <hr></hr>
                    <section className="flex flex-col text-xl mb-4">
                        <ul>
                            <li className="my-6">
                                Items ({cart.length}): {formatCurrency(total_pennies)}
                            </li>
                            <li className="my-6">
                                Shipping: {formatCurrency(shipping_pennies)}
                            </li>
                            <li className="my-6">
                                Total before tax: {formatCurrency(pre_tax_total)}
                            </li>
                            <li className="my-6">
                                Estimated tax: {formatCurrency(estimated_tax)}
                            </li>
                            <hr className="w-4/5"></hr>
                            <li className="text-3xl">
                                Order total: {formatCurrency(order_total)}
                            </li>
                        </ul>
                    </section>
                </>
                :
                <section>
                    <h1 className="text-3xl lg:text-4xl mb-8 lg:mb-0">Your cart is empty</h1>
                </section>
            }
        </section>
    );
};
//row with 2 cols
const Checkout = () => {
    const { cart } = useContext(CartContext);
    const unique_items = Array.from(new Set(cart));
    return (
        <div className="mt-8 mx-8 lg:mx-0 ">
            <main className="sm:w-full lg:w-3/5 checkout-page sm:justify-start lg:justify-center 
        flex flex-col sm:flex-row mx-auto text-white rounded-lg">

                <section className="flex flex-col w-full lg:w-1/2">
                    <ShippingAndPayment />
                    <hr className="mt-4 w-2/3"></hr>
                    <section className="flex flex-col  ">
                        {unique_items.map((item, index) => (
                            <ol key={index}>
                                <li className="flex flex-col sm:flex-row ml-12 w-full items-center">

                                    <img src={image_source_lookup[item]}
                                        className=" my-4
                         w-1/2  lg:w-1/4 h-auto mr-64 lg:mr-4"
                                        alt={product_name_lookup[item]}>
                                    </img>
                                    <section className="flex-col mt-4 sm:mt-0 w-full sm:w-2/3 lg:w-3/4">
                                        <div className="text-md lg:text-xl">
                                            {product_name_lookup[item]} x{cart.filter((i) => i === item).length}
                                        </div>
                                        <br></br>
                                        <div className="text-lg">
                                            {formatCurrency(toPennies(getPrice(item)) * cart.filter((i) => i === item).length)}
                                        </div>
                                    </section>
                                </li>
                            </ol>
                        ))}
                    </section>
                </section>

                <section className="w-full lg:w-1/2 mt-4 lg:mt-2 lg:mr-36">
                    <ItemsSummary />
                </section>
            </main>
            {cart.length !== 0 &&
                <section className="flex justify-center 
                mt-4 mx-auto mb-12 text-4xl lg:text-5xl">
                    <ConfirmButton />
                </section>
            }

        </div>
    )
}





export default Checkout;
