// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Schedule = () => {
//   const [activeTab, setActiveTab] = useState("International");

//   const tabData = {
//     International: [
//       {
//         date: "THU, DEC 26 2024",
//         matches: [
//           {
//             series: "Pakistan tour of South Africa, 2024-25",
//             match: "South Africa vs Pakistan, 1st Test, Day 1",
//             venue: "SuperSport Park, Centurion",
//             time: "1:30 PM / 8:00 AM GMT / 10:00 AM Local",
//           },
//           {
//             series: "Afghanistan tour of Zimbabwe, 2024-25",
//             match: "Zimbabwe vs Afghanistan, 1st Test, Day 1",
//             venue: "Queens Sports Club, Bulawayo",
//             time: "1:30 PM / 8:00 AM GMT / 10:00 AM Local",
//           },
//           {
//             series: "India tour of Australia, 2024-25",
//             match: "Australia vs India, 4th Test, Day 1",
//             venue: "Melbourne Cricket Ground, Melbourne",
//             time: "5:00 AM / 11:30 PM GMT / 10:30 AM Local",
//           },
//         ],
//       },
//       {
//         date: "FRI, DEC 27 2024",
//         matches: [
//           {
//             series: "Pakistan tour of South Africa, 2024-25",
//             match: "South Africa vs Pakistan, 1st Test, Day 2",
//             venue: "SuperSport Park, Centurion",
//             time: "1:30 PM / 8:00 AM GMT / 10:00 AM Local",
//           },
//           {
//             series: "Afghanistan tour of Zimbabwe, 2024-25",
//             match: "Zimbabwe vs Afghanistan, 1st Test, Day 2",
//             venue: "Queens Sports Club, Bulawayo",
//             time: "1:30 PM / 8:00 AM GMT / 10:00 AM Local",
//           },
//           {
//             series: "India tour of Australia, 2024-25",
//             match: "Australia vs India, 4th Test, Day 2",
//             venue: "Melbourne Cricket Ground, Melbourne",
//             time: "5:00 AM / 11:30 PM GMT / 10:30 AM Local",
//           },
//         ],
//       },
//     ],
//     League: [],
//     Domestic: [],
//     Women: [],
//   };

//   return (
//     <div className="container mt-5">
//       {/* Tabs */}
//       <div className="btn-group mb-4" role="group">
//         {Object.keys(tabData).map((tab) => (
//           <button
//             key={tab}
//             className={`btn ${
//               activeTab === tab ? "btn-warning" : "btn-outline-secondary"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       {tabData[activeTab].length === 0 ? (
//         <p className="text-muted">No matches available.</p>
//       ) : (
//         tabData[activeTab].map((day, index) => (
//           <div key={index} className="mb-4">
//             <h5 className="bg-light p-2">{day.date}</h5>
//             {day.matches.map((match, idx) => (
//             //   <div key={idx} className="border-bottom py-3">
//             //     <p className="mb-1">
//             //       <strong>{match.series}</strong>
//             //     </p>
//             //     <p className="mb-1">{match.match}</p>
//             //     <p className="mb-1 text-muted">{match.venue}</p>
//             //     <p className="mb-0 text-muted">{match.time}</p>
//             //   </div>
// // --------
// <table class="table table-striped">
// <thead>
//   <tr>
//     <th scope="col">{match.series}</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>

//     <td>{match.match}</td>
//     <td>{match.match}</td>
//     <td>@{match.match}</td>
//   </tr>

// </tbody>
// </table>
//             ))}
//           </div>

//         ))
//       )}
//     </div>
//   );
// };

// export default Schedule;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetsheduleDataAPI } from "../../APIs/api";
import moment from "moment";

const Schedule = () => {
  const [Schedule, setSchedule] = useState();
  const [activeTab, setActiveTab] = useState("international");

  const GetScheduleData = async (payload) => {
    try {
      const response = await GetsheduleDataAPI(payload);
      setSchedule(response?.matchScheduleMap);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetScheduleData("international");
  }, []);

  const handleTab = (tab) => {
    setActiveTab(tab);
    GetScheduleData(tab);
  };

  let Tabs = ["international", "league", "domestic", "women"];

  return (
    <div className="container-fluid schedule-section">

    <div className="container">
      {/* Tabs */}
      {/* <div className="btn-group mb-4" role="group">
        {Tabs?.map((tab) => (
          <button
            key={tab}
            className={`btn ${
              activeTab === tab ? "btn-warning" : "btn-outline-secondary"
            }`}
            onClick={() => handleTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div> */}
      <ul className="nav nav-tabs mb-4 pt-3">
        {Tabs?.map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTab(tab)}
            >
              {tab?.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      {Schedule?.length === 0 ? (
        <p className="text-muted">No matches available.</p>
      ) : (
        Schedule?.map((schdl, index) => {
          if (schdl?.scheduleAdWrapper) {
            return [schdl?.scheduleAdWrapper]?.map((item, itemIndex) => (
              <div className="schedule-box mb-4 p-3 bg-white" key={itemIndex}>
                <h5 className="schedule-box-heading text-white p-2">{item?.date}</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Series</th>
                      <th scope="col">Match</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.matchScheduleList?.map((match, matchIndex) =>
                      match.matchInfo.map((matchDetail) => (
                        <tr key={matchDetail?.matchId}>
                          <th scope="row">{matchIndex + 1}</th>
                          <td>{match.seriesName}</td>
                          <td>
                            <div>{matchDetail?.matchDesc}</div>
                            <div>
                              {matchDetail?.venueInfo?.ground},{" "}
                              {matchDetail?.venueInfo?.city},{" "}
                              {matchDetail?.venueInfo?.country}
                            </div>
                          </td>
                          <td>
                            {moment(matchDetail?.startDt)?.format("LT")}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            ));
          }
          return null;
        })
      )}
    </div>
    </div>
  );
};

export default Schedule;
