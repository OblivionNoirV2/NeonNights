import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as pi from './ProductInfo';
import { images_sources } from './ProductInfo';
import { CartContext } from './Context';

interface ProductInfoProps {
    price: number;
    item_number: number;
    name: string;
}

function getProductData(item_number: number): ProductInfoProps | undefined {
    for (let [name, info] of Object.entries(pi.product_info)) {
        if (info.item_number === item_number) {
            return { name, ...info };
        }
    }
}

const ProductPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const { itemnumber } = useParams();
    const item_number_int = parseInt(itemnumber || '0');
    const product_data = getProductData(item_number_int) as ProductInfoProps;
    const [isMessageShown, setIsMessageShown] = useState(false);

    if (!product_data) {
        return <div className='flex justify-center mx-auto text-white text-7xl'>Product not found</div>;
    }

    //find the image path if it exists
    const product_image = images_sources.find(
        img => img.includes(product_data.name)
    );
    function handleAddToCart(product: string) {
        setCart([...cart, product_data.name]);
        setIsMessageShown(true);
        setTimeout(() => setIsMessageShown(false), 3000)
    }
    const AddedMessage = (props: { product: string }) => {
        return (
            <div className={isMessageShown ?
                'flex text-white text-sm lg:text-xl mt-4 ml-4 mr-4 flash-msg flex-wrap overflow-auto' :
                'hidden'}>
                {props.product} added to cart
            </div>
        )
    }

    //text, button will move below the image for mobile
    return (
        <main className="mx-8 lg:mx-0 lg:w-full">
            <section className='mt-8 flex flex-col lg:flex-row 
  m-auto lg:w-2/3 product-page
  rounded-2xl mb-4'>
                <section className='flex flex-col w-full lg:w-1/2 sm:mx-16 '>
                    <h1 className='text-5xl lg:text-7xl ml-4 lg:ml-[2rem]'>{
                        pi.product_name_lookup[product_data.name]
                    }</h1>
                    {
                        product_image &&
                        <img src={product_image}
                            className='rounded-2xl prod-image w-1/2'
                            alt={pi.product_name_lookup[product_data.name]} />
                    }
                </section>
                <section className='flex flex-col w-full lg:w-2/3 mx-4 lg:mx-8 mt-8 lg:mt-48'>
                    <p className='text-md mx-4 lg:mx-0 lg:text-3xl leading-tight lg:leading-normal'>{pi.getImageCaption(product_data.name, "long")}</p>
                    <div className='flex'>
                        <h2 className='text-xl lg:text-3xl mt-8 ml-4 lg:ml-0'>${product_data.price}</h2>
                        <AddedMessage product={pi.product_name_lookup[product_data.name]} />
                    </div>
                    <button onClick={() => handleAddToCart(pi.product_name_lookup[product_data.name])}
                        className='add-btn w-2/3 ml-4 
                        lg:w-full lg:mx-auto mt-8 
                        add-cart-btn mb-8 lg:mb-4'>Add to cart</button>
                    {/*for the rocket launcher*/}

                </section>

            </section>
            {
                product_data.item_number === 9 &&
                <div className='text-xs flex justify-center
                 lg:justify-end mt-[32rem] mr-4 text-white'>
                    *probably illegal but we'll sell it to you anyway
                </div>
            }
        </main>

    );
};

export default ProductPage;
