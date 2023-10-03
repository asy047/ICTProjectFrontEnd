import React from "react";
import "./Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="leftArea box">
        <div className="headerArea">
          <h3>주차중</h3>
          <p className="parking carNum">0대</p>
        </div>
        <div className="tableArea">
          <table border={1}>
            <thead>
              <tr>
                <th>주차구역</th>
                <th>자동차번호</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>구역1</td>
                <td>차량1</td>
                <td>번호1</td>
              </tr>
              <tr>
                <td>구역2</td>
                <td>차량2</td>
                <td>번호2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="centerArea box">
        <div className="headerArea">
          <h3>주차대기</h3>
          <p className="notParking carNum">0대</p>
        </div>
        <div className="tableArea">
          <table border={1}>
            <thead>
              <tr>
                <th>주차구역</th>
                <th>자동차번호</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>구역1</td>
                <td>차량1</td>
                <td>번호1</td>
              </tr>
              <tr>
                <td>구역2</td>
                <td>차량2</td>
                <td>번호2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rightArea box">
        <div className="headerArea">
          <h3>이상징후 차량</h3>
          <p className="parkingStatus carNum">0대</p>
        </div>
        <div className="tableArea">
          <table border={1}>
            <thead>
              <tr>
                <th>주차구역</th>
                <th>자동차번호</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>구역1</td>
                <td>차량1</td>
                <td>번호1</td>
              </tr>
              <tr>
                <td>구역2</td>
                <td>차량2</td>
                <td>번호2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Main;
