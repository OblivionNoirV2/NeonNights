import './Sparkles.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pi from './ProductInfo';
import { Link } from 'react-router-dom';
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
        <div className="image-grid">
            {images.map((img, i) => {
                //gets rid of /assets/
                const match = img.match(/\/([a-z]+)\./i);
                const img_name = match ? match[1] : '';
                const item_number = pi.product_info[img_name]?.item_number; //get the item number from product_info

                console.log(img_name);
                return (
                    <section key={i}>
                        <button onClick={() => navigate(`/Product/${item_number}`)}>
                            <img
                                className={
                                    i % 2 === 0 ? "w-1/2 h-auto grid-image"
                                        : "w-1/2 h-auto grid-image-blue"
                                }
                                src={img}
                                alt={img_name}
                            />

                        </button>
                        <figcaption className="image-caption mt-2">
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

