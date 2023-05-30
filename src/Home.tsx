import './Sparkles.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as pi from './ProductInfo';
import { images_sources } from './ProductInfo';

const Home = () => {
    return (
        <main className='neon-text'>
            <ImagesGrid images={images_sources} />
        </main>
    )
}
interface ImagesGridProps {
    images: string[];
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ images }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:grid md:grid-cols-3 gap-24">
            {images.map((img, i) => {
                const match = img.match(/\/([a-z]+)\./i);
                const img_name = match ? match[1] : '';
                const item_number = pi.product_info[img_name]?.item_number;

                return (
                    <section key={i} className="flex flex-col items-center mx-16 my-16">
                        <button onClick={() => navigate(`/Product/${item_number}`)}>
                            <img
                                className={
                                    i % 2 === 0 ?
                                        "grid-image"
                                        :
                                        " grid-image-blue"
                                }
                                src={img}
                                alt={img_name}
                            />
                        </button>
                        <figcaption className="image-caption mt-2 text-center">
                            {pi.getImageCaption(img_name, "short")}
                            <hr className='my-2'></hr>
                            {"$" + pi.getPrice(img_name)}
                        </figcaption>
                    </section>
                )
            })}
        </div>
    );
};





export default Home;

