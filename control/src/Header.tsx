import React, { useState, useEffect } from "react";
import "./Header.scss";

function Header() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the time every 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = getDayName(date);
    return `${year}. ${month}. ${day}(${dayOfWeek})`;
  };

  const getDayName = (date: Date) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[date.getDay()];
  };

  return (
    <div id="header">
      <div className="headerText">
        <h1>새양청마을아파트</h1>
        <h2>주차장 관리 서비스</h2>
      </div>
      <div className="timeArea">
        <p className="day">{formatDate(currentDate)}</p>
        <p className="time">{formatTime(currentDate)}</p>
      </div>
    </div>
  );
}

export default Header;
