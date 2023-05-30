import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { product_name_lookup } from "./ProductInfo";
import { CartContext, SubTotalContext } from "./Context";
import { images_sources, image_source_lookup } from "./ProductInfo";
import { getPrice } from "./ProductInfo";

const CartElement = () => {
    const { cart, setCart } = useContext(CartContext);
    const { total, setTotal } = useContext(SubTotalContext);
    const unique_items = Array.from(new Set(cart));
    //- button
    function handleRemoval(item: string) {
        let index = cart.indexOf(item);
        if (index !== -1) {
            const new_cart = [...cart];
            new_cart.splice(index, 1);
            setCart(new_cart);
        }
    }
    //+ button
    function handleAddition(item: string) {
        setCart([...cart, item]);
    }

    useEffect(() => {
        setTotal(Number(cart.reduce(
            (acc, item) => acc + getPrice(item), 0).toFixed(2)))
    }, [cart])

    return (
        <main className=" w-2/5 justify-center m-auto">
            <h1 className="text-6xl checkout">Cart</h1>
            <hr></hr>
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
                                        className="plus-minus-btn flex 
                                    h-fit px-4 rounded-lg"
                                        title="Subtract by one">
                                        -
                                    </button>
                                    <button onClick={() => handleAddition(item)}
                                        className="plus-minus-btn flex 
                                    h-fit px-4  rounded-lg"
                                        title="Add one">
                                        +
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }
                </section>
                {cart.length !== 0 &&

                    <section className="text-white">
                        Total: ${total}

                    </section>
                }
            </section>
            <hr></hr>
            {cart.length !== 0 &&
                //this one gets a special animation
                <Link to="/checkout">
                    <button
                        className="text-white flex justify-center mx-auto 
                        text-3xl px-6 py-4 mt-4 rounded-xl checkout-btn">
                        Checkout
                    </button>
                </Link>
            }
        </main>
    )
}

export default CartElement;
