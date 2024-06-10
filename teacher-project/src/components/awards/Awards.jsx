import {getPhotosUrl} from "../../utils";
import {Carousel} from "../carousel/Carousel";

const awards = getPhotosUrl(13, '/public/Награды/', 'jpeg');


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};




export function Awards() {
    return (
        <div className=" bg-blue" id="awards">
            <div className="container max-w-7xl mx-auto p-4">
                <p className="text-F3F4F6 mb-2 font-bold text-4xl text-center">Грамоты и <span className="text-yellow ">Благодарности</span></p>
                <Carousel photos={awards} settings={settings} />
            </div>
        </div>
    )
}