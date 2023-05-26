import './Sparkles.css'
import React from 'react';
import { useState, useEffect } from 'react';
import * as pi from './ProductInfo';
const ImagesArray: string[] = [
    require('./assets/ai.png'),
    require('./assets/armor.png'),
    require('./assets/katana.png'),

    require('./assets/cpu.png'),
    require('./assets/gpu.png'),
    require('./assets/glasses.png'),
    require('./assets/pill.png'),
    require('./assets/chip.png'),
    require('./assets/launcher.png'),

]
const Home = () => {
    return (
        <main className='neon-text'>
            <ImagesGrid images={ImagesArray} />
        </main>
    )
}
interface ImagesGridProps {
    images: string[];
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ images }) => {
    return (
        <div className="image-grid">
            {images.map((img, i) => {
                //removes the /assets/
                const match = img.match(/\/([a-z]+)\./i);
                const img_name = match ? match[1] : '';
                console.log(img_name);
                return (
                    <section key={i}>
                        <button>
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

