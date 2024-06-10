import Slider from "react-slick/lib/slider";
import {getPhotosUrl} from "../../utils";
import {Carousel} from "../carousel/Carousel";

export function MethodologicalActivity() {

    const speechesNPKSeminars = getPhotosUrl(5, '/public/Методическая деятельность/Выступления_НПК_семинары/', 'jpeg');
    const openLessons = getPhotosUrl(3, '/public/Методическая деятельность/Открытые мероприятия/', 'jpeg');
    const experience = getPhotosUrl(4, '/public/Методическая деятельность/Представление пед.опыт на сайтах/', 'jpeg');
    const profContest = getPhotosUrl(4, '/public/Методическая деятельность/Проф.конкурсы/', 'jpeg');
    const publications = getPhotosUrl(3, '/public/Методическая деятельность/Публикации/', 'jpeg');
    const pck = getPhotosUrl(3, '/public/Методическая деятельность/Руководство ПЦК/', 'jpeg');





    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 50,
        cssEase: "linear"
    };



    return (
        <div className=" bg-blue" id="methodical-activity">
            <div className="container max-w-7xl mx-auto p-4">
                <p className="text-F3F4F6 mb-2 font-bold text-4xl text-center">Методическая <span className="text-yellow ">Деятельность</span></p>
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">НПКонференции, семинары, выступления</p>
                <Carousel photos={speechesNPKSeminars} settings={settings} />
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Открытые мероприятия</p>
                <Carousel photos={openLessons} settings={settings} />
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Представление пед.опыт на сайтах</p>
                <Carousel photos={experience} settings={settings} />
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Проф.конкурсы</p>
                <Carousel photos={profContest} settings={settings} />
                <iframe src="https://drive.google.com/file/d/1xiV3DnxUUo4uSuDossQJCtmMfAzH7ebR/preview" width="100%" height="700" allow="autoplay" className="items-center"></iframe>
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Публикации</p>
                <Carousel photos={publications} settings={settings} />
                <Slider {...settings}>
                    <iframe src="https://drive.google.com/file/d/1FRmHNDKMK2FqfKM87KPHYtEKCc5Hxbfk/preview" height="480" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1HIEMEp2FVTw90y9_lfNpTujPOPssLDk5/preview" height="480" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1fVoQ3H5Rh4VVDf8_5iLmKgyTBu63q2Vs/preview" height="480" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1LtmdM_GcmkohZD0hKH2DJTJL3C6k1TQP/preview" height="480" allow="autoplay"></iframe>
                </Slider>
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Руководство ПЦК</p>
                <Carousel photos={pck} settings={settings} />
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Участие в деятельности экспертных комиссий</p>
                <Slider className="mb-5" {...settings}>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1A4c73ZrEpSKUistxuaOBXeLDnRg2CzM7/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1mLghsBZm31ChTouRVS7gVZYxiuJkGZbl/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1Cy7-WmCvt3hlVfZVjm9Qv4dtMtQmr_Yw/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/15xvLuG_37fx0be4MwGeXXTFh_ThiL4iK/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1nLdR1SIESGI40WgsGAh4hbFoQpu_tDuX/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1NWQy5QogJhFiQFMvJfRaerFEbYX-H9Q3/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1cctP50iEL72bYPZNbk6ArHZSePswEvas/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1v8FYpi6jQGFM7pSb0njtErr6O-hWtAEN/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/18n6A4nZr7Xzj4R6vZSJX2s4-JtLz0JaL/preview" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="">
                        <iframe src="https://drive.google.com/file/d/1VsrqHZqbJcXMUwF0XMztFbb54wQqIG62/preview" height="480" allow="autoplay"></iframe>
                    </div>
                </Slider>
                <div className="flex">
                    <img className="w-1/2" src="/public/Методическая деятельность/Участие в деятельности экспертных комиссий, экспериментальная площадка/1.jpeg" alt="" />
                    <img className="w-1/2" src="/public/Методическая деятельность/Участие в деятельности экспертных комиссий, экспериментальная площадка/2.jpeg" alt="" />
                </div>
            </div>

        </div>
    )
}