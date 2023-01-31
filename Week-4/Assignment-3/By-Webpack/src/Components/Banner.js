import React, { useState } from "react";

const Banner = () => {
  const [isDefaultMsg, setIsDefaultMsg] = useState(true);

  return (
    <div className="welcome_banner">
      <h1 onClick={() => setIsDefaultMsg(!isDefaultMsg)}>
        {isDefaultMsg ? defaultMessage : onClickMessage}
      </h1>
    </div>
  );
};

const defaultMessage = "Welcome Message!";
const onClickMessage = "Have a Good Time!";

export default Banner;
