import './Sparkles.css'
import React from 'react';
import { useState, useEffect } from 'react';

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
            {images.map((img, i) => (
                <img
                    className={i % 2 === 0 ? "w-1/2 h-auto grid-image" : "w-1/2 h-auto grid-image-blue"}
                    src={img}
                    alt={img}
                    key={i}
                />
            ))}
        </div>
    );
};



export default Home;

