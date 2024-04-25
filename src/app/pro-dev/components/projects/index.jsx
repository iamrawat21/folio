'use client';
import React, { useState } from 'react'; // Import React and useState
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const data = [
    {
        title: "HeadZone",
        description: "Working on the E-commerce Headphones Webstore.",
        speed: 0.5,
        href: "https://headzone.netlify.app"
    },
    {
        title: "Krypt",
        description: "Developed the Crypto transfer Web app paired with Meta Mask.",
        speed: 0.5,
        href: "https://kryptweb3-0.netlify.app"
    },
    {
        title: "WeatheVise",
        description: "All in one Weather App where you can see everythings from Temperature to Wind Pressure",
        speed: 0.67,
        href: "https://weathervise.netlify.app"
    },
    {
        title: "Nike Store",
        description: "A new enhanced landing page of Nike store",
        speed: 0.8,
        href: "https://nikestore-v2.netlify.app"
    },
    {
        title: "Netflix CLone",
        description: "Netflix Clone app which is built with reactJS and MongoDB ",
        speed: 0.8,
        href: "https://netflic-clone-m.netlify.app"
    },
    // {
    //     title: "Rapid",
    //     description: "Moblie Application of News app provide ",
    //     speed: 0.8,
    //     href: "https://headzone.netlify.app"
    // }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null); // Use useState here
    const pathname = usePathname();
    
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
            {data.map((link) => {
                const isActive = pathname.startsWith(link.href);
                
                return (
                    <Link href={link.href} key={link.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
}
