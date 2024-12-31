// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import moment from "moment";
// import { GetMatchCardAPI } from "../../APIs/api";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const DemoCard = () => {
//     const [Matches, setMatches] = useState([]);
//     const colr = ["#3ecd5e", "#f9b234", "#e44002"];
//     const colorPattern = [0, 1, 2];
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ],
//         prevArrow: (
//             <div className="slick-prev">
//                 <FaChevronLeft />
//             </div>
//         ), // Ensure icons are rendered
//         nextArrow: (
//             <div className="slick-next">
//                 <FaChevronRight />
//             </div>
//         ),
//     };

//     useEffect(() => {
//         const getCardApi = async () => {
//             try {
//                 const response = await GetMatchCardAPI();
//                 console.log("Fetched Data: ", response);
//                 setMatches(response?.matchDataLive || []);
//             } catch (error) {
//                 console.error("Error fetching match data:", error);
//             }
//         };
//         getCardApi();
//     }, []);

//     return (
//         <div className="background-img">
//             <div className="h-50 d-flex align-items-center justify-content-center">
//                 <span
//                     className="home-text text-center rounded-3 fs-1 fw-bold text-white px-4"
//                     style={{

//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     Are You Ready For Upcoming Match
//                 </span>
//             </div>

//             <div className="d-flex justify-content-center align-items-center">
//                 <div className="slider-container overflow-hidden">
//                     {Matches.length > 0 ? (
//                         <Slider {...settings}>
//                             {Matches.map((course, index) => {
//                                 const colorIndex = colorPattern[index % colorPattern.length];
//                                 const color = colr[colorIndex];

//                                 return (
//                                     <div className="ag-courses_item" key={index}>
//                                         <div className="ag-courses-item_link">
//                                             <div className="ag-courses-item_bg" style={{ backgroundColor: color }}></div>
//                                             <div className="d-flex justify-content-between align-items-center">
//                                                 <div className="match-date z-2">
//                                                     <div className="text-center fw-bold">{moment(course?.matchHeader?.matchCompleteTimestamp)?.calendar()}</div>
//                                                     <div>{moment(course?.matchHeader?.matchCompleteTimestamp)?.format("DD/MM/YY")}</div>
//                                                 </div>
//                                                 <div className="match-location">{course?.location}</div>
//                                                 <div className="live-indicator" style={{ color: course?.matchState === "In Progress" ? "red" : "green" }}>
//                                                     <span className="live-icon" style={{ backgroundColor: course?.matchState === "In Progress" ? "red" : "green" }}></span>
//                                                     {course?.matchState === "Complete" ? "Result" : "Live"}
//                                                 </div>
//                                             </div>
//                                             <div className="d-flex align-items-center justify-content-evenly mt-4">
//                                                 <div className="team1">
//                                                     <div className="team-name">{course?.matchHeader?.team1?.name}</div>
//                                                     <div className="score">{course?.scoreCard?.[0]?.scoreDetails?.runs}</div>
//                                                 </div>
//                                                 <div className="vs-icon">V/S</div>
//                                                 <div className="team2">
//                                                     <div className="team-name">{course?.matchHeader?.team2?.name}</div>
//                                                     <div className="score">{course?.scoreCard?.[1]?.scoreDetails?.runs}</div>
//                                                 </div>
//                                             </div>
//                                             <div className="match-footer">
//                                                 <div className="text-center">{course?.matchHeader?.seriesName}</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </Slider>
//                     ) : (
//                         <div className="text-center ">
//                             <div className="text-center text-white fs-1 home-text rounded px-3 fw-bold">Loading...</div>
//                         </div>

//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DemoCard;



















// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Ind from "../../asset/img/icon/IND.png";
// import AUS from "../../asset/img/icon/AUS.png";
// import VS from "../../asset/img/icon/VS.webp";
// import { GetMatchCardAPI, GetNewsAPI } from "../../APIs/api";
// import moment from "moment/moment";
// import { data } from "react-router-dom";

