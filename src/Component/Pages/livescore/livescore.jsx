import React, { useEffect, useState } from "react";

// Images
import Logo from "../../asset/img/icon/IND.png";
import { useParams } from "react-router-dom";
import { GetCommentariesAPI, GetScoreCardDataAPI } from "../../APIs/api";
const LiveScore = () => {
  const BatterData = [
    {
      batter: "Andrew Tye",
      run: 2,
      ball: 6,
      foursecond: 0,
      sixsecond: 0,
      sr: 200,
    },
    {
      batter: "Matthew Kelly",
      run: 2,
      ball: 6,
      foursecond: 0,
      sixsecond: 0,
      sr: 200,
    },
  ];

  const BowlerData = [
    {
      batter: "Adam Zampa ",
      cobtter: "c Turner b Andrew Tye",
      run: 2,
      ball: 6,
      foursecond: 0,
      sixsecond: 0,
      sr: 200,
    },
    {
      batter: "Thomas Stewart Rogers",
      cobtter: "c Turner b Andrew Tye",
      run: 2,
      ball: 6,
      foursecond: 0,
      sixsecond: 0,
      sr: 200,
    },
  ];

  const PlayerData = [
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
  ];
  const BenchPlayerData = [
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
    {
      img: Logo,
      name: "Jake Fraser-McGurk",
      title: "Batsman",
    },
  ];

  const PointsTableData = [
    {
      teams: "Thomas Stewart Rogers",
      mat: 2,
      won: 6,
      lost: 0,
      tied: 0,
      nr: 200,
      pts: 98,
      nrr: 0.2345,
    },
    {
      teams: "Thomas Rogers",
      mat: 2,
      won: 6,
      lost: 0,
      tied: 0,
      nr: 200,
      pts: 98,
      nrr: 0.2345,
    },
    {
      teams: "Thomas",
      mat: 2,
      won: 6,
      lost: 0,
      tied: 0,
      nr: 200,
      pts: 98,
      nrr: 0.2345,
    },
    {
      teams: "Thomas Stewart Rogers",
      mat: 2,
      won: 6,
      lost: 0,
      tied: 0,
      nr: 200,
      pts: 98,
      nrr: 0.2345,
    },
  ];

  const [Commentries, setCommentries] = useState();
  const [ScoreCard, setScoreCard] = useState();

  const params = useParams();

  const FetchMatchDetails = async () => {
    try {
      const response = await GetCommentariesAPI(91805);
      const scoreCardData = await GetScoreCardDataAPI(91805);
      console.log(
        "response: ",
        scoreCardData?.scoreCard[0]?.batTeamDetails?.batsmenData
      );
      setCommentries(response);
      setScoreCard(scoreCardData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchMatchDetails();
  }, []);

  //   const { batsmanStriker, batsmanNonStriker, bowlerStriker, bowlerNonStriker } =
  //     Commentries?.miniscore;
  //   const batters = [batsmanStriker, batsmanNonStriker];
  //   const bowlers = [bowlerStriker, bowlerNonStriker];
  //   const batsmenArray = Object.values(batTeamDetails?.batsmenData);

  return (
    <>
      <div className="site-wrapper">
        <section className="tabs-wrapper py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="tabs">
                <input type="radio" name="tabs" id="tab1" />
                <label for="tab1">Commentry</label>

                <div className="tab">
                  <div className="border border-1 border-secondary p-2 rounded-2">
                    <div className="d-flex">
                      <div className="d-flex">
                        <div className="fw-bold w-100 me-4">
                          {
                            Commentries?.miniscore?.matchScoreDetails
                              ?.inningsScoreList[0]?.batTeamName
                          }
                        </div>
                      </div>
                      <div className="text-secondary fw-light">
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[0]?.score
                        }
                        /
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[0]?.wickets
                        }
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[0]?.overs
                        }
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex">
                        <div className="fw-bold w-100 me-4">
                          {
                            Commentries?.miniscore?.matchScoreDetails
                              ?.inningsScoreList[1]?.batTeamName
                          }
                        </div>
                      </div>
                      <div className="text-secondary fw-light">
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[1]?.score
                        }
                        /
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[1]?.wickets
                        }
                        /
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.inningsScoreList[1]?.overs
                        }
                      </div>
                    </div>
                    <p className="text-warning fw-bold m-0 ">
                      <span>
                        {
                          Commentries?.miniscore?.matchScoreDetails
                            ?.customStatus
                        }
                      </span>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      {/* Batter table */}
                      <table className="table table-responsive table-sm border border-2 border-light rounded">
                        <thead className="table-secondary">
                          <tr>
                            <th scope="col">Batter</th>
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
                                  {
                                    batter?.miniscore?.batsmanNonStriker
                                      ?.batName
                                  }
                                </td>
                                <td>
                                  {
                                    batter?.miniscore?.batsmanNonStriker
                                      ?.batRuns
                                  }
                                </td>
                                <td>
                                  {
                                    batter?.miniscore?.batsmanNonStriker
                                      ?.batBalls
                                  }
                                </td>
                                <td>
                                  {
                                    batter?.miniscore?.batsmanNonStriker
                                      ?.batFours
                                  }
                                </td>
                                <td>
                                  {
                                    batter?.miniscore?.batsmanNonStriker
                                      ?.batSixes
                                  }
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
                        <thead className="table-secondary">
                          <tr>
                            <th scope="col">Bowler</th>
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
                                  {
                                    bowler?.miniscore?.bowlerStriker
                                      ?.bowlMaidens
                                  }
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
                                  {
                                    bowler?.miniscore?.bowlerNonStriker
                                      ?.bowlName
                                  }
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
                                  {
                                    bowler?.miniscore?.bowlerNonStriker
                                      ?.bowlRuns
                                  }
                                </td>
                                <td>
                                  {
                                    bowler?.miniscore?.bowlerNonStriker
                                      ?.bowlWkts
                                  }
                                </td>
                                <td>
                                  {
                                    bowler?.miniscore?.bowlerNonStriker
                                      ?.bowlEcon
                                  }
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
                          className="list-group-item list-group-item-dark fw-bolder"
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

                {/* ScoreCard Start */}
                <input type="radio" name="tabs" id="tab2" />
                <label for="tab2">ScoreCard</label>
                <div className="tab">
                  <h5 className="text-warning">{ScoreCard?.status}</h5>
                  <div className="border border-2 border-light rounde-2">
                    <p className="ms-2">
                      Melbourne Renegades Innings <span>127-6 (15.5 Ov)</span>
                    </p>

                    <div className="container my-5">
                      <h1 className="text-center mb-4">Batsmen Data</h1>
                        <h3>{ScoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName} : {ScoreCard?.scoreCard[0]?.inningsId} Innings {ScoreCard?.scoreCard[1]?.scoreDetails?.runs}-{ScoreCard?.scoreCard[1]?.scoreDetails?.wickets} </h3>
                      <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
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
                          {Object?.values(
                            ScoreCard?.scoreCard[0]?.batTeamDetails?.batsmenData
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
                        </tbody>
                      </table>
                    </div>


                    {/* ------------ */}
                    <div className="container my-5">
                      <h1 className="text-center mb-4">Bowler Data</h1>
                        <h3>{ScoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName} : {ScoreCard?.scoreCard[0]?.inningsId} Innings {ScoreCard?.scoreCard[1]?.scoreDetails?.runs}-{ScoreCard?.scoreCard[1]?.scoreDetails?.wickets} </h3>
                      <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
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
                          {Object?.values(
                            ScoreCard?.scoreCard[0]?.bowlTeamDetails?.bowlersData
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
                        </tbody>
                      </table>
                    </div>
                 

                 {/* ---------------- */}
                 <div className="container my-5">
                      <h1 className="text-center mb-4">Batsmen Data</h1>
                        {/* <h3>{ScoreCard?.scoreCard[0]?.batTeamDetails?.batTeamName} : {ScoreCard?.scoreCard[1]?.inningsId} Innings {ScoreCard?.scoreCard[0]?.scoreDetails?.runs}-{ScoreCard?.scoreCard[0]?.scoreDetails?.wickets} </h3> */}
                      <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
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
                          {Object?.values(
                            ScoreCard?.scoreCard[1]?.batTeamDetails?.batsmenData
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
                        </tbody>
                      </table>
                    </div>

                    <div className="container my-5">
                      <h1 className="text-center mb-4">Bowler Data</h1>
                        {/* <h3>{ScoreCard?.scoreCard[0]?.batTeamDetails?.batTeamName} : {ScoreCard?.scoreCard[1]?.inningsId} Innings {ScoreCard?.scoreCard[0]?.scoreDetails?.runs}-{ScoreCard?.scoreCard[0]?.scoreDetails?.wickets} </h3> */}
                      <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
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
                          {Object?.values(
                            ScoreCard?.scoreCard[1]?.bowlTeamDetails?.bowlersData
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
                        </tbody>
                      </table>
                    </div>


                  </div>
                </div>

                {/* Squads Start */}
                <input type="radio" name="tabs" id="tab3" />
                <label for="tab3">Squads</label>
                <div class="tab">
                  <div className="bg-secondary shadow d-flex justify-content-between align-items-center fw-bold px-4 rounded-3">
                    <p>MLR</p>
                    <p>PRS</p>
                  </div>
                  <div className="border border-1 border-light rounded-3 shadow">
                    <p className="fw-bold fs-5 text-center">Playing Xl</p>
                    <hr />
                    <div className="row">
                      {PlayerData.map((items, index) => (
                        <div className="col-md-6">
                          <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-3 d-flex justify-content-end">
                              <img
                                src={items.img}
                                className="h-50 w-25 ms-3"
                                alt="Loading"
                              />
                            </div>
                            <div className="col-md-9">
                              <span className="fw-bold fs-6">{items.name}</span>
                              <p className="fs-6">Batsman</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr />
                    <p className="fw-bold fs-5 text-center">Bench</p>
                    <hr />
                    <div className="row">
                      {BenchPlayerData.map((items, index) => (
                        <div className="col-md-6">
                          <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-md-3 d-flex justify-content-end">
                              <img
                                src={items.img}
                                className="h-50 w-25 ms-3"
                                alt="Loading"
                              />
                            </div>
                            <div className="col-md-9">
                              <span className="fw-bold fs-6">{items.name}</span>
                              <p className="fs-6">Batsman</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Points Table Start */}
                <input type="radio" name="tabs" id="tab4" />
                <label for="tab4">Points Table</label>
                <div className="tab">
                  {/* Bowler  table */}
                  <table class="table shadow table-responsive table-sm border border-2 border-light rounded">
                    <thead className="table-secondary">
                      <tr>
                        <th scope="col">Teams</th>
                        <th scope="col">Mat</th>
                        <th scope="col">Won</th>
                        <th scope="col">Lost</th>
                        <th scope="col">Tied</th>
                        <th scope="col">NR</th>
                        <th scope="col">Pts</th>
                        <th scope="col">NRr</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PointsTableData.map((items, index) => (
                        <tr key={index}>
                          <th scope="row" className="fw-normal text-primary">
                            {items.teams}
                          </th>
                          <td>{items.mat}</td>
                          <td>{items.won}</td>
                          <td>{items.lost}</td>
                          <td>{items.tied}</td>
                          <td>{items.nr}</td>
                          <td>{items.pts}</td>
                          <td>{items.nrr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Match Facts Start */}
                <input type="radio" name="tabs" id="tab5" />
                <label for="tab5">Match Facts</label>
                <div className="tab">
                  <h2>Ember</h2>
                  <p>
                    The introduction of{" "}
                    <a href="https://www.emberjs.com/">Ember.js</a> to the
                    software market was 2015, and since then, it has gained
                    popularity with its wide application area. The features of
                    Ember.js support two-way data binding and hence, establish a
                    reliable platform for handling the complicated User
                    Interfaces. Popular websites like LinkedIn, Netflix,
                    Nordstrom, and many more use the Ember.JS platform for their
                    websites.
                  </p>
                </div>

                {/* Overs Start */}
                <input type="radio" name="tabs" id="tab6" />
                <label for="tab6">Overs</label>
                <div className="tab">
                  <p>.......</p>
                </div>

                {/* Venue Info Start */}
                <input type="radio" name="tabs" id="tab7" />
                <label for="tab7">Venue Info</label>
                <div className="tab">
                  <span className="fw-bold fs-3">Stadium</span>
                  <p className="fw-bolder fs-5">Docklands Stadium</p>
                  <span className="fw-light">Melbourne</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LiveScore;
