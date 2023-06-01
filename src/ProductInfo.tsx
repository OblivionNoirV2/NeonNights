interface ImgDescProps {
    short_desc: string;
    long_desc: string;
}
//short and long descriptions, short for home page 
//long for the product page
export const image_desc: { [key: string]: ImgDescProps } = {
    "ai": {
        short_desc: "The Aeon Plus is an AI Robot companion designed for daily assistance, learning from your patterns to meet your needs.",
        long_desc: "Meet the future of daily help, the Aeon Plus. This AI Robot companion seamlessly integrates into your life, performing everyday tasks with unparalleled efficiency. Combining cutting-edge AI and state-of-the-art design, Aeon Plus learns from your patterns, continually evolving to meet your needs.",
    },
    "armor": {
        short_desc: "Deflector X, a revolutionary laser-armor, provides an impenetrable force field for your protection.",
        long_desc: "Introducing Deflector X, our revolutionary laser-armor, designed to protect you from any threat. With advanced plasma-field generation and kinetic energy absorption, you're not just wearing armor, you're donning an impenetrable force field."
    },
    "katana": {
        short_desc: "Shogun-X Laser Katana combines traditional design with photon technology for unrivaled precision.",
        long_desc: "Embrace the power of light with the Shogun-X Laser Katana. Combining traditional design with high-energy photon technology, this weapon offers unrivaled precision and cutting power, proving that old world elegance and future tech make a deadly combination."
    },
    "cpu": {
        short_desc: "Nova Centauri CPU, a powerful processor for complex computations and the heart of your future tech.",
        long_desc: "Experience unparalleled processing power with the Nova Centauri CPU. It's designed to handle complex computational tasks with lightning speed and efficiency. With quantum architecture and holographic processing, it's not just a CPU, it's the heart of your future."
    },
    "gpu": {
        short_desc: "Hyperion Z, a next-gen GPU, offers unimaginable graphics and computational capacities.",
        long_desc: "Presenting the Hyperion Z, a next-gen GPU designed to redefine the realms of digital reality. Experience unimaginable graphics and computational capacities with its advanced photon-rendering technology and quantum core."
    },
    "glasses": {
        short_desc: "Elevate your coding with VisionX Coding Glasses, enabling real-time code generation and debugging in AR.",
        long_desc: "Elevate your programming capabilities with the VisionX Coding Glasses. Tap into an augmented reality interface, generate and debug code in real-time, and bring your digital creations to life with unprecedented ease."
    },
    "pill": {
        short_desc: "Prometheus Pill offers superhuman strength, redefining human potential in a single dose.",
        long_desc: "Unlock your full potential with the Prometheus Pill. It offers a surge of superhuman mental and physical strength, allowing you to push your boundaries and redefine what it means to be human."
    },

    "chip": {
        short_desc: "The Pandora V4.0 microchip lets you customize your abilities, offering a range of powers.",
        long_desc: "Customize your abilities with the Pandora V4.0, a microchip designed to endow the user with powers of their choosing. From increased agility to telepathy, we offer a range of varieties to suit your adventurous side."
    },

    "launcher": {
        short_desc: "The Titan Omega Rocket Launcher offers precision and high-impact strikes with fusion-propelled rockets.",
        long_desc: "Step into the future of firepower with the Titan Omega Rocket Launcher. Its fusion-propelled rockets and smart-targeting system make it the perfect tool for precise, high-impact strikes."
    },

}
interface ProductInfoProps {
    price: number;
    item_number: number;
    popularity: number;
}
//price/item number/popularity
//changing the select menu will reorganize this
export const product_info: { [name: string]: ProductInfoProps } = {
    "ai": {
        price: 99999.99,
        item_number: 1,
        popularity: 4
    },
    "armor": {
        price: 8599.99,
        item_number: 2,
        popularity: 5

    },
    "katana": {
        price: 2399.99,
        item_number: 3,
        popularity: 3
    },
    "cpu": {
        price: 999.99,
        item_number: 4,
        popularity: 6
    },
    //they learned from Nvidia
    "gpu": {
        price: 1799.99,
        item_number: 5,
        popularity: 7
    },
    "glasses": {
        price: 599.99,
        item_number: 6,
        popularity: 8
    },
    //american style
    "pill": {
        price: 199.99,
        item_number: 7,
        popularity: 9
    },
    "chip": {
        price: 499.99,
        item_number: 8,
        popularity: 2
    },
    "launcher": {
        price: 4999.99,
        item_number: 9,
        popularity: 1
    }
}
export function getImageCaption(img: string, length: string) {
    if (length === "long") {
        return image_desc[img].long_desc;
    } else {
        return image_desc[img].short_desc;
    }

}

export function getPrice(img: string) {
    return product_info[img].price;
}

export const product_name_lookup: { [key: string]: string } = {
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

export const images_sources = [
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

export const image_source_lookup: { [key: string]: string } = {
    'ai': images_sources[0],
    'armor': images_sources[1],
    'katana': images_sources[2],
    'cpu': images_sources[3],
    'gpu': images_sources[4],
    'glasses': images_sources[5],
    'pill': images_sources[6],
    'chip': images_sources[7],
    'launcher': images_sources[8]

}