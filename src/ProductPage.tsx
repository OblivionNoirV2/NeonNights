import { useParams } from 'react-router-dom';
import * as pi from './ProductInfo';

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
    const { itemnumber } = useParams();
    //this is correct
    console.log("in " + itemnumber)
    const item_number_int = parseInt(itemnumber || '0');
    const product_data = getProductData(item_number_int);
    //this is correct
    console.log(product_data)
    if (!product_data) {
        return <div>Product not found</div>;
    }

    return (
        <div className="bg-red-700 w-full">
            <h1 className='text-8xl '>{product_data.name}</h1>
            <h2>Price: {product_data.price}</h2>
            <p>{pi.getImageCaption(product_data.name, "long")}</p>
        </div>
    );
};

export default ProductPage;