// const courses = [
//   {
//     day: "Today",
//     date: "21-12-2024",
//     location: "Mumbai, India",
//     status: "Live",
//     championship: "ICC World Championship",
//     team1: "India",
//     score1: "120/1",
//     teamimg: Ind,
//     team2: "Australia",
//     score2: "100/1",
//     teamimg2: AUS,
//     vs: VS,
//     bgColor: "#f9b234",
//   },
//   {
//     day: "Friday",
//     date: "25-12-2024",
//     location: "Pune, India",
//     status: "UpComing",
//     championship: "ICC World Championship",
//     team1: "India",
//     score1: "120/1",
//     teamimg: Ind,
//     team2: "Australia",
//     score2: "100/1",
//     teamimg2: AUS,
//     vs: VS,
//     bgColor: "#3ecd5e",
//   },
//   {
//     day: "Friday",
//     date: "25-12-2024",
//     location: "Pune, India",
//     status: "UpComing",
//     championship: "ICC World Championship",
//     team1: "India",
//     score1: "120/1",
//     teamimg: Ind,
//     team2: "Australia",
//     score2: "100/1",
//     teamimg2: AUS,
//     vs: VS,
//     bgColor: "#e44002",
//   },
// ];

// let colr = ["#3ecd5e","#f9b234", "#e44002"];

// const CourseSlider = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 979,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 639,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//     prevArrow: (
//       <div className="slick-prev">
//         <FaChevronLeft />
//       </div>
//     ), // Ensure icons are rendered
//     nextArrow: (
//       <div className="slick-next">
//         <FaChevronRight />
//       </div>
//     ),
//   };

//   const [Matches, setMatches] = useState();

//   // console.log('response?.matchDataLive: ', response?.matchDataLive[0]?.matchHeader?.matchCompleteTimestamp moment.calend);
//   // console.log('response?.matchDataLive: ', response?.matchDataLive[0]?.matchHeader?.matchCompleteTimestamp moment.dd-mm-yyyy);
//   // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1);
//   // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1);
//   // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1);matchFormat matchState
//   // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1); matchState
//   // console.log('response: ', response?.matchDataLive[0]?.matchHeader?.team1); runs ,scoreDetails ,scoreDetails
//   // console.log('response: ', response?.matchDataLive[0]); matchHeader status

//   useEffect(() => {
//     const getCardApi = async () => {
//       const news = await GetNewsAPI();
//       let response = await GetMatchCardAPI();

//       setMatches(response?.matchDataLive);
//       console.log("response?.matchDataLive: ", response?.matchDataLive);
//     };
//     getCardApi();
//   }, []);
//   let colorPattern = [0, 1, 2]; // This denotes 1st color, 2nd color, 3rd color


//   return (
//     <>
//       <div className="background-img">
//         <span
//           className="text-center fs-1 fw-bold text-white px-4"
//           style={{
//             height: "40vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//          Are You Ready For Upcoming Match
//         </span>

//         <div className="d-flex align-items-end" style={{ height: "45vh" }}>
//           <div className="slider-container">
//             <Slider {...settings}>
//               {Matches?.map((course, index) => {
//             const colorIndex = colorPattern[index % colorPattern.length];

//             // Use the color from the colr array
//             const color = colr[colorIndex];

//                 return (
//                   <div className="ag-courses_item" key={index}>
//                     <div className="ag-courses-item_link">
//                       <div
//                         className="ag-courses-item_bg"
//                         style={{
//                           backgroundColor: color,
//                         }}
//                       ></div>
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="match-date">
//                           <div className="text-center fw-bold">
//                             {moment(
//                               course?.matchHeader?.matchCompleteTimestamp
//                             )?.calendar()}
//                           </div>
//                           <div>
//                             {moment(
//                               course?.matchHeader?.matchCompleteTimestamp
//                             )?.format("DD/MM/YY")}
//                           </div>
//                         </div>
//                         <div className="match-location">{course?.location}</div>
//                         <div
//                           className="live-indicator"
//                           style={{
//                             color:
//                               course?.matchState === "In Progress"
//                                 ? "red"
//                                 : course?.matchState === "Complete"
//                                 ? "green"
//                                 : "green",
//                           }}
//                         >
//                           <span
//                             className="live-icon"
//                             style={{
//                               backgroundColor:
//                                 course?.matchState === "In Progress"
//                                   ? "red"
//                                   : course?.matchState === "Complete"
//                                   ? "green"
//                                   : "transparent",
//                             }}
//                           ></span>
//                           {course?.matchState == "Complete" ? "Result" : "Live"}
//                         </div>
//                       </div>

