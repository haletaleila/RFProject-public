import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  const [coins, setCoins] = useState([]);

  const [myMoney, setMyMoney] = useState();

  const [tryBuyCoins, setTryBuyCoins] = useState([]);

  const onChange = (event) => {
    setMyMoney(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setTryBuyCoins([]);
    coins.map((item) => {
      if (myMoney > item.quotes.USD.price)
        setTryBuyCoins((tryBuyCoins) => [
          item.name + " " + item.quotes.USD.price,
          ...tryBuyCoins,
        ]);
    });
  }, [myMoney]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h3>input my money</h3>
      <input type='number' onChange={onChange} value={myMoney} />
      <ul>
        {tryBuyCoins.length > 0
          ? tryBuyCoins.map((item) => <li>{item}</li>)
          : null}
      </ul>
    </div>
  );
}

export default App;
