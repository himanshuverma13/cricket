import React, { useEffect, useState } from "react";

// Images
import Logo from "../../asset/img/icon/IND.png";
import { useParams } from "react-router-dom";
import { GetCommentariesAPI, GetMatchDetailsAPI, GetScoreCardDataAPI, GetSquadsDataAPI } from "../../APIs/api";
import moment from "moment/moment";

const LiveScore = () => {
    const [activeTab, setActiveTab] = useState("commentry");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };

    let Tabs = ["commentry", "scorecard", "squads", "points table", "match facts", "venue info"];

    // const BatterData = [
    //     {
    //         batter: "Andrew Tye",
    //         run: 2,
    //         ball: 6,
    //         foursecond: 0,
    //         sixsecond: 0,
    //         sr: 200,
    //     },
    //     {
    //         batter: "Matthew Kelly",
    //         run: 2,
    //         ball: 6,
    //         foursecond: 0,
    //         sixsecond: 0,
    //         sr: 200,
    //     },
    // ];

    //   const BowlerData = [
    //     {
    //       batter: "Adam Zampa ",
    //       cobtter: "c Turner b Andrew Tye",
    //       run: 2,
    //       ball: 6,
    //       foursecond: 0,
    //       sixsecond: 0,
    //       sr: 200,
    //     },
    //     {
    //       batter: "Thomas Stewart Rogers",
    //       cobtter: "c Turner b Andrew Tye",
    //       run: 2,
    //       ball: 6,
    //       foursecond: 0,
    //       sixsecond: 0,
    //       sr: 200,
    //     },
    //   ];

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
    const [MatchInfo, setMatchInfo] = useState();
    // const [Squads, setSquads] = useState();

    const params = useParams();

    const FetchMatchDetails = async () => {
        try {
            const response = await GetCommentariesAPI(91805);
            const scoreCardData = await GetScoreCardDataAPI(91805);
            const matchInfo = await GetMatchDetailsAPI(91805);
            // const squad = await GetSquadsDataAPI()
            // console.log('squad: ', squad);

          
            setCommentries(response);
            setScoreCard(scoreCardData);
            setMatchInfo(matchInfo);
            // setSquads(squad);
        } catch (error) {
            console.log("error: ", error);
        }
    };

    const FetchSquadDetails = async(team1,team2)=>{
        try {
            const responseTeam1 = await GetSquadsDataAPI(91805,team1);
            const responseTeam2 = await GetSquadsDataAPI(91805,team2);
            // setSquads(response);
        } catch (error) {
            console.log("error: ", error);
        }
    }

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
            <div className="container">
                <section className="tabs-wrapper py-5">
                    {/* Tabs start */}
                    <ul className="nav nav-tabs mb-4">
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

                    <div className="tab-content">
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'commentry' ? 'show active' : ''}`} id="commentry" role="tabpanel" aria-labelledby="commentry-tab">
                            <div className="tab p-3">
                                <div className=" p-2 rounded-2 mb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="d-flex align-items-center">
                                            <img src={Logo} className="livescore-img me-3 rounded-circle" alt="Loading" />
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
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="d-flex align-items-center">
                                            <img src={Logo} className="livescore-img me-3 rounded-circle" alt="Loading" />
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
                                                    <th scope="col" className="ps-3">Batter</th>
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
                                                    <th scope="col" className="ps-3">Bowler</th>
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
                                                className="list-group-item bg-sport fw-bolder"
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
                                <h5 className="text-warning">{ScoreCard?.status}</h5>
                                <div className="border border-2 border-light rounde-2">
                                    <p className="ms-2">
                                        Melbourne Renegades Innings <span>127-6 (15.5 Ov)</span>
                                    </p>

                                    <div className="container my-5">
                                        <h1 className="text-center mb-4">Batsmen Data</h1>
                                        <h3>
                                            {ScoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName} :{" "}
                                            {ScoreCard?.scoreCard[0]?.inningsId} Innings{" "}
                                            {ScoreCard?.scoreCard[1]?.scoreDetails?.runs}-
                                            {ScoreCard?.scoreCard[1]?.scoreDetails?.wickets}{" "}
                                        </h3>
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

                        {/* Squads Start */}
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'squads' ? 'show active' : ''}`} id="squads" role="tabpanel" aria-labelledby="squads-tab">
                            <div class="container tab p-3">
                                <div className="bg-sport mb-4 shadow d-flex justify-content-between align-items-center fw-bold px-4 rounded-3">
                                    <p className="pt-2">MLR</p>
                                    <p className="pt-2">PRS</p>
                                </div>
                                <div className="border border-1 border-light rounded-3 shadow">
                                    <p className="fw-bold fs-5 text-center">Playing Xl</p>
                                    <hr />
                                    <div className="row">
                                        {PlayerData.map((items, index) => (
                                            <div className="col-md-6 border-end">
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
                        </div>

                        {/* Points Table Start */}
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'points table' ? 'show active' : ''}`} id="points table" role="tabpanel" aria-labelledby="pointstable-tab">
                            <div className="tab p-3">
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
                                                <td scope="row" className="fw-normal text-primary">
                                                    {items.teams}
                                                </td>
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
                        </div>


                        {/* Match Facts Start */}
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'match facts' ? 'show active' : ''}`} id="match facts" role="tabpanel" aria-labelledby="matchfacts-tab">
                            <div className="tab p-3">
                            <div className="container mt-4">
                                            <div className="card">
                                                <div className="card-header bg-sport">
                                                    <h5 className="mb-0">Match Info</h5>
                                                </div>
                                                <div className="card-body">
                                                    {/* Match Details */}
                                                    <div className="mb-4">
                                                        <h6 className="fw-bold">Match:</h6>
                                                        <p>
                                                        {MatchInfo?.matchInfo?.team1?.name} VS {MatchInfo?.matchInfo?.team2?.name}
                                                        {MatchInfo?.matchInfo?.matchDescription}
                                                        </p>
                                                    </div>

                                                    {/* Date and Time */}
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <h6 className="fw-bold">Date:</h6>
                                                            <p>
                                                            {moment(MatchInfo?.matchInfo?.matchStartTimestamp).format('MMMM Do YYYY')} - {moment(MatchInfo?.matchInfo?.matchCompleteTimestamp).format('MMMM Do YYYY')}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h6 className="fw-bold">Time:</h6>
                                                            <p>{moment(MatchInfo?.matchInfo?.matchStartTimestamp).format('LT')}</p>
                                                        </div>
                                                    </div>

                                                    {/* Toss and Venue */}
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <h6 className="fw-bold">Toss:</h6>
                                                            <p>{MatchInfo?.matchInfo?.tossResults?.tossWinnerName} won the toss and opt {MatchInfo?.matchInfo?.tossResults?.decision}</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h6 className="fw-bold">Venue:</h6>
                                                            <p>{MatchInfo?.venueInfo?.ground}</p>
                                                        </div>
                                                    </div>

                                                    {/* Umpires */}
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <h6 className="fw-bold">Umpires:</h6>
                                                            <p>{MatchInfo?.matchInfo?.umpire1?.name}, {MatchInfo?.matchInfo?.umpire2?.name}</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h6 className="fw-bold">Third Umpire:</h6>
                                                            <p>{MatchInfo?.matchInfo?.umpire3?.name}</p>
                                                        </div>
                                                    </div>

                                                    {/* Match Referee */}
                                                    <div className="mb-4">
                                                        <h6 className="fw-bold">Match Referee:</h6>
                                                        <p>{MatchInfo?.matchInfo?.referee?.name}</p>
                                                    </div>

                                                   {/* Team2 Squad */}
                                                   <div className="mb-4">
                                                        <h6 className="fw-bold">{MatchInfo?.matchInfo?.team1?.name}  Squad:</h6>
                                                        <div className="ms-3">
                                                            <div className="mb-2">
                                                               <div> <strong>Playing: </strong></div>
                                                                    
                                                                    {MatchInfo?.matchInfo?.team1?.playerDetails?.map((i) => 
                                                                    <span className="mb-1">
                                                                        {i?.substitute == false ?  `${i?.fullName} ${i?.captain == true ? "(C)": ''} ${i?.keeper == true ? "(WK)": ''} , ` : null } 
                                                                    
                                                                    </span> 
                                                                    )}
                                                            </div>
                                                            <div>
                                                               <div> <strong>Bench: </strong></div>
                                                               {MatchInfo?.matchInfo?.team1?.playerDetails?.map((i) => 
                                                                    <span className="mb-1">
                                                                        {i?.substitute == true ?  `${i?.fullName} , ` : null } 
                                                                    
                                                                    </span> 
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Team2 Squad */}
                                                    <div className="mb-4">
                                                        <h6 className="fw-bold">{MatchInfo?.matchInfo?.team2?.name}  Squad:</h6>
                                                        <div className="ms-3">
                                                            <div className="mb-2">
                                                               <div> <strong>Playing: </strong></div>
                                                                    
                                                                    {MatchInfo?.matchInfo?.team2?.playerDetails?.map((i) => 
                                                                    <span className="mb-1">
                                                                        {i?.substitute == false ?  `${i?.fullName} ${i?.captain == true ? "(C)": ''} ${i?.keeper == true ? "(WK)": ''} , ` : null } 
                                                                    
                                                                    </span> 
                                                                    )}
                                                            </div>
                                                            <div>
                                                               <div> <strong>Bench: </strong></div>
                                                               {MatchInfo?.matchInfo?.team2?.playerDetails?.map((i) => 
                                                                    <span className="mb-1">
                                                                        {i?.substitute == true ?  `${i?.fullName} , ` : null } 
                                                                    
                                                                    </span> 
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>


                        {/* Overs Start */}
                        {/* <div class={`tab-pane fade border px-2 shadow ${activeTab === 'overs' ? 'show active' : ''}`} id="overs" role="tabpanel" aria-labelledby="overs-tab">
                            <div className="tab p-3">
                                <p>.......</p>
                            </div>
                        </div> */}


                        {/* Venue Info Start */}
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'venue info' ? 'show active' : ''}`} id="venue info" role="tabpanel" aria-labelledby="venueinfo-tab">
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
