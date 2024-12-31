import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GetTeamsDetailsAPI } from "../../APIs/api";

const TeamDetails = () => {
  const [TeamsDtl, setTeamsDtl] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const FetchTeamsDetails = async () => {
    try {
      const response = await GetTeamsDetailsAPI(params?.id);
      setTeamsDtl(response);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchTeamsDetails();
  }, []);

  return (
    <div className="container py-4">
      <div className="mb-4">
        <div className="row g-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="col-lg-6">
                  <div className="card">
                    <div className="card-body shadow py-2 d-flex align-items-center">
                      <Skeleton
                        circle
                        height={50}
                        width={50}
                        className="me-3"
                      />
                      <Skeleton height={20} width={100} />
                    </div>
                  </div>
                </div>
              ))
            : TeamsDtl?.map((player, index) =>
                player?.id ? (
                  <div key={index} className="col-lg-6 team-details">
                    <div className="card">
                      <div className="card-body shadow py-2 d-flex align-items-center">
                        <img
                          src={player?.image}
                          alt={player?.name}
                          className="rounded me-3"
                          style={{ height: "50px", width: "50px", objectFit: "cover" }}
                        />
                        <h5 className="card-title mb-0">{player?.name}</h5>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h2
                    key={index}
                    className="schedule-box-heading rounded-3 text-white shadow p-2 mb-3"
                  >
                    {player?.name}
                  </h2>
                )
              )}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
