import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Ind from "../../asset/img/icon/IND.png";
import AUS from "../../asset/img/icon/AUS.png";
import VS from "../../asset/img/icon/VS.webp";
import { GetMatchCardAPI, GetNewsAPI } from "../../APIs/api";
import moment from "moment/moment";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DemoCard = () => {
    const [Matches, setMatches] = useState();
    let colr = ["#3ecd5e", "#f9b234", "#e44002"];
    var settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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

    // useEffect(() => {
    //     const getCardApi = async () => {
    //         // const news = await GetNewsAPI();
    //         let response = await GetMatchCardAPI();

    //         setMatches(response?.matchDataLive);
    //         console.log("response?.matchDataLive: ", response?.matchDataLive);
    //     };
    //     getCardApi();
    // }, []);
    // let colorPattern = [0, 1, 2];
    return (
        <>
            <div className="background-img">
                <div className="d-flex align-items-end">
                    <div className="slider-container overflow-hidden">
                        <Slider {...settings}>
                          <div className="bg-danger p-5">1</div>
                          <div className="bg-danger p-5">2</div>
                          <div className="bg-danger p-5">3</div>
                          <div className="bg-danger p-5">4</div>
                          <div className="bg-danger p-5">5</div>
                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}
export default DemoCard;