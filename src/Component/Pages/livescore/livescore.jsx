import React, { useEffect, useState } from "react";

// Images
import Logo from "../../asset/img/icon/IND.png";
import { useParams } from "react-router-dom";
import { GetCommentariesAPI, GetMatchDetailsAPI, GetScoreCardDataAPI } from "../../APIs/api";

const LiveScore = () => {
    const [activeTab, setActiveTab] = useState("commentry");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };

    let Tabs = ["commentry", "scorecard", "squads", "match facts", "venue info"];

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

    const params = useParams();

    const FetchMatchDetails = async () => {
        try {
            const response = await GetCommentariesAPI(91805);
            const scoreCardData = await GetScoreCardDataAPI(91805);
            const matchInfo = await GetMatchDetailsAPI(91805);

            console.log(
                "response: ",
                scoreCardData?.scoreCard[0]?.bowlTeamDetails?.bowlersData
            );
            setCommentries(response);
            setScoreCard(scoreCardData);
            setMatchInfo(matchInfo);
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
                                            <img src={Logo} className="livescore-img me-3 rounded-circle" alt="Loading" />
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
                                            <thead className="table-bg">
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
                                            <thead className="table-bg">
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

                        {/* Squads Start */}
                        <div class={`tab-pane fade border bg-white px-2 shadow ${activeTab === 'squads' ? 'show active' : ''}`} id="squads" role="tabpanel" aria-labelledby="squads-tab">
                            <div class="container tab p-3">
                                <div className="bg-sport mb-4 shadow d-flex justify-content-between align-items-center fw-bold px-4 rounded-3">
                                    <p className="pt-2">MLR</p>
                                    <p className="pt-2">PRS</p>
                                </div>
                                <div className="border border-1 border-light rounded-3 shadow pt-2">
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
                                            <div className="col-md-6 border-end">
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
                                                    Australia vs India, 4th Test, India tour of
                                                    Australia, 2024-25
                                                </p>
                                            </div>

                                            {/* Date and Time */}
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold">Date:</h6>
                                                    <p>
                                                        Thursday, December 26, 2024 - Monday, December
                                                        30, 2024
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold">Time:</h6>
                                                    <p>5:00 AM</p>
                                                </div>
                                            </div>

                                            {/* Toss and Venue */}
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold">Toss:</h6>
                                                    <p>Australia won the toss and opt Batting</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold">Venue:</h6>
                                                    <p>Melbourne Cricket Ground, Melbourne</p>
                                                </div>
                                            </div>

                                            {/* Umpires */}
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold">Umpires:</h6>
                                                    <p>Joel Wilson, Michael Gough</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold">Third Umpire:</h6>
                                                    <p>Sharfuddoula</p>
                                                </div>
                                            </div>

                                            {/* Match Referee */}
                                            <div className="mb-4">
                                                <h6 className="fw-bold">Match Referee:</h6>
                                                <p>Andy Pycroft</p>
                                            </div>

                                            {/* Australia Squad */}
                                            <div className="mb-4">
                                                <h6 className="fw-bold">Australia Squad:</h6>
                                                <div className="ms-3">
                                                    <div className="mb-2">
                                                        <strong>Playing: </strong>
                                                        <p className="mb-1">
                                                            Usman Khawaja, Sam Konstas, Marnus
                                                            Labuschagne, Steven Smith, Travis Head,
                                                            Mitchell Marsh, Alex Carey (wk), Pat Cummins
                                                            (c), Mitchell Starc, Nathan Lyon, Scott Boland
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <strong>Bench: </strong>
                                                        <p className="mb-0">
                                                            Beau Webster, Sean Abbott, Josh Inglis, Jhye
                                                            Richardson, Andrew McDonald, Andre Borovec,
                                                            Daniel Vettori, Michael Di Venuto, Clint McKay
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* India Squad */}
                                            <div>
                                                <h6 className="fw-bold">India Squad:</h6>
                                                <div className="ms-3">
                                                    <div className="mb-2">
                                                        <strong>Playing: </strong>
                                                        <p className="mb-1">
                                                            Yashasvi Jaiswal, KL Rahul, Rohit Sharma (c),
                                                            Virat Kohli, Rishabh Pant (wk), Ravindra
                                                            Jadeja, Nitish Kumar Reddy, Washington Sundar,
                                                            Jasprit Bumrah, Mohammed Siraj, Akash Deep
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <strong>Bench: </strong>
                                                        <p className="mb-0">
                                                            Shubman Gill, Tanush Kotian, Dhruv Jurel,
                                                            Devdutt Padikkal, Sarfaraz Khan, Abhimanyu
                                                            Easwaran, Prasidh Krishna, Harshit Rana,
                                                            Gautam Gambhir, Abhishek Nayar, Ryan ten
                                                            Doeschate, T Dilip, Morne Morkel
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


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
