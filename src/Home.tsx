import './Sparkles.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pi from './ProductInfo';
import { images_sources } from './ProductInfo';
interface SortSelectionProps {
    setSortType: React.Dispatch<React.SetStateAction<string>>;
}

const SortSelection: React.FC<SortSelectionProps> = ({ setSortType }) => {
    const handleSortSelection = (
        event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    };

    return (
        <select className='bg-black sort-select ml-16 w-36 lg:w-fit'
            onChange={handleSortSelection} defaultValue="">
            <option value="" disabled>Sort by...</option>
            <option value="price-lth">Price: Low to high</option>
            <option value="price-htl">Price: High to low</option>
            <option value="popularity">Popularity</option>
            <option value="default">Default</option>
        </select>
    );
};

const Home = () => {
    const [sortType, setSortType] = useState('default');

    return (
        <main className='neon-text'>
            <SortSelection setSortType={setSortType} />
            <ImagesGrid images={images_sources} sort_type={sortType} />
        </main>
    );
};

interface ImagesGridProps {
    images: string[];
    sort_type: string;
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ images, sort_type }) => {
    const [sortedImages, setSortedImages] = useState(images);
    let product_info_array = Object.entries(pi.product_info);
    useEffect(() => {
        switch (sort_type) {
            case 'price-lth':
                product_info_array.sort(([, a], [, b]) => a.price - b.price);
                break;
            case 'price-htl':
                product_info_array.sort(([, a], [, b]) => b.price - a.price);
                break;
            case 'popularity':
                product_info_array.sort(([, a], [, b]) => b.popularity - a.popularity);
                break;
            case 'default':
                product_info_array.sort(([, a], [, b]) => a.item_number - b.item_number);
                break;
            default:
        }
        const sorted_images_names = product_info_array.map(([key, _]) => key);
        const sorted_images_paths = sorted_images_names.map(name => pi.image_source_lookup[name]);

        setSortedImages(sorted_images_paths);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort_type]);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:grid md:grid-cols-3 gap-24">
            {sortedImages.map((img, i) => {
                const match = img.match(/\/([a-z]+)\./i);
                const img_name = match ? match[1] : '';
                //will retrieve from a different list based on the state
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

