import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { GetTeamsDetailsAPI } from "../../APIs/api";

const TeamDetails = () => {
  const [TeamsDtl, setTeamsDtl] = useState();

  const params = useParams();

  const FetchTeamsDetails = async () => {
    try {
      const response = await GetTeamsDetailsAPI(params?.id);
      console.log("response: ", response);
      setTeamsDtl(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchTeamsDetails();
  }, []);

  return (
    <div className="container py-4">
      <div className="mb-4">
          <div className="row g-3">
        {TeamsDtl?.map((player, index) =>
          player?.id ? (
              <div key={index} className=" col-lg-6 team-details">
                <div className="card">
                  <div className="card-body shadow py-2 d-flex align-items-center">
                    <img
                      src={player?.image}
                      alt={player?.name}
                      className="rounded me-3"
           
                    />
                    <h5 className="card-title mb-0">{player?.name}</h5>
                  </div>
                </div>
              </div>
          ) : (
              <h2 className="schedule-box-heading rounded-3 text-white shadow p-2 mb-3">{player?.name}</h2>
            )
        )}
        </div>
      </div>

      {/* <div>
        <h2 className="bg-light p-2 mb-3">ALL ROUNDER</h2>
        <div className="row g-3">
          {allRounders.map((player, index) => (
            <div key={index} className="col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="rounded me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="card-title mb-0">{player.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default TeamDetails;
