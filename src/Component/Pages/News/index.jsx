import React, { useEffect, useState } from "react";
import Footer from "../../Common/Footer";
import { GetNewsAPI } from "../../APIs/api";
import moment from "moment";

const NewsPage = () => {
  // const itemsPerPage = 8; // Number of items per page
  // const [currentPage, setCurrentPage] = useState(1);
  const [SportsNews, setSportsNews] = useState();

  const sportsData = [
    { name: "CRICKET", value: 3520 },
    { name: "FOOTBALL", value: 2044 },
    { name: "TENNIS", value: 635 },
  ];

  const FetchNews = async () => {
    try {
      const response = await GetNewsAPI();
      console.log("response: ", response);
      setSportsNews(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchNews();
  }, []);

  // // Calculate pagination logic
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentNews = SportsNews?.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math?.ceil(SportsNews?.length / itemsPerPage);

  // // Handle pagination navigation
  // const handlePrevPage = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };

  return (
    <>
      <div className="news-page">
        <div className="text-center fw-bold"><h2>N E W S</h2></div>
        <div className="row">
          <div className="news-list col-lg-8">
            <h3>Cricket News</h3>
            {SportsNews?.map((news, index) => (
              <div key={index} className="news-item">
                <img src={news?.image} alt={news?.title} />
                <div className="news-details">
                  <h4>{news?.title}</h4>
                  <p>{news?.description}</p>
                  <span>
                    {moment(news?.publishedAt)
                      ?.subtract(10, "days")
                      ?.calendar()}{" "}
                    • {moment(news?.publishedAt)?.format("LT")} •{" "}
                    {news?.source?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <aside className="sidebar col-lg-3">
            <h4>Most Read</h4>
            {SportsNews?.map((item, index) => (
              <div key={index} className="most-read-item">
                <img src={item?.image} alt={item?.title} />
                <div>
                  <h6>{item?.title}</h6>
                  <span>
                    {moment(item?.publishedAt).subtract(10, "days").calendar()}{" "}
                    • {item?.source?.name}
                  </span>
                </div>
              </div>
            ))}
            <div className="container  py-4 border-top border-primary">
              {/* Header */}
              <div className="d-flex align-items-center mb-2">
                <div className="px-3 py-1 bg-secondary text-white">SPORTS</div>
                <hr className="border border-dark w-100" />
              </div>

              {/* Table */}
              <div className="border rounded p-3 bg-white shadow-sm">
                {sportsData.map((sport, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    <span className="fw-bold">{sport.name}</span>
                    <span className="">{sport.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <div className="sidebar mt-4">
          <div className="row g-4">
            {SportsNews?.map((news, index) => (
              <div className="col-md-3" key={index}>
                <div className="news-card">
                  <img
                    src={news?.image}
                    alt={news?.title}
                    className="img-fluid"
                  />
                  <div className="news-overlay">
                    <div className="news-category">SPORTS</div>
                    <div className="news-title text-truncate">
                      {news?.title}
                    </div>
                    <div className="news-meta">
                      {news?.source?.name} -{" "}
                      {moment(news?.publishedAt)
                        ?.subtract(10, "days")
                        ?.calendar()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Controls

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
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
