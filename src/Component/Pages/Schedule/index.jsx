
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetsheduleDataAPI } from "../../APIs/api";
import moment from "moment";
import Footer from "../../Common/Footer";

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
    <>
      <div className="container-fluid schedule-section min-vh-100">

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
                  className={`nav-link fw-bold ${activeTab === tab ? "active" : ""}`}
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
                  <div className="schedule-box rounded-2 mb-4 p-3 bg-white" key={itemIndex}>
                    <h5 className="schedule-box-heading rounded-2 text-white p-2">{item?.date}</h5>
                    <div className="table-responsive">
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
                                <td className="text-nowrap">{match.seriesName}</td>
                                <td className="text-nowrap">
                                  <div>{matchDetail?.matchDesc}</div>
                                  <div>
                                    {matchDetail?.venueInfo?.ground},{" "}
                                    {matchDetail?.venueInfo?.city},{" "}
                                    {matchDetail?.venueInfo?.country}
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  {moment(matchDetail?.startDt)?.format("LT")}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ));
              }
              return null;
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
