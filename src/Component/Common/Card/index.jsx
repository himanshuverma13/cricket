import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import { GetMatchCardAPI } from "../../APIs/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const [Matches, setMatches] = useState([]);
  const colr = ["#3ecd5e", "#f9b234", "#e44002"];
  const colorPattern = [0, 1, 2];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // prevArrow: (
    //   <div className="slick-prev">
    //     <FaChevronLeft />
    //   </div>
    // ), // Ensure icons are rendered
    // nextArrow: (
    //   <div className="slick-next">
    //     <FaChevronRight />
    //   </div>
    // ),
  };

  useEffect(() => {
    const getCardApi = async () => {
      try {
        const response = await GetMatchCardAPI();
        console.log("Fetched Data: ", response);
        setMatches(response?.matchDataLive || []);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };
    getCardApi();
  }, []);

  return (
    <div className="background-img">
      <div className="h-50 d-flex align-items-center justify-content-center">
        <span
          className="home-text text-center rounded-3 fs-1 fw-bold text-white px-4"
          style={{

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Are You Ready For Upcoming Match
        </span>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="slider-container overflow-hidden">
          {Matches.length > 0 ? (
            <Slider {...settings}>
              {Matches.map((course, index) => {
                const colorIndex = colorPattern[index % colorPattern.length];
                const color = colr[colorIndex];

                return (
                  <Link to="/livescore" className="text-decoration-none text-dark">
                  <div className="ag-courses_item" key={index}>
                    <div className="ag-courses-item_link">
                      <div className="ag-courses-item_bg" style={{ backgroundColor: color }}></div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="match-date z-2">
                          <div className="text-center fw-bold">{moment(course?.matchHeader?.matchCompleteTimestamp)?.calendar()}</div>
                          <div>{moment(course?.matchHeader?.matchCompleteTimestamp)?.format("DD/MM/YY")}</div>
                        </div>
                        <div className="match-location">{course?.location}</div>
                        <div className="live-indicator" style={{ color: course?.matchState === "In Progress" ? "red" : "green" }}>
                          <span className="live-icon" style={{ backgroundColor: course?.matchState === "In Progress" ? "red" : "green" }}></span>
                          {course?.matchState === "Complete" ? "Result" : "Live"}
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-evenly mt-4">
                        <div className="team1">
                          <div className="team-name">{course?.matchHeader?.team1?.name}</div>
                          <div className="score">{course?.scoreCard?.[0]?.scoreDetails?.runs}</div>
                        </div>
                        <div className="vs-icon">V/S</div>
                        <div className="team2">
                          <div className="team-name">{course?.matchHeader?.team2?.name}</div>
                          <div className="score">{course?.scoreCard?.[1]?.scoreDetails?.runs}</div>
                        </div>
                      </div>
                      <div className="match-footer">
                        <div className="text-center">{course?.matchHeader?.seriesName}</div>
                      </div>
                    </div>
                  </div>
              </Link>
                );
              })}
            </Slider>
          ) : (
            <div className="text-center ">
              <div className="text-center text-white fs-1 home-text rounded px-3 fw-bold">Loading...</div>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;