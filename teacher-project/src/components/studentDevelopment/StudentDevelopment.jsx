import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Carousel} from "../carousel/Carousel";
import {getPhotosUrl} from "../../utils";


const contestPhotos = getPhotosUrl(26, '/public/Развитие обучающихся/Конкурсы/', 'jpeg');
const conferencePhotos = getPhotosUrl(5, '/public/Развитие обучающихся/НПКонференции/', 'jpeg');
const olympiadPhotos = getPhotosUrl(30, '/public/Развитие обучающихся/Олимпиады/', 'jpeg');


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 50,
    cssEase: "linear"
};



export function StudentDevelopment() {

    return (
        <div className="bg-dark-blue" id="development">
            <div className="container max-w-7xl mx-auto p-4">
                <p className="text-F3F4F6 mb-2 font-bold text-4xl text-center">Развитие <span className="text-yellow ">Обучающихся</span></p>
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Конкурсы</p>
                <Carousel photos={contestPhotos} settings={settings} />
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">НПКонференции</p>
                <Carousel photos={conferencePhotos} settings={settings} />
                <p className="text-F3F4F6 mb-2 font-semibold text-3xl text-center">Олимпиады</p>
                <Carousel photos={olympiadPhotos} settings={settings} />
            </div>

        </div>
    )
}