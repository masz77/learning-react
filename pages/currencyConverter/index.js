import { useState, useEffect } from "react";
import { Button } from "antd";
import CurrencyRow from "../../components/CurrencyRow";

export default function CurrencyConverter() {
  const BASE_URL =
    "https://api.apilayer.com/exchangerates_data/latest?base=EUR";
  const [curOptions, setCurOptions] = useState([]);
  const [activeCurrencyFrom, setActiveCurrencyFrom] = useState("");
  const [activeCurrencyTo, setActiveCurrencyTo] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);

  console.log(exchangeRate);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "wR2JtLLzTxyUAGklqTWr6PDPO2X4EMR1");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(BASE_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          let firstCurrency = Object.keys(result.rates)[0];
          setCurOptions([...Object.keys(result.rates)]);
          setActiveCurrencyFrom(result.base);
          setActiveCurrencyTo(firstCurrency);
          setExchangeRate(result.rates[activeCurrencyTo]);
        }
      })
      .catch((error) => console.log("error", error));

    return () => {};
  }, []);

  useEffect(() => {
    // setExchangeRate(result.rates[activeCurrencyTo]);

    return () => {};
  }, [activeCurrencyFrom, activeCurrencyTo]);

  return (
    <div style={{ textAlign: "center", fontSize: "32px" }}>
      Currency Converter
      <CurrencyRow
        curOptions={curOptions}
        activeCurrency={activeCurrencyFrom}
        selectionHandler={(e) => {
          setActiveCurrencyFrom(e);
        }}
      />
      =
      <CurrencyRow
        curOptions={curOptions}
        activeCurrency={activeCurrencyTo}
        selectionHandler={(e) => setActiveCurrencyTo(e)}
      />
    </div>
  );
}
