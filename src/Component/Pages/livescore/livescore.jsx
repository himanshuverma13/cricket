import React, { useEffect, useState } from "react";

// Images
import Logo from "../../asset/img/icon/IND.png";
import { useParams } from "react-router-dom";
import {
  GetCommentariesAPI,
  GetMatchDetailsAPI,
  GetScoreCardDataAPI,
  GetSquadsDataAPI,
} from "../../APIs/api";
import moment from "moment/moment";

const LiveScore = () => {
  const [activeTab, setActiveTab] = useState("commentry");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  let Tabs = ["commentry", "scorecard", "squads", "match facts", "venue info"];

  const [Commentries, setCommentries] = useState();
  const [ScoreCard, setScoreCard] = useState();
  const [MatchInfo, setMatchInfo] = useState();
  const [Squad1, setSquad1] = useState();
  const [Squad2, setSquad2] = useState();

  const params = useParams();

  let getTeamsImg =JSON?.parse(localStorage.getItem('TeamsImg') ?? '[]')

  const FetchMatchDetails = async () => {
    try {
      const response = await GetCommentariesAPI(params?.id);
      const scoreCardData = await GetScoreCardDataAPI(params?.id);
      const matchInfo = await GetMatchDetailsAPI(params?.id);

      setCommentries(response);
      setScoreCard(scoreCardData);
      setMatchInfo(matchInfo);
      FetchSquadDetails(
        matchInfo?.matchInfo?.team1?.id,
        matchInfo?.matchInfo?.team2?.id
      );
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const FetchSquadDetails = async (team1, team2) => {
    try {
      const responseTeam1 = await GetSquadsDataAPI(params?.id, team1);
      const responseTeam2 = await GetSquadsDataAPI(params?.id, team2);
      setSquad1(responseTeam1);
      setSquad2(responseTeam2);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchMatchDetails();
  }, []);


  return (
    <>
      <div className="container">
        <section className="tabs-wrapper py-5">
          {/* Tabs start */}
          <ul className="nav nav-tabs mb-4">
            {Tabs?.map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link fw-bold ${
                    activeTab === tab ? "active" : ""
                  }`}
                  onClick={() => handleTab(tab)}
                >
                  {tab?.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div
              class={`tab-pane fade border bg-white px-2 shadow ${
                activeTab === "commentry" ? "show active" : ""
              }`}
              id="commentry"
              role="tabpanel"
              aria-labelledby="commentry-tab"
            >
              <div className="tab p-3">
                <div className=" p-2 rounded-2 mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <img
                        src={getTeamsImg?.a}
                        className="livescore-img me-3 rounded-circle"
                        alt="Loading"
                      />
                      <div className="fw-bold w-100 me-4">
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[0]?.batTeamName
                        }
                      </div>
                    </div>
                    <div className="text-dark fs-5 fw-bold me-2">
                      {
                        Commentries?.miniscore?.matchScoreDetails
                          ?.inningsScoreList[0]?.score
                      }
                      -
                      {
                        Commentries?.miniscore?.matchScoreDetails
                          ?.inningsScoreList[0]?.wickets
                      }
                    </div>
                    <div>
                      (
                      {
                        Commentries?.miniscore?.matchScoreDetails
                          ?.inningsScoreList[0]?.overs
                      }
                      )
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <img
                        src={getTeamsImg?.b}
                        className="livescore-img me-3 rounded-circle"
                        alt="Loading"
                      />
                      <div className="fw-bold w-100 me-4">
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[1]?.batTeamName
                        }
                      </div>
                    </div>
                    <div className="text-dark fs-5 fw-bold me-2">
                      {
                        Commentries?.miniscore?.matchScoreDetails
                          ?.inningsScoreList[1]?.score
                      }
                      -
                      {
                        Commentries?.miniscore?.matchScoreDetails
                          ?.inningsScoreList[1]?.wickets
                      }
                    </div>

                    <div>
                      (
                      {
                        Commentries?.miniscore?.matchScoreDetails
                          ?.inningsScoreList[1]?.overs
                      }
                      )
                    </div>
                  </div>
                  <p className="text-warning fw-bold m-0 ">
                    <span>
                      {Commentries?.miniscore?.matchScoreDetails?.customStatus}
                    </span>
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    {/* Batter table */}
                    <table className="table table-responsive table-sm border border-2 border-light rounded">
                      <thead className="table-bg">
                        <tr>
                          <th scope="col" className="ps-3">
                            Batter
                          </th>
                          <th scope="col">R </th>
                          <th scope="col">B</th>
                          <th scope="col">4s</th>
                          <th scope="col">6s</th>
                          <th scope="col">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[Commentries]?.map((batter, index) => (
                          <>
                            <tr key={index}>
                              <td>
                                {batter?.miniscore?.batsmanStriker?.batName}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanStriker?.batRuns}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanStriker?.batBalls}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanStriker?.batFours}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanStriker?.batSixes}
                              </td>
                              <td>
                                {
                                  batter?.miniscore?.batsmanStriker
                                    ?.batStrikeRate
                                }
                              </td>
                            </tr>
                            <tr key={index}>
                              <td>
                                {batter?.miniscore?.batsmanNonStriker?.batName}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanNonStriker?.batRuns}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanNonStriker?.batBalls}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanNonStriker?.batFours}
                              </td>
                              <td>
                                {batter?.miniscore?.batsmanNonStriker?.batSixes}
                              </td>
                              <td>
                                {
                                  batter?.miniscore?.batsmanNonStriker
                                    ?.batStrikeRate
                                }
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>

                    {/* Bowler  table */}

                    <table className="table table-responsive table-sm border border-2 border-light rounded">
                      <thead className="table-bg">
                        <tr>
                          <th scope="col" className="ps-3">
                            Bowler
                          </th>
                          <th scope="col">O</th>
                          <th scope="col">M</th>
                          <th scope="col">R</th>
                          <th scope="col">W</th>
                          <th scope="col">ECO</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[Commentries].map((bowler, index) => (
                          <>
                            <tr key={index}>
                              <td>
                                {bowler?.miniscore?.bowlerStriker?.bowlName}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerStriker?.bowlOvs}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerStriker?.bowlMaidens}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerStriker?.bowlRuns}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerStriker?.bowlWkts}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerStriker?.bowlEcon}
                              </td>
                            </tr>
                            <tr key={index}>
                              <td>
                                {bowler?.miniscore?.bowlerNonStriker?.bowlName}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerNonStriker?.bowlOvs}
                              </td>
                              <td>
                                {
                                  bowler?.miniscore?.bowlerNonStriker
                                    ?.bowlMaidens
                                }
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerNonStriker?.bowlRuns}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerNonStriker?.bowlWkts}
                              </td>
                              <td>
                                {bowler?.miniscore?.bowlerNonStriker?.bowlEcon}
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>

                    {[Commentries].map((i, index) => (
                      <>
                        <p>
                          <span className="fw-bold">RECENT</span>{" "}
                          {i?.miniscore?.recentOvsStats}
                        </p>
                      </>
                    ))}
                  </div>
                  <div className="col-lg-4">
                    <div className="list-group">
                      <div
                        className="list-group-item bg-sport text-white fw-bolder"
                        aria-current="true"
                      >
                        The current link item
                      </div>
                      <div className="list-group-item list-group-item-action">
                        A second link item
                      </div>
                      <div className="list-group-item list-group-item-action">
                        A third link item
                      </div>
                      <div className="list-group-item list-group-item-action">
                        A fourth link item
                      </div>
                      <div
                        className="list-group-item list-group-item-action disabled"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        A disabled link item
                      </div>
                    </div>
                  </div>
                  {Commentries?.commentaryList?.map((i) => (
                    <>
                      <div className="d-flex">
                        <span className="fw-bold me-4">{i?.overNumber}</span>
                        <p>{i?.commText}</p>
                      </div>
                      <hr />
                    </>
                  ))}
                </div>
              </div>
            </div>

                        {/* ScoreCard Start */}
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'scorecard' ? 'show active' : ''}`} id="scorecard" role="tabpanel" aria-labelledby="scorecard-tab">
                            <div className="tab p-3">
                                <div className="px-2">
                                    <p className="ms-2 text-warning fw-bold pt-2 fs-4">
                                        Melbourne Renegades Innings <span>127-6 (15.5 Ov)</span>
                                    </p>
                                    <div className="dropdown-item  bg-white shadow mb-3 rounded">
                                        <input type="checkbox" id="dropdownOne" className="livecore-accordian d-none" />
                                        <label for="dropdownOne" className="btn bg-sport text-white fw-semibold w-100 text-start rounded-xl">
                                            <h5 className="text-white">{ScoreCard?.status}</h5>
                                        </label>
                                        <div className="container content mt-2 border p-3 rounded">
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
                                            <div className="container my-5">
                                                <h1 className="text-center mb-4">Bowler Data</h1>
                                                <h3>
                                                    {ScoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName} :{" "}
                                                    {ScoreCard?.scoreCard[0]?.inningsId} Innings{" "}
                                                    {ScoreCard?.scoreCard[1]?.scoreDetails?.runs}-
                                                    {ScoreCard?.scoreCard[1]?.scoreDetails?.wickets}{" "}
                                                </h3>
                                                <table className="table table-bordered table-striped">
                                                    <thead className="table-bg">
                                                        <tr>
                                                            <th>Bowler Name</th>
                                                            <th>O</th>
                                                            <th>M</th>
                                                            <th>R</th>
                                                            <th>W</th>
                                                            <th>ECO</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {ScoreCard ? (
                                                            <>
                                                                {Object?.values(
                                                                    ScoreCard?.scoreCard[0]?.bowlTeamDetails
                                                                        ?.bowlersData
                                                                )?.map((bat, index) => (
                                                                    <tr key={index}>
                                                                        <td>{bat?.bowlName}</td>
                                                                        <td>{bat?.overs}</td>
                                                                        <td>{bat?.maidens}</td>
                                                                        <td>{bat?.runs}</td>
                                                                        <td>{bat?.wickets}</td>
                                                                        <td>{bat?.economy}</td>
                                                                    </tr>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <p>Loading...</p>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dropdown-item bg-white shadow mb-3 rounded">
                                        <input type="checkbox" id="dropdownTwo" class="livecore-accordian d-none" />
                                        <label for="dropdownTwo" class="btn bg-sport text-white fw-semibold w-100 text-start rounded">
                                            What qualifications do you need to trade stocks?
                                        </label>
                                        <div class="content mt-2 border p-3 rounded">
                                            {/* ---------------- */}
                                            <div className="container my-5">
                                                <h1 className="text-center mb-4">Batsmen Data</h1>
                                                {/* <h3>{ScoreCard?.scoreCard[0]?.batTeamDetails?.batTeamName} : {ScoreCard?.scoreCard[1]?.inningsId} Innings {ScoreCard?.scoreCard[0]?.scoreDetails?.runs}-{ScoreCard?.scoreCard[0]?.scoreDetails?.wickets} </h3> */}
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
                                                                        ScoreCard?.scoreCard[1]?.batTeamDetails
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
                                            </div>

                                            <div className="container my-5">
                                                <h1 className="text-center mb-4">Bowler Data</h1>
                                                {/* <h3>{ScoreCard?.scoreCard[0]?.batTeamDetails?.batTeamName} : {ScoreCard?.scoreCard[1]?.inningsId} Innings {ScoreCard?.scoreCard[0]?.scoreDetails?.runs}-{ScoreCard?.scoreCard[0]?.scoreDetails?.wickets} </h3> */}
                                                <table className="table table-bordered table-striped">
                                                    <thead className="table-bg">
                                                        <tr>
                                                            <th>Bowler Name</th>
                                                            <th>O</th>
                                                            <th>M</th>
                                                            <th>R</th>
                                                            <th>W</th>
                                                            <th>ECO</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {ScoreCard ? (
                                                            <>
                                                                {Object?.values(
                                                                    ScoreCard?.scoreCard[1]?.bowlTeamDetails
                                                                        ?.bowlersData
                                                                )?.map((bat, index) => (
                                                                    <tr key={index}>
                                                                        <td>{bat?.bowlName}</td>
                                                                        <td>{bat?.overs}</td>
                                                                        <td>{bat?.maidens}</td>
                                                                        <td>{bat?.runs}</td>
                                                                        <td>{bat?.wickets}</td>
                                                                        <td>{bat?.economy}</td>
                                                                    </tr>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <p>Loading...</p>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

            {/* Squads Start */}
            <div
              class={`tab-pane fade border bg-white px-2 shadow ${
                activeTab === "squads" ? "show active" : ""
              }`}
              id="squads"
              role="tabpanel"
              aria-labelledby="squads-tab"
            >
              <div class="container tab p-3">
                <div className="bg-sport mb-4 shadow text-white d-flex justify-content-between align-items-center fw-bold px-4 rounded-3">
                  <p className="pt-2">MLR</p>
                  <p className="pt-2">PRS</p>
                </div>
                <div className="border border-1 border-light rounded-3 shadow pt-2">
                  <p className="fw-bold fs-5 text-center">Playing Xl</p>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      {Squad1?.players?.["playing XI"]?.map((items, index) => (
                        <div className=" border-end " key={index}>
                          <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-3 d-flex justify-content-end">
                              <img
                                src={getTeamsImg?.a}
                                className="h-50 w-25 ms-3"
                                alt="Loading"
                              />
                            </div>
                            <div className="col-md-9">
                              <span className="fw-bold fs-6">
                                {items?.fullName}
                              </span>
                              <p className="fs-6">{items?.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-6">
                      {Squad2?.players?.["playing XI"]?.map((items, index) => (
                        <div className="" key={index}>
                          <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-3 d-flex justify-content-end">
                              <img
                                src={getTeamsImg?.b}
                                className="h-50 w-25 ms-3"
                                alt="Loading"
                              />
                            </div>
                            <div className="col-md-9">
                              <span className="fw-bold fs-6">
                                {items?.fullName}
                              </span>
                              <p className="fs-6">{items?.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr />
                  <p className="fw-bold fs-5 text-center">Bench</p>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      {Squad1?.players?.bench?.map((items, index) => (
                        <div className=" border-end" key={index}>
                          <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-md-3 d-flex justify-content-end">
                              <img
                                src={getTeamsImg?.a}
                                className="h-50 w-25 ms-3"
                                alt="Loading"
                              />
                            </div>
                            <div className="col-md-9">
                              <span className="fw-bold fs-6">{items?.fullName}</span>
                              <p className="fs-6">{items?.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-6">
                      {Squad2?.players?.bench?.map((items, index) => (
                        <div className="" key={index}>
                          <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-md-3 d-flex justify-content-end">
                              <img
                                src={getTeamsImg?.b}
                                className="h-50 w-25 ms-3"
                                alt="Loading"
                              />
                            </div>
                            <div className="col-md-9">
                              <span className="fw-bold fs-6">{items?.fullName}</span>
                              <p className="fs-6">{items?.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Facts Start */}
            <div
              class={`tab-pane fade border bg-white px-2 shadow ${
                activeTab === "match facts" ? "show active" : ""
              }`}
              id="match facts"
              role="tabpanel"
              aria-labelledby="matchfacts-tab"
            >
              <div className="tab p-3">
                <div className="container mt-4">
                  <div className="card">
                    <div className="card-header bg-sport text-white">
                      <h5 className="mb-0">Match Info</h5>
                    </div>
                    <div className="card-body">
                     

                      <div className="row border-bottom pt-1">
                        
                        {/* Match Details */}
                        <div className="col-md-6">
                          <h6 className="fw-bold">Match:</h6>
                          <p>
                            {MatchInfo?.matchInfo?.team1?.name} VS{" "}
                            {MatchInfo?.matchInfo?.team2?.name}
                            {MatchInfo?.matchInfo?.matchDescription}
                          </p>
                        </div>
                      </div>

                      {/* Date and Time */}
                      <div className="row border-bottom pt-1">
                        <div className="col-md-6">
                          <h6 className="fw-bold">Date:</h6>
                          <p>
                            {moment(
                              MatchInfo?.matchInfo?.matchStartTimestamp
                            ).format("MMMM Do YYYY")}{" "}
                            -{" "}
                            {moment(
                              MatchInfo?.matchInfo?.matchCompleteTimestamp
                            ).format("MMMM Do YYYY")}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <h6 className="fw-bold">Time:</h6>
                          <p>
                            {moment(
                              MatchInfo?.matchInfo?.matchStartTimestamp
                            ).format("LT")}
                          </p>
                        </div>
                      </div>

                      {/* Toss and Venue */}
                      <div className="row border-bottom pt-1">
                        <div className="col-md-6">
                          <h6 className="fw-bold">Toss:</h6>
                          <p>
                            {MatchInfo?.matchInfo?.tossResults?.tossWinnerName}{" "}
                            won the toss and opt{" "}
                            {MatchInfo?.matchInfo?.tossResults?.decision}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <h6 className="fw-bold">Venue:</h6>
                          <p>{MatchInfo?.venueInfo?.ground}</p>
                        </div>
                      </div>

                      {/* Umpires */}
                      <div className="row border-bottom pt-1 mb-2">
                        <div className="col-md-6">
                          <h6 className="fw-bold">Umpires:</h6>
                          <p>
                            {MatchInfo?.matchInfo?.umpire1?.name},{" "}
                            {MatchInfo?.matchInfo?.umpire2?.name}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <h6 className="fw-bold">Third Umpire:</h6>
                          <p>{MatchInfo?.matchInfo?.umpire3?.name}</p>
                        </div>
                      </div>

                      {/* Match Referee */}
                      <div className="mb-2 border-bottom">
                        <h6 className="fw-bold">Match Referee:</h6>
                        <p>{MatchInfo?.matchInfo?.referee?.name}</p>
                      </div>

                      {/* Team2 Squad */}
                      <div className="mb-2 border-bottom pb-2">
                        <h6 className="fw-bold">
                          {MatchInfo?.matchInfo?.team1?.name} Squad:
                        </h6>
                        <div className="ms-3">
                          <div className="mb-2">
                            <div>
                              {" "}
                              <strong>Playing: </strong>
                            </div>

                            {MatchInfo?.matchInfo?.team1?.playerDetails?.map(
                              (i) => (
                                <span className="mb-1">
                                  {i?.substitute == false
                                    ? `${i?.fullName} ${
                                        i?.captain == true ? "(C)" : ""
                                      } ${i?.keeper == true ? "(WK)" : ""} , `
                                    : null}
                                </span>
                              )
                            )}
                          </div>
                          <div>
                            <div>
                              {" "}
                              <strong>Bench: </strong>
                            </div>
                            {MatchInfo?.matchInfo?.team1?.playerDetails?.map(
                              (i) => (
                                <span className="mb-1">
                                  {i?.substitute == true
                                    ? `${i?.fullName} , `
                                    : null}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Team2 Squad */}
                      <div className="mb-4">
                        <h6 className="fw-bold">
                          {MatchInfo?.matchInfo?.team2?.name} Squad:
                        </h6>
                        <div className="ms-3">
                          <div className="mb-2">
                            <div>
                              {" "}
                              <strong>Playing: </strong>
                            </div>

                            {MatchInfo?.matchInfo?.team2?.playerDetails?.map(
                              (i) => (
                                <span className="mb-1">
                                  {i?.substitute == false
                                    ? `${i?.fullName} ${
                                        i?.captain == true ? "(C)" : ""
                                      } ${i?.keeper == true ? "(WK)" : ""} , `
                                    : null}
                                </span>
                              )
                            )}
                          </div>
                          <div>
                            <div>
                              {" "}
                              <strong>Bench: </strong>
                            </div>
                            {MatchInfo?.matchInfo?.team2?.playerDetails?.map(
                              (i) => (
                                <span className="mb-1">
                                  {i?.substitute == true
                                    ? `${i?.fullName} , `
                                    : null}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Info Start */}
            <div
              class={`tab-pane fade border bg-white px-2 shadow ${
                activeTab === "venue info" ? "show active" : ""
              }`}
              id="venue info"
              role="tabpanel"
              aria-labelledby="venueinfo-tab"
            >
              <div className="tab p-3">
                <span className="fw-bold fs-3">Stadium</span>
                <p className="fw-bolder fs-5">Docklands Stadium</p>
                <span className="fw-light">Melbourne</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LiveScore;
