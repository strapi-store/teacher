import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export function Carousel({photos, settings}) {

    return (
        <div className="container max-w-7xl mx-auto p-4">
            <Slider {...settings}>
                {
                    photos.map((item) =>
                        <div key={item}>
                            <img className="" src={item} alt="" />
                        </div>
                    )
                }
            </Slider>
        </div>
    );
}
