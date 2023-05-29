import { useParams } from 'react-router-dom';
import * as pi from './ProductInfo';
import { ImagesArray } from './Home';
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
const product_name_lookup: { [key: string]: string } = {
    'ai': 'Aeon Plus AI Assistant',
    'armor': 'Deflector X Laser Armor',
    'katana': 'Shogun X Laser Katana',
    'cpu': 'Nova Centauri 1024 core, 98.6 GHz CPU',
    'gpu': 'Hyperion Z 9090zi GPU',
    'glasses': 'VisionX Coding Glasses',
    'pill': 'Prometheus Pill',
    'chip': 'Pandora V4.0 Neural Chip',
    'launcher': 'Rocket Launcher'

}
const ProductPage = () => {
    const { itemnumber } = useParams();
    const item_number_int = parseInt(itemnumber || '0');
    const product_data = getProductData(item_number_int);

    if (!product_data) {
        return <div className='flex justify-center mx-auto text-white text-7xl'>Product not found</div>;
    }

    //find the image path if it exists
    const product_image = ImagesArray.find(
        img => img.includes(product_data.name)
    );

    return (
        <main className=" w-full ">
            <section className='flex flex-row b mx-auto w-2/3 product-page
            rounded-2xl'>
                <section className='flex flex-col w-1/2 '>
                    <h1 className='text-7xl ml-[2rem] '>{
                        product_name_lookup[product_data.name]
                    }</h1>
                    {
                        product_image &&
                        <img src={product_image}
                            className='rounded-2xl prod-image' />
                    }
                </section>
                <section className='flex flex-col w-1/2 ml-8 mr-8 mt-48'>
                    <p className='text-3xl leading-normal'>{pi.getImageCaption(product_data.name, "long")}</p>
                    <h2 className='text-3xl mt-8'>${product_data.price}</h2>
                    <button className='add-btn mt-8'>Add to cart</button>
                    {/*for the rocket launcher*/}
                    {
                        product_data.item_number == 9 &&
                        <div className='text-xs flex justify-end mt-80'>
                            *probably illegal but we'll sell it to you anyway
                        </div>
                    }
                </section>
            </section>
        </main>
    );
};


export default ProductPage;
