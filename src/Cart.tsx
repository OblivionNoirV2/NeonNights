import { Link } from "react-router-dom";
import { useContext } from "react";
import { product_name_lookup } from "./ProductInfo";
import { CartContext } from "./Context";
import { images_sources, image_source_lookup } from "./ProductInfo";
import { getPrice } from "./ProductInfo";
//todo: add notif when you add to cart
const CartElement = () => {
    const { cart, setCart } = useContext(CartContext);
    //prevents listing the same item multiple times
    const unique_items = Array.from(new Set(cart));
    function handleRemoval(item: string) {
        //adjust the cart to be everything but the deleted item
        const new_cart = cart.filter((i) => i !== item);
        setCart(new_cart);
    }
    return (
        <main className=" w-2/5 justify-center m-auto">
            <h1 className="text-6xl checkout">Cart</h1>
            <hr></hr>
            {/*line up to the left, in a column*/}
            <section className="flex flex-col">
                <section className="flex">
                    {cart.length == 0 ?
                        <div className="flex text-4xl py-8 text-white">
                            Your cart is empty
                        </div>
                        :
                        <ul className="flex flex-col w-full justify-start ml-4 text-3xl">
                            {unique_items.map((item, index) => (
                                <li key={index} className="flex my-8
                                 text-white cart-page">
                                    <img src={image_source_lookup[item]}
                                        className="w-1/12 h-1/12">
                                    </img>
                                    <div className="flex flex-col w-full ml-4">
                                        {product_name_lookup[item]} x{cart.filter((i) => i === item).length}
                                        <br></br>
                                        <div className="text-2xl">
                                            {getPrice(item)}
                                        </div>
                                    </div>
                                    <button onClick={() => handleRemoval(item)}
                                        className="remove-btn flex 
                                    h-fit px-2 py-1 rounded-lg"
                                        title="Remove from cart">
                                        X
                                    </button>

                                </li>
                            ))}
                        </ul>
                    }
                </section>
                {cart.length !== 0 &&
                    <section className="text-white">
                        Total: ${Number(cart.reduce(
                            (acc, item) => acc + getPrice(item), 0).toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 })}

                    </section>
                }
            </section>
            <hr></hr>
        </main>
    )
}

export default CartElement;