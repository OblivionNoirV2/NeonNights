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
const image_captions: { [title: string]: string } = {
    "ai.png": "Meet the future of daily help, the Aeon Plus. This AI Robot companion seamlessly integrates into your life, performing everyday tasks with unparalleled efficiency. Combining cutting-edge AI and state-of-the-art design, Aeon Plus learns from your patterns, continually evolving to meet your needs.",
    "armor.png": "Introducing Deflector X, our revolutionary laser-armor, designed to protect you from any threat. With advanced plasma-field generation and kinetic energy absorption, you're not just wearing armor, you're donning an impenetrable force field.",
    "chip.png": "Customize your abilities with the Pandora V4.0, a microchip designed to endow the user with powers of their choosing. From increased agility to telepathy, we offer a range of varieties to suit your adventurous side.",
    "cpu.png": "Experience unparalleled processing power with the Nova Centauri CPU. It's designed to handle complex computational tasks with lightning speed and efficiency. With quantum architecture and holographic processing, it's not just a CPU, it's the heart of your future.",
    "gpu.png": "Presenting the Hyperion Z, a next-gen GPU designed to redefine the realms of digital reality. Experience unimaginable graphics and computational capacities with its advanced photon-rendering technology and quantum core.",
    "glasses.png": "Elevate your programming capabilities with the VisionX Coding Glasses. Tap into an augmented reality interface, generate and debug code in real-time, and bring your digital creations to life with unprecedented ease.",
    "katana.png": "Embrace the power of light with the Shogun-X Laser Katana. Combining traditional design with high-energy photon technology, this weapon offers unrivaled precision and cutting power, proving that old world elegance and future tech make a deadly combination.",
    "launcher.png": "Step into the future of firepower with the Titan Omega Rocket Launcher. Its fusion-propelled rockets and smart-targeting system make it the perfect tool for precise, high-impact strikes. *Probably illegal but we'll sell it to you anyway.",
    "pill.png": "Unlock your full potential with the Prometheus Pill. It offers a surge of superhuman mental and physical strength, allowing you to push your boundaries and redefine what it means to be human. Experience the future of human evolution in a single dose.",
}
function getImageCaption(img: string) {
    return image_captions[img]
}
const ImagesGrid: React.FC<ImagesGridProps> = ({ images }) => {
    return (
        <div className="image-grid">
            {images.map((img, i) => {
                //removes the /assets/
                const match = img.match(/\/([a-z]+)\./i);
                const img_name = match ? match[1] + '.png' : '';
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
                        <figcaption className="image-caption">
                            {getImageCaption(img_name)}
                        </figcaption>
                    </section>
                )
            })}
        </div>
    );
};


export default Home;

