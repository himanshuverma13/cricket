import React, { useState } from "react";
import CourseSlider from "../../Common/Card";
import Footer from "../../Common/Footer";
import { IoFootball } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
const Home = () => {  
    const sportsData = [
      { name: "CRICKET", value:<MdSportsCricket className="text-danger" /> },
      { name: "FOOTBALL", value: <IoFootball /> },
      { name: "TENNIS", value: <MdOutlineSportsTennis className="text-info"/> },
    ];
  const newsData = [
    {
      category: "Cricket",
      title:
        "Jasprit Bumrah Gets A Captaincy Push In Australia Against Rohit Sharma",
      image:
        "https://static.cricketaddictor.com/images/posts/2024/Jasprit-Bumrah-Rohit-Sharma-1-.jpg?q=80",
      source: "Cricket Addictor",
      time: "2 hours ago",
    },
    {
      category: "Cricket",
      title: "HEA Vs STR Match Prediction, Match 9",
      image:
        "https://media.crictracker.com/media/attachments/1734769188974_Brisbane-Heat-and-Adelaide-Strikers.jpeg",
      source: "CricTracker",
      time: "3 hours ago",
    },
    {
      category: "Cricket",
      title: "KL Rahul Gets Hit On Finger In Fresh Injury Scare",
      image:
        "https://media.crictracker.com/media/attachments/1734769188974_Brisbane-Heat-and-Adelaide-Strikers.jpeg",
      source: "Hindustan Times",
      time: "3 hours ago",
    },
    {
      category: "Cricket",
      title: "'Shocking': Ravichandran Ashwin's Spin Twin",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "Times Now",
      time: "3 hours ago",
    },
    {
      category: "Cricket",
      title: "Watch: KL Rahul Suffers Freak Injury Scare",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "InsideSport",
      time: "4 hours ago",
    },
  ];

  const news = [
    {
      category: "Cricket",
      title: "Ottneil Baartman Ruled Out Of Third ODI Against Pakistan",
      image:
        "https://i.tribune.com.pk/media/images/PG12-ANCHOR-SA-name-ODI-squad1734044931-0/PG12-ANCHOR-SA-name-ODI-squad1734044931-0.jpg",
      source: "The Express Tribune",
      time: "5 hours ago",
    },
    {
      category: "Cricket",
      title: "Babar Azam Pays Tribute To Ravichandran Ashwin On...",
      image:
        "https://i.tribune.com.pk/media/images/Express-Tribune-(2)1734772069-0/Express-Tribune-(2)1734772069-0.jpg",
      source: "The Express Tribune",
      time: "6 hours ago",
    },
    {
      category: "Cricket",
      title: "Jasprit Bumrah Got Pulled Up For 'Biggest Sledge'...",
      image:
        "https://www.hindustantimes.com/ht-img/img/2024/12/21/1600x900/ANI-20241215043-0_1734345423264_1734758765965.jpg",
      source: "Hindustan Times",
      time: "6 hours ago",
    },
    {
      category: "Cricket",
      title: "Babar Azam Set To Break ODI Record, Surpassing Vir...",
      image:
        "https://i.tribune.com.pk/media/images/121728944209-3/121728944209-3.jpg",
      source: "The Express Tribune",
      time: "6 hours ago",
    },
  ];

  const matches = [
    {
      team1: "India",
      team2: "Australia",
      date: "25-Dec-2024",
      location: "Melbourne Cricket Ground, Australia",
    },
    {
      team1: "Pakistan",
      team2: "New Zealand",
      date: "26-Dec-2024",
      location: "Eden Park, New Zealand",
    },
    {
      team1: "England",
      team2: "South Africa",
      date: "27-Dec-2024",
      location: "Lords Cricket Ground, England",
    },
    {
      team1: "West Indies",
      team2: "Sri Lanka",
      date: "28-Dec-2024",
      location: "Kensington Oval, Barbados",
    },
  ];

  return (
    <>
      <div>
        <CourseSlider />
        {/* News */}
        <div className="container-fluid background-color">
          <div className="container py-4 d-flex flex-column justify-content-center">
            <div className="d-flex border w-25 rounded py-2 bg-white shadow-sm mb-3">
                {sportsData.map((sport, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center justify-content-center mx-2 border-end"
                  >
                    <span className="fw-bold">{sport.name}</span>
                    <span className="fs-4">{sport.value}</span>
                  </div>
                ))}
              </div>
            <div className="row g-4">
              {/* Smaller News */}
              {news.map((news, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                  <div className="news-card" style={{ height: "350px" }}>
                    <img
                      src={news.image}
                      alt={news.title}
                      className="img-fluid news-img"
                    />
                    <div className="news-overlay">
                      <div className="news-category">{news.category}</div>
                      <div className="news-title">{news.title}</div>
                      <div className="news-meta">
                        {news.source} - {news.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Main News */}
              <div className="col-lg-6">
                <div className="news-card" style={{ height: "390px" }}>
                  <img
                    src={newsData[0].image}
                    alt={newsData[0].title}
                    className="img-fluid"
                  />
                  <div className="news-overlay">
                    <div className="news-category">{newsData[0].category}</div>
                    <div className="news-title">{newsData[0].title}</div>
                    <div className="news-meta">
                      {newsData[0].source} - {newsData[0].time}
                    </div>
                  </div>
                </div>
              </div>
              {/* Smaller News */}
              <div className="col-lg-6">
                <div className="row g-4">
                  {newsData.slice(1).map((news, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="news-card">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="img-fluid"
                        />
                        <div className="news-overlay">
                          <div className="news-category">{news.category}</div>
                          <div className="news-title">{news.title}</div>
                          <div className="news-meta">
                            {news.source} - {news.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming Match */}
        <div className="upcoming-matches">
          <h3>Upcoming Matches</h3>
          <table className="matches-table">
            <thead>
              <tr>
                <th>Team 1</th>
                <th>VS</th>
                <th>Team 2</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index}>
                  <td>{match.team1}</td>
                  <td>VS</td>
                  <td>{match.team2}</td>
                  <td>{match.date}</td>
                  <td>{match.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
