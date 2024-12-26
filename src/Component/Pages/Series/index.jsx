import React, { useEffect, useState } from "react";
import moment from "moment";
import { GetSeriesDataAPI } from "../../APIs/api";

const Series = () => {
  const [Series, setSeries] = useState();
  const [activeTab, setActiveTab] = useState("international");

  const GetSeriesData = async (payload) => {
    try {
      const response = await GetSeriesDataAPI(payload);
      setSeries(response?.seriesMapProto);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetSeriesData("international");
  }, []);

  const handleTab = (tab) => {
    setActiveTab(tab);
    GetSeriesData(tab);
  };

  let Tabs = ["international", "league", "domestic", "women"];

  return (
    <div className="container-fluid schedule-section">
      <div className="container">
        <div className="text-center mb-4 pt-3">
          <span className="text-white bg fs-3 rounded-2 px-3 py-2">
            Upcoming Series
          </span>
        </div>
        <ul className="nav nav-tabs mb-4">
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

        <div>
          {Series?.length > 0 ? (
            Series?.map((item, index) => (
              <div key={index} className="row  p-2 border rounded my-3 schedule-box bg-white">
                <div className={`col-lg-3 d-flex align-items-center`}>
                  <h3 className="font-weight-bold">{item?.date}</h3>
                </div>
                <div className="col-lg-9">
                  <ul
                    className={`list-group  ${index % 2 == 0 ? "bg-light" : ""}`}
                  >
                    {item.series.map((series, idx) => (
                      <li key={idx} className="list-group-item">
                        <div className="font-weight-semibold">
                          {series?.name}
                        </div>
                        <div className="text-muted">
                          {moment(JSON?.parse(series?.startDt)).format(
                            "DD/MM/YY"
                          )}{" "}
                          {moment(JSON?.parse(series?.endDt)).format(
                            "DD/MM/YY"
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No data available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Series;
