import { Link } from "react-router-dom";
import { useContext } from "react";
import { product_name_lookup } from "./ProductInfo";
import { CartContext } from "./Context";
const Checkout = () => {
    const { cart, setCart } = useContext(CartContext);
    return (
        <main className=" w-1/3 justify-center m-auto">
            <h1 className="text-6xl checkout">Checkout</h1>
            <hr></hr>
            {/*line up to the left, in as column*/}
            <section className=" flex cart-page">
                {cart.length == 0 ?
                    <div className="flex text-4xl">Your cart is empty</div>
                    :
                    <ul className="flex flex-col justify-start ml-4 text-3xl">
                        {cart.map((item, index) => (
                            <li key={index} className="flex  text-white">
                                {product_name_lookup[item]}

                            </li>
                        ))}
                    </ul>
                }

            </section>
        </main>
    )
}

export default Checkout;