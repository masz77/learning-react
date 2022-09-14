import { useState, useEffect } from "react";
import { Button, Spin } from "antd";
import CurrencyRow from "../../components/CurrencyRow";

export default function CurrencyConverter() {
  const BASE_URL =
    // "https://api.apilayer.com/exchangerates_data/latest?base=EUR";
    "/api/convertionRate";
  const [curOptions, setCurOptions] = useState([]);
  const [activeCurrencyFrom, setActiveCurrencyFrom] = useState("");
  const [activeCurrencyTo, setActiveCurrencyTo] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertFrom, setConvertFrom] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [convertTo, setConvertTo] = useState(convertFrom * exchangeRate);

  console.log(exchangeRate);

  const myHeaders = new Headers();
  myHeaders.append("apikey", "RUJjDbVfXTL1zCfe80OO5ykgCj3iv24o"); //RUJjDbVfXTL1zCfe80OO5ykgCj3iv24o
  //wR2JtLLzTxyUAGklqTWr6PDPO2X4EMR1

  const requestOptions = {
    method: "GET",
    // redirect: "follow",
    // headers: myHeaders,
  };

  useEffect(() => {
    fetch(BASE_URL, requestOptions)
      .then((response) => response.json())
      // fetchExchangeRate()
      .then((result) => {
        if (result.success) {
          let firstCurrency = Object.keys(result.rates)[0];
          setCurOptions([...Object.keys(result.rates)]);
          setActiveCurrencyFrom(result.base);
          setActiveCurrencyTo(firstCurrency);
          console.log(activeCurrencyTo);
          setExchangeRate(result.rates[activeCurrencyTo]);
          setConvertTo(convertFrom * exchangeRate);
          setIsLoaded(true);
        }
      })
      .catch((error) => console.log("error", error));

    return () => {};
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    // setExchangeRate(result.rates[activeCurrencyTo]);
    fetch(BASE_URL + `&symbols=${activeCurrencyTo}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setExchangeRate(result.rates[activeCurrencyTo]);
        }
      });
    return () => {};
  }, [activeCurrencyFrom, activeCurrencyTo]);

  useEffect(() => {
    setConvertTo(convertFrom * exchangeRate);
    return () => {};
  }, [exchangeRate, convertFrom]);

  return (
    <>
      {isLoaded ? (
        <div style={{ textAlign: "center", fontSize: "32px" }}>
          Currency Converter
          <CurrencyRow
            curOptions={curOptions}
            activeCurrency={activeCurrencyFrom}
            convertNumber={convertFrom}
            convertNumberChangeHandler={(e) => setConvertFrom(e.target.value)}
            selectionHandler={(e) => {
              setActiveCurrencyFrom(e);
            }}
          />
          =
          <CurrencyRow
            curOptions={curOptions}
            convertNumber={convertTo}
            activeCurrency={activeCurrencyTo}
            selectionHandler={(e) => setActiveCurrencyTo(e)}
          />
          <div>Current exchange rate is: {exchangeRate}</div>
        </div>
      ) : (
        <Spin />
      )}
    </>
  );
}
