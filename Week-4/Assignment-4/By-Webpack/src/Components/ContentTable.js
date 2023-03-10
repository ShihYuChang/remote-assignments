import React, { useState, useEffect } from "react";

const ContentTable = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("useEffect called!");
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`)
      .then((res) => res.json())
      .then((newData) =>
        setData([
          ...data,
          ...newData.map((item) => ({
            title: item.name,
            description: item.description,
            visibility: item.visibility,
            href: item.html_url,
            topics: item.topics,
          })),
        ])
      )
      .catch((err) => console.log("Error fetching and parsing", err));
  }, [page]);

  return (
    <div className="contentBox">
      <ul className="box-row">
        {data.map((item, index) => (
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
      <button
        className="showMoreBtn"
        type="button"
        onClick={() => {
          setPage(page + 5);
        }}
      >
        More
      </button>
    </div>
  );
};

export default ContentTable;