//                       <div className="d-flex align-items-center justify-content-evenly mt-4">
//                         <div className="team1">
//                           <div className="team-logo">
//                             {/* <img
//                 src={course?.matchHeader?.team1?.logo}
//                 alt={`${course?.matchHeader?.team1?.name} logo`}
//               /> */}
//                           </div>
//                           <div className="team-name">
//                             {course?.matchHeader?.team1?.name}
//                           </div>
//                           <div className="score">
//                             {course?.scoreCard?.[0]?.scoreDetails?.runs}
//                           </div>
//                         </div>
//                         <div className="vs-icon">
//                           V/S
//                           {/* <img src={course?.vs} alt="VS icon" /> */}
//                         </div>
//                         <div className="team2">
//                           <div className="team-logo">
//                             {/* <img
//                 src={course?.matchHeader?.team2?.logo}
//                 alt={`${course?.matchHeader?.team2?.name} logo`}
//               /> */}
//                           </div>
//                           <div className="team-name">
//                             {course?.matchHeader?.team2?.name}
//                           </div>
//                           <div className="score">
//                             {course?.scoreCard?.[1]?.scoreDetails?.runs}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="match-footer">
//                         <div className="text-center">
//                           {course?.matchHeader?.seriesName}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseSlider;











{/* <div class="row justify-content-center">
<div class="col-lg-6 col-12 px-3 pt-2 pb-lg-2">
    <div class="shadow-sm mb-4 rounded-xl">
        <div class="dropdown-item bg-light mb-3 rounded-xl">
            <input type="checkbox" id="dropdownOne" class="d-none" />
            <label for="dropdownOne" class="btn btn-light fw-semibold w-100 text-start rounded-xl">
                What technologies do you use?
            </label>
            <div class="content
             mt-2 border p-3 rounded">
                <p>
                    We in IFT utilize technologies depending on the type of projects we are working on. 
                    The technologies on which we generally work on and have expertise in are:
                    <strong>Front-end:</strong> HTML, CSS, JavaScript and frameworks like React, Angular, or Vue.js.
                    <strong>Back-end:</strong> Python, Java, C#, PHP, Node.js.
                    <strong>Databases:</strong> MySQL, Oracle, MongoDB, etc.
                    <strong>Version Control:</strong> Git tools.
                    <strong>Project Management Tools:</strong> Jira and Asana.
                </p>
            </div>
        </div>

        <div class="dropdown-item bg-light mb-3 rounded-xl">
            <input type="checkbox" id="dropdownTwo" class="d-none" />
            <label for="dropdownTwo" class="btn btn-light fw-semibold w-100 text-start rounded-xl">
                What qualifications do you need to trade stocks?
            </label>
            <div class="content mt-2 border p-3 rounded">
                <p>
                    Anyone can safely start investing/trading in stocks, but there is always a risk of losing money. So, it's important to approach it with proper research, education, and a long-term perspective. Hence, it's better to have a degree in relevant subjects like management, business, economy, or finance.
                </p>
            </div>
        </div>
    </div>
</div>
</div> */}











{/* <div class="dropdown-item bg-light mb-3 rounded">
    <input type="checkbox" id="dropdownOne" class="d-none" />
    <label for="dropdownOne" class="btn bg-sport text-white fw-semibold w-100 text-start rounded-xl">
        <h5 className="text-white">{ScoreCard?.status}</h5>
    </label>
    <div class="container content mt-2 border p-3 rounded">
        <h1 className="text-center mb-4">Batsmen Data</h1>
        <h3>
            {ScoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName} :{" "}
            {ScoreCard?.scoreCard[0]?.inningsId} Innings{" "}
            {ScoreCard?.scoreCard[1]?.scoreDetails?.runs}-
            {ScoreCard?.scoreCard[1]?.scoreDetails?.wickets}{" "}
        </h3>
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table-bg">
                    <tr>
                        <th>Batsman Name</th>
                        <th>Runs</th>
                        <th>Balls</th>
                        <th>Fours</th>
                        <th>Sixes</th>
                        <th>Strike Rate</th>
                        <th>Out Description</th>
                        <th>Is Captain</th>
                        <th>Is Keeper</th>
                    </tr>
                </thead>
                <tbody>
                    {ScoreCard ? (
                        <>
                            {Object?.values(
                                ScoreCard?.scoreCard[0]?.batTeamDetails
                                    ?.batsmenData || {}
                            )?.map((bat, index) => (
                                <tr key={index}>
                                    <td>{bat?.batName}</td>
                                    <td>{bat?.runs}</td>
                                    <td>{bat?.balls}</td>
                                    <td>{bat?.fours}</td>
                                    <td>{bat?.sixes}</td>
                                    <td>{bat?.strikeRate}</td>
                                    <td>{bat?.outDesc || "Not Out"}</td>
                                    <td>{bat?.isCaptain ? "Yes" : "No"}</td>
                                    <td>{bat?.isKeeper ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </tbody>
            </table>
        </div>

        {/* ------------ */}
//       