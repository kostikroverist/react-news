import React, { useState } from 'react'
import './HeaderNews.css'; // Import the CSS file you created
import { IoLocationSharp } from 'react-icons/io5';
const arrNews = [
    {
        id: 1, imgurl: 'https://static.ukrinform.com/photos/2020_06/thumb_files/630_360_1591183448-351.jpg', titleNews: 'люди зможуть виїджати за кордон',
        day: '27.06.2023', country: 'Ukraine'
    },
    {
        id: 2, imgurl: 'https://www.liga.net/images/general/2020/11/06/20201106110424-4735.png?v=1604657211', titleNews: 'хто буде наступним президентом',
        day: '24.03.2023', country: 'United States'
    },
    {
        id: 3,
        imgurl: 'https://defence-ua.com/media/illustration/articles/5cc639ecd0f60a96.jpg',
        titleNews: 'В США планируют передать Украине кассетные боеприпасы большей дальности',
        day: '24.06.2024', country: 'United States'
    },
    {
        id: 4, imgurl: 'https://static.espreso.tv/uploads/photobank/304000_305000/304883_Taktichni_raketi_MGM-140_ATACMS_ta_M142_HIMARS.jpg', titleNews: 'Не далекобійні: Згурець проаналізував версію ATACMS, які передали Україні',
        day: '14.06.2023', country: 'United States'
    },
    {
        id: 5, imgurl: 'https://c.files.bbci.co.uk/12FFD/production/_129412877_photo_2023-04-19_14-20-38.jpg', titleNews: 'ЗРК PATRIOT вже в Україні. Як вони допоможуть захиститись від російських ракет, літаків і безпілотників',
        day: '3.06.2023', country: 'United States'
    },

]
interface NewsBlock {
    id: number, imgurl: string, titleNews: string, day: string, country: string;
}

const HeaderNews = () => {
    const [newsObject, setNewsObject] = useState<NewsBlock>(arrNews[0]);

    const handleImageChange = (newsBlock: NewsBlock) => {
        setNewsObject(newsBlock);
    };

    return (
        <div>

            <header className="header" style={{ backgroundImage: `url(${newsObject.imgurl})` }}>
                <div className="overlay"></div>
                <div className="header-content flex flex-col justify-between">
                    <div>
                        <p className="text-white text-4xl font-bold pb-5">{newsObject.titleNews}</p>
                        {/* <p className="text-white text-xl font-thin pb-5">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Laborum obcaecati cumque provident consectetur quas perferendis
                            atque, voluptatum eum beatae quam dolore possimus voluptas quae quasi? Ipsum totam modi harum nostrum!</p> */}
                        <div className='flex'>
                            <p className='text-white text-xl font-thin pr-5 flex'>{newsObject.day}</p>
                            <p className='text-white text-xl font-thin pl-2 pb-5 flex'><IoLocationSharp className='mr-1' color='rgb(0, 246, 0)' size='18' />{newsObject.country}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="content-container">

                            {arrNews.map(newsBlock => <div key={newsBlock.id}
                                className={`${'news-block p-2'}${newsObject.id === newsBlock.id ? ' chosen-block' : ' '}  `} style={{ backgroundImage: `url(${newsBlock.imgurl})` }} onClick={() => handleImageChange(newsBlock)} >
                                <p className='text-sm text-center'>{newsBlock.titleNews}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </header >
        </div >
    );
};

export default HeaderNews;


