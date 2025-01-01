import React from "react";
import Footer from "../../Common/Footer";
import { IoFootball } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
import CardSlider from "../../Common/Card";
const Home = () => {

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

  // Football

  const footballData = [
    {
      category: "FootBall",
      title:
        "A photo of AFC Bournemouth football players gathered on a field inside a stadium.",
      image:
        "https://wallpapers.com/images/high/group-of-afc-bournemouth-football-players-cg3t4qhabb0qxxen.webp",
      source: "Football Addictor",
      time: "2 hours ago",
    },
    {
      category: "FootBall",
      title: "Cristiano Ronaldo on his former club, Man Utd.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst8VKkhyyby0qtFCTqn5z5LPHVUzUlwO_Jg&s",
      source: "FootTracker",
      time: "3 hours ago",
    },
    {
      category: "FootBall",
      title: "Kylian Mbappe Reached 300 Career Goals at the Age of 24",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8U5O2uvi4zP-d9zvShPySM5jMkFUaV3veA&s",
      source: "Hindustan Times",
      time: "3 hours ago",
    },
    {
      category: "FootBall",
      title: "Cristiano Ronaldo on his former club, Man Utd.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst8VKkhyyby0qtFCTqn5z5LPHVUzUlwO_Jg&s",
      source: "FootTracker",
      time: "3 hours ago",
    },
    {
      category: "FootBall",
      title: " at the Age of 24",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8U5O2uvi4zP-d9zvShPySM5jMkFUaV3veA&s",
      source: "Hindustan Times",
      time: "3 hours ago",
    },
  ];

  const footballnews = [
    {
      category: "Football",
      title: "Ottneil Baartman Ruled Out Of Third ODI Against Pakistan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8U5O2uvi4zP-d9zvShPySM5jMkFUaV3veA&s",
      source: "The Express Tribune",
      time: "5 hours ago",
    },
    {
      category: "Football",
      title: "Babar Azam Pays Tribute To Ravichandran Ashwin On...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst8VKkhyyby0qtFCTqn5z5LPHVUzUlwO_Jg&s",
      source: "The Express Tribune",
      time: "6 hours ago",
    },
    {
      category: "Football",
      title: "Jasprit Bumrah Got Pulled Up For 'Biggest Sledge'...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8U5O2uvi4zP-d9zvShPySM5jMkFUaV3veA&s",
      source: "Hindustan Times",
      time: "6 hours ago",
    },
    {
      category: "Football",
      title: "Babar Azam Set To Break ODI Record, Surpassing Vir...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst8VKkhyyby0qtFCTqn5z5LPHVUzUlwO_Jg&s",
      source: "The Express Tribune",
      time: "6 hours ago",
    },
  ];

  // tennis

  const tennisNews = [
    {
      category: "Tennis",
      title: "Ottneil Baartman Ruled Out Of Third ODI Against Pakistan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8ieZ9Xb-TXD9VYwrDZXzATm-iV3Yre5pYg&s",
      source: "The Express Tribune",
      time: "5 hours ago",
    },
    {
      category: "Tennis",
      title: "Babar Azam Pays Tribute To Ravichandran Ashwin On...",
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyQzxMyDedhKbKrICV4JorxbK95lrPpwCTg&s",
      source: "The Express Tribune",
      time: "6 hours ago",
    },
    // {
    //   category: "Tennis",
    //   title: "Jasprit Bumrah Got Pulled Up For 'Biggest Sledge'...",
    //   image:
    //     "https://www.hindustantimes.com/ht-img/img/2024/12/21/1600x900/ANI-20241215043-0_1734345423264_1734758765965.jpg",
    //   source: "Hindustan Times",
    //   time: "6 hours ago",
    // },
    // {
    //   category: "Tennis",
    //   title: "Babar Azam Set To Break ODI Record, Surpassing Vir...",
    //   image:
    //     "https://i.tribune.com.pk/media/images/121728944209-3/121728944209-3.jpg",
    //   source: "The Express Tribune",
    //   time: "6 hours ago",
    // },
  ];

  const tennisData = [
    {
      category: "Tennis",
      title:
        "Jasprit Bumrah Gets A Captaincy Push In Australia Against Rohit Sharma",
      image:
        "https://static.cricketaddictor.com/images/posts/2024/Jasprit-Bumrah-Rohit-Sharma-1-.jpg?q=80",
      source: "Cricket Addictor",
      time: "2 hours ago",
    },
    {
      category: "Tennis",
      title: "HEA Vs STR Match Prediction, Match 9",
      image:
        "https://media.crictracker.com/media/attachments/1734769188974_Brisbane-Heat-and-Adelaide-Strikers.jpeg",
      source: "CricTracker",
      time: "3 hours ago",
    },
    {
      category: "Tennis",
      title: "KL Rahul Gets Hit On Finger In Fresh Injury Scare",
      image:
        "https://media.crictracker.com/media/attachments/1734769188974_Brisbane-Heat-and-Adelaide-Strikers.jpeg",
      source: "Hindustan Times",
      time: "3 hours ago",
    },
    {
      category: "Tennis",
      title: "'Shocking': Ravichandran Ashwin's Spin Twin",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "Times Now",
      time: "3 hours ago",
    },
    {
      category: "Tennis",
      title: "Watch: KL Rahul Suffers Freak Injury Scare",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "InsideSport",
      time: "4 hours ago",
    },
  ];

  return (
    <>
      <div>
        <CardSlider />
        {/* News */}
        <div className="container-fluid background-color">
          <div className="container py-4 d-flex flex-column justify-content-center">
            <div className="row">
              <div>
                <h1 className="bg-sport shadow px-3 py-1 text-light border rounded-2">
                  Cricket <MdSportsCricket className="mb-1" />
                </h1>
              </div>
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
        {/* Football */}
        <div className="football">
          <div className="container">
            <div className="row">
              <div>
                <h1 className="bg-sport shadow px-3 py-1 text-light border rounded-2">
                  Football <IoFootball className="mb-1" />
                </h1>
              </div>
              {/* Smaller News */}
              <div className="col-lg-6">
                <div className="row g-4">
                  {footballData.slice(1).map((news, index) => (
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
              <div className="col-lg-6">
                <div className="news-card" style={{ height: "430px" }}>
                  <img
                    src={footballData[0].image}
                    alt={footballData[0].title}
                    className="img-fluid"
                  />
                  <div className="news-overlay">
                    <div className="news-category">
                      {footballData[0].category}
                    </div>
                    <div className="news-title">{footballData[0].title}</div>
                    <div className="news-meta">
                      {footballData[0].source} - {footballData[0].time}
                    </div>
                  </div>
                </div>
              </div>

              {footballnews.map((footballnews, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12 my-4" key={index}>
                  <div className="news-card" style={{ height: "350px" }}>
                    <img
                      src={footballnews.image}
                      alt={footballnews.title}
                      className="img-fluid news-img"
                    />
                    <div className="news-overlay">
                      <div className="news-category">
                        {footballnews.category}
                      </div>
                      <div className="news-title">{footballnews.title}</div>
                      <div className="news-meta">
                        {footballnews.source} - {footballnews.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tennis */}
        <div className="tennis">
          <div className="container-fluid background-color">
            <div className="container py-4 d-flex flex-column justify-content-center">
              {/* <div className="d-flex border w-25 rounded py-2 bg-white shadow-sm mb-3">
              {sportsData.map((sport, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-center mx-2 border-end"
                >
                  <span className="fw-bold">{sport.name}</span>
                  <span className="fs-4">{sport.value}</span>
                </div>
              ))}
            </div> */}
              <h1 className="bg-sport shadow px-3 py-1 text-light border rounded-2">
                Tennis <MdOutlineSportsTennis className="mb-1" />
              </h1>

              <div className="row g-4">
                {/* Smaller News */}
                {tennisNews.map((tennisNews, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                    <div className="news-card" style={{ height: "350px" }}>
                      <img
                        src={tennisNews.image}
                        alt={tennisNews.title}
                        className="img-fluid news-img"
                      />
                      <div className="news-overlay">
                        <div className="news-category">
                          {tennisNews.category}
                        </div>
                        <div className="news-title">{tennisNews.title}</div>
                        <div className="news-meta">
                          {tennisNews.source} - {tennisNews.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Main News */}
                <div className="col-lg-3">
                  <div className="news-card" style={{ height: "390px" }}>
                    <img
                      src={tennisData[0].image}
                      alt={tennisData[0].title}
                      className="img-fluid"
                    />
                    <div className="news-overlay">
                      <div className="news-category">
                        {tennisData[0].category}
                      </div>
                      <div className="news-title">{tennisData[0].title}</div>
                      <div className="news-meta">
                        {tennisData[0].source} - {tennisData[0].time}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Smaller News */}
                <div className="col-lg-6">
                  <div className="row g-4">
                    {tennisData.slice(1).map((tennisNews, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="news-card">
                          <img
                            src={tennisNews.image}
                            alt={tennisNews.title}
                            className="img-fluid"
                          />
                          <div className="news-overlay">
                            <div className="news-category">
                              {tennisNews.category}
                            </div>
                            <div className="news-title">{tennisNews.title}</div>
                            <div className="news-meta">
                              {tennisNews.source} - {tennisNews.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="news-card" style={{ height: "390px" }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4Kl3BobpAY-9dv9r-s66YU32cKN4yMAIhg&s"
                      alt="Player Image Load"
                      className="img-fluid"
                    />
                    <div className="news-overlay">
                      <div className="news-category">Tennis</div>
                      <div className="news-title">
                        The goal is to score points by hitting the ball out of
                        your opponent's reach.
                      </div>
                      <div className="news-meta">InsideSport - 4 hours ago</div>
                    </div>
                  </div>
                </div>
                {/* Upcoming Match */}
                <div className="upcoming-matches">
                  <h3>Upcoming Matches</h3>
                  <div className="table-responsive">
                    <table className="table matches-table">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
