import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ind from "../../asset/img/icon/IND.png";
import AUS from "../../asset/img/icon/AUS.png";
import VS from "../../asset/img/icon/VS.webp";
import { GetMatchCardAPI, GetNewsAPI } from "../../APIs/api";
import moment from "moment/moment";
import { data } from "react-router-dom";

const courses = [
  {
    day: "Today",
    date: "21-12-2024",
    location: "Mumbai, India",
    status: "Live",
    championship: "ICC World Championship",
    team1: "India",
    score1: "120/1",
    teamimg: Ind,
    team2: "Australia",
    score2: "100/1",
    teamimg2: AUS,
    vs: VS,
    bgColor: "#f9b234",
  },
  {
    day: "Friday",
    date: "25-12-2024",
    location: "Pune, India",
    status: "UpComing",
    championship: "ICC World Championship",
    team1: "India",
    score1: "120/1",
    teamimg: Ind,
    team2: "Australia",
    score2: "100/1",
    teamimg2: AUS,
    vs: VS,
    bgColor: "#3ecd5e",
  },
  {
    day: "Friday",
    date: "25-12-2024",
    location: "Pune, India",
    status: "UpComing",
    championship: "ICC World Championship",
    team1: "India",
    score1: "120/1",
    teamimg: Ind,
    team2: "Australia",
    score2: "100/1",
    teamimg2: AUS,
    vs: VS,
    bgColor: "#e44002",
  },
];

let colr = ["#3ecd5e","#f9b234", "#e44002"];

const CourseSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    prevArrow: (
      <div className="slick-prev">
        <FaChevronLeft />
      </div>
    ), // Ensure icons are rendered
    nextArrow: (
      <div className="slick-next">
        <FaChevronRight />
      </div>
    ),
  };

  const [Matches, setMatches] = useState();

  // console.log('response?.matchDataLive: ', response?.matchDataLive[0]?.matchHeader?.matchCompleteTimestamp moment.calend);
  // console.log('response?.matchDataLive: ', response?.matchDataLive[0]?.matchHeader?.matchCompleteTimestamp moment.dd-mm-yyyy);
  // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1);
  // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1);
  // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1);matchFormat matchState
  // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1); matchState
  // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1); runs ,scoreDetails ,scoreDetails
  // console.log('response: ', response?.matchDataLive[0]); matchHeader status

  useEffect(() => {
    const getCardApi = async () => {
      const news = await GetNewsAPI();
      let response = await GetMatchCardAPI();

      setMatches(response?.matchDataLive);
      console.log("response?.matchDataLive: ", response?.matchDataLive);
    };
    getCardApi();
  }, []);
  let colorPattern = [0, 1, 2]; // This denotes 1st color, 2nd color, 3rd color



  return (
    <>
      <div className="background-img">
        <div
          className="text-center fs-1 text-white"
          style={{
            height: "45vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         Are You Ready For Upcoming Match
        </div>

        <div className="d-flex align-items-end" style={{ height: "45vh" }}>
          <div className="slider-container">
            <Slider {...settings}>
              {Matches?.map((course, index) => {
            const colorIndex = colorPattern[index % colorPattern.length];

            // Use the color from the colr array
            const color = colr[colorIndex];
          
                return (
                  <div className="ag-courses_item" key={index}>
                    <div className="ag-courses-item_link">
                      <div
                        className="ag-courses-item_bg"
                        style={{
                          backgroundColor: color,
                        }}
                      ></div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="match-date">
                          <div className="text-center fw-bold">
                            {moment(
                              course?.matchHeader?.matchCompleteTimestamp
                            )?.calendar()}
                          </div>
                          <div>
                            {moment(
                              course?.matchHeader?.matchCompleteTimestamp
                            )?.format("DD/MM/YY")}
                          </div>
                        </div>
                        <div className="match-location">{course?.location}</div>
                        <div
                          className="live-indicator"
                          style={{
                            color:
                              course?.matchState === "In Progress"
                                ? "red"
                                : course?.matchState === "Complete"
                                ? "green"
                                : "green",
                          }}
                        >
                          <span
                            className="live-icon"
                            style={{
                              backgroundColor:
                                course?.matchState === "In Progress"
                                  ? "red"
                                  : course?.matchState === "Complete"
                                  ? "green"
                                  : "transparent",
                            }}
                          ></span>
                          {course?.matchState == "Complete" ? "Result" : "Live"}
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-evenly mt-4">
                        <div className="team1">
                          <div className="team-logo">
                            {/* <img
                src={course?.matchHeader?.team1?.logo}
                alt={`${course?.matchHeader?.team1?.name} logo`}
              /> */}
                          </div>
                          <div className="team-name">
                            {course?.matchHeader?.team1?.name}
                          </div>
                          <div className="score">
                            {course?.scoreCard?.[0]?.scoreDetails?.runs}
                          </div>
                        </div>
                        <div className="vs-icon">
                          V/S
                          {/* <img src={course?.vs} alt="VS icon" /> */}
                        </div>
                        <div className="team2">
                          <div className="team-logo">
                            {/* <img
                src={course?.matchHeader?.team2?.logo}
                alt={`${course?.matchHeader?.team2?.name} logo`}
              /> */}
                          </div>
                          <div className="team-name">
                            {course?.matchHeader?.team2?.name}
                          </div>
                          <div className="score">
                            {course?.scoreCard?.[1]?.scoreDetails?.runs}
                          </div>
                        </div>
                      </div>
                      <div className="match-footer">
                        <div className="text-center">
                          {course?.matchHeader?.seriesName}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSlider;
