import React, { useEffect } from "react";

const PriceTag = () => {
  const priceConverter = async (price) => {


    const currency = price.split(" ")[1];

    const amount = price.split(" ")[0];

    var myHeaders = new Headers();
    myHeaders.append("apikey", process.env.REACT_APP_CURRENCY_TOKEN);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=EUR,USD,GBP&base=CAD",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };



  useEffect(() => {
    priceConverter();
    }, []);

  return <div>PriceTag</div>;
};

export default PriceTag;
