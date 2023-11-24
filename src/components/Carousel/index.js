import "./carousel.css";
import Slider from "react-slick";

function Carousel({ children }) {
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide: true,        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return(
        <div>
            <Slider {...settings} >
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;