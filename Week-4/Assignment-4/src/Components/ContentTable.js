import React, { useState, useEffect } from "react";

const ContentTable = () => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    console.log("useEffect called!");
    fetch("https://api.github.com/orgs/facebook/repos?per_page=10&page=1")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.map((item) => ({
            title: item.name,
            description: item.description,
            visibility: item.visibility,
            href: item.html_url,
            topics: item.topics,
          }))
        )
      )
      .catch((err) => console.log("Erro fetching and parsing", err));
  }, []);

  return (
    <div className="contentBox">
      <ul className="box-row">
        {data.slice(0, 5).map((item, index) => (
          <li id={`box${index}`} key={index}>
            <a href={item.href} className="title">
              {item.title}
            </a>
            <span>{item.visibility}</span>
            <p>{item.description}</p>
            <div className="topic">
              {item.topics.map((topic, index) => (
                <a
                  href={`https://github.com/search?q=topic%3A${topic}+org%3Afacebook&type=Repositories`}
                  className="topicTag"
                  key={index}
                >
                  {topic}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <ul className="box-row" style={{ display: isVisible ? "block" : "none" }}>
        {data.slice(5, 10).map((item, index) => (
          <li id={`box${index + 5}`} key={index + 5}>
            <a href={item.href} className="title">
              {item.title}
            </a>
            <span>{item.visibility}</span>
            <p>{item.description}</p>
            <div className="topic">
              {item.topics.map((topic, index) => (
                <a
                  href={`https://github.com/search?q=topic%3A${topic}+org%3Afacebook&type=Repositories`}
                  className="topicTag"
                  key={index}
                >
                  {topic}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button
        className="showMoreBtn"
        type="button"
        onClick={() => {
          setIsVisible(!isVisible);
          setIsMore(!isMore);
        }}
      >
        {isMore ? "More" : "Hide"}
      </button>
    </div>
  );
};

export default ContentTable;
