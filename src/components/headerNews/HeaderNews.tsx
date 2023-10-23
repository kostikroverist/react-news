import React, { useState } from 'react'
import imgA from '../../img/GettyImages-1234844176.jpg'
import imgB from '../../img/ukaine-hero-resized.jpg'
import './HeaderNews.css'; // Import the CSS file you created

const HeaderNews = () => {
    const [img, setImg] = useState(imgB);

    const handleImageChange = () => {
        setImg(imgA);
    };

    return (
        <div>
            <header className="header" style={{ backgroundImage: `url(${img})` }}>
                <div className="overlay"></div>
                <div className="header-content flex flex-col justify-between">
                    <div>
                        <p className="text-white text-4xl font-bold pb-5">War in Ukraine</p>
                        <p className="text-white text-xl font-thin pb-5">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Laborum obcaecati cumque provident consectetur quas perferendis
                            atque, voluptatum eum beatae quam dolore possimus voluptas quae quasi? Ipsum totam modi harum nostrum!</p>
                        <div className='flex'>
                            <p className='text-white text-xs font-thin pr-5'>24 may 2023</p>
                            <p className='text-white text-xs font-thin pl-2 pb-5'>Ukraine</p>
                        </div>
                    </div>
                    <button onClick={handleImageChange}>Choose Image</button>
                    <div className="flex justify-center">
                        <div className="content-container">
                            <div className="news-block"></div>
                            <div className="news-block"></div>
                            <div className="news-block"></div>
                            <div className="news-block"></div>
                            <div className="news-block"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderNews;


