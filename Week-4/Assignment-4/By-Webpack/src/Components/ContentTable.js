import React, { useState, useEffect } from "react";

const ContentTable = (props) => {
  const [data, setData] = useState([]);
  const [boxNum, setBoxNum] = useState(props.boxNum);

  useEffect(() => {
    console.log("useEffect called!");
    fetch("https://api.github.com/orgs/facebook/repos")
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
        {data.slice(0, boxNum).map((item, index) => (
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
          setBoxNum(boxNum + 5);
        }}
      >
        More
      </button>
    </div>
  );
};

export default ContentTable;
