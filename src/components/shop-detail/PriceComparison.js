import { useState } from "react";

function PriceComparison({ price }) {
  const redStyle = {
    color: "red",
  };
  const blueStyle = {
    color: "blue",
  };
  const [retailPrice, setRetailPrice] = useState(40000);
  const [wholeSalePrice, setWholeSalePrice] = useState(25000);
  console.log(price);
  const retailGap = retailPrice - price;
  const wholeSaleGap = price - wholeSalePrice;
  const retailGapPer = Math.floor((retailGap / price) * 100);
  const wholeSaleGapPer = Math.floor((wholeSaleGap / price) * 100);
  return (
    <div>
      <h2>
        현재 도매가보다{" "}
        <span style={redStyle}>
          {wholeSaleGap} ({wholeSaleGapPer}%)
        </span>{" "}
        원 비싸고
      </h2>
      <h2>
       현재 소매가보다{" "}
        <span style={blueStyle}>
          {retailGap} ({retailGapPer}%){" "}
        </span>
        원 싸다
      </h2>
    </div>
  );
}
export default PriceComparison;
