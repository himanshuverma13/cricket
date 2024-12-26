import React, { useState } from "react";
import Footer from "../../Common/Footer";

const NewsPage = () => {
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const featuredNews = [
    {
      title:
        "BCB introduces national contracts for 30 more women in Bangladesh",
      description:
        "The 18 centrally-contracted Bangladesh women will also see an increased pay for the period between October 2024 and June 2025",
      date: "22-Dec-2024",
      time: "51 mins ago",
      author: "Mohammad Isam",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/388500/388510.6.jpg",
    },
    {
      title: "Konstas won't overthink Bumrah challenge as MCG debut looms",
      description:
        "The 19-year-old is the favourite to come in at the top of the order for the Boxing Day Test",
      date: "22-Dec-2024",
      time: "1 hr ago",
      author: "AAP",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/392000/392041.6.jpg",
    },
    {
      title: "Konstas won't overthink Bumrah challenge as MCG debut looms",
      description:
        "The 19-year-old is the favourite to come in at the top of the order for the Boxing Day Test",
      date: "22-Dec-2024",
      time: "1 hr ago",
      author: "AAP",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/392000/392041.6.jpg",
    },
    {
      title: "Konstas won't overthink Bumrah challenge as MCG debut looms",
      description:
        "The 19-year-old is the favourite to come in at the top of the order for the Boxing Day Test",
      date: "22-Dec-2024",
      time: "1 hr ago",
      author: "AAP",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/392000/392041.6.jpg",
    },
  ];

  const mostRead = [
    {
      title: "McSweeney 'devastated' by Test omission",
      date: "21-Dec-2024",
      author: "ESPNcricinfo staff",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/393200/393290.6.jpg",
    },
    {
      title: "Bumrah at one end, Ilford Seconds at the other?",
      date: "21-Dec-2024",
      time: "17 hrs ago",
      author: "Alagappan Muthu",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/393200/393290.6.jpg",
    },
    {
      title: "Bumrah at one end, Ilford Seconds at the other?",
      date: "21-Dec-2024",
      time: "17 hrs ago",
      author: "Alagappan Muthu",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/393200/393290.6.jpg",
    },
    {
      title: "Bumrah at one end, Ilford Seconds at the other?",
      date: "21-Dec-2024",
      time: "17 hrs ago",
      author: "Alagappan Muthu",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/393200/393290.6.jpg",
    },
  ];

  const newsData = [
    {
      category: "Cricket",
      title:
        "Jasprit Bumrah Gets A Captaincy Push In Australia Against Rohit Sharma",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "Cricket Addictor",
      time: "2 hours ago",
    },
    {
      category: "Cricket",
      title: "HEA Vs STR Match Prediction, Match 9",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "CricTracker",
      time: "3 hours ago",
    },
    {
      category: "Cricket",
      title: "KL Rahul Gets Hit On Finger In Fresh Injury Scare",
      image:
        "https://static.cricketaddictor.com/images/posts/2024/Jasprit-Bumrah-Rohit-Sharma-1-.jpg?q=80",
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
    {
      category: "Cricket",
      title: "HEA Vs STR Match Prediction, Match 9",
      image:
        "https://static.tnn.in/thumb/msid-116523856,width-1280,height-720,resizemode-75/116523856.jpg",
      source: "CricTracker",
      time: "3 hours ago",
    },
    {
      category: "Cricket",
      title: "KL Rahul Gets Hit On Finger In Fresh Injury Scare",
      image:
        "https://static.cricketaddictor.com/images/posts/2024/Jasprit-Bumrah-Rohit-Sharma-1-.jpg?q=80",
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
    {
      category: "Cricket",
      title: "KL Rahul Gets Hit On Finger In Fresh Injury Scare",
      image:
        "https://static.cricketaddictor.com/images/posts/2024/Jasprit-Bumrah-Rohit-Sharma-1-.jpg?q=80",
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

  // Calculate pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Handle pagination navigation
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="news-page">
        <div className="d-flex" style={{ gap: "20px" }}>
          <div className="news-list">
            <h3>Cricket News</h3>
            {featuredNews.map((news, index) => (
              <div key={index} className="news-item">
                <img src={news.image} alt={news.title} />
                <div className="news-details">
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                  <span>
                    {news.date} • {news.time} • {news.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <aside className="sidebar">
            <h4>Most Read</h4>
            {mostRead.map((item, index) => (
              <div key={index} className="most-read-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h6>{item.title}</h6>
                  <span>
                    {item.date} • {item.author}
                  </span>
                </div>
              </div>
            ))}
          </aside>
        </div>
        <div className="sidebar mt-4">
          <div className="row g-4">
            {currentNews.map((news, index) => (
              <div className="col-md-3" key={index}>
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
        {/* Pagination Controls */}

        <div className="pagination-controls">
          <button
            className="btn btn-secondary"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <span className="page-indicator">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
