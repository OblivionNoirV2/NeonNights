import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { product_name_lookup } from "./ProductInfo";
import { CartContext, SubTotalContext } from "./Context";
import { image_source_lookup } from "./ProductInfo";
import { getPrice } from "./ProductInfo";
import { formatCurrency, toPennies } from "./Checkout";
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    return (
        <main className=" w-3/5 ml-4 justify-start mr-auto lg:justify-center  lg:ml-auto">
            <h1 className="text-6xl checkout">Cart</h1>
            <hr></hr>
            <section className="flex flex-col">
                <section className="flex">
                    {cart.length === 0 ?
                        <div className="flex text-4xl py-8 text-white">
                            Your cart is empty
                        </div>
                        ://make two different uls, for the images and the other stuff
                        <ul className="flex flex-col ml-4 text-xl lg:text-2xl">

                            {unique_items.map((item, index) => (
                                <li key={index} className="grid grid-cols-cartItem my-8 text-white">
                                    <div className="col-img">
                                        <img src={image_source_lookup[item]}
                                            className=" w-3/5 h-auto object-cover -ml-4 lg:-ml-0"
                                            alt={product_name_lookup[item]}>
                                        </img>
                                    </div>
                                    <section className="flex flex-col justify-around
         col-content -ml-12 lg:ml-4 text-sm lg:text-xl w-1/6 lg:w-1/3 ">
                                        {product_name_lookup[item]} x{cart.filter((i) => i === item).length}
                                        <section>
                                            {formatCurrency(toPennies(getPrice(item)) * cart.filter((i) => i === item).length)}
                                        </section>
                                        <section className="flex justify-between items-center">
                                            <div className="button-group">
                                                <button onClick={() => handleRemoval(item)}
                                                    className="plus-minus-btn flex 
h-fit px-2 rounded-lg"
                                                    title="Subtract by one">
                                                    -
                                                </button>
                                                <button onClick={() => handleAddition(item)}
                                                    className="plus-minus-btn flex 
h-fit px-2 rounded-lg"
                                                    title="Add one">
                                                    +
                                                </button>
                                            </div>
                                        </section>

                                    </section>
                                </li>
                            ))}

// ...



                        </ul>

                    }
                </section>
                {cart.length !== 0 &&
                    <section className="text-white">
                        Total: {formatCurrency(toPennies(total))}
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
