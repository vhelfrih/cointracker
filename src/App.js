import "./App.css";
import { useState, useEffect } from "react";

import Coin from "./components/Coin";
import Header from "./components/Header";
import Sort from "./components/Sort";

function App() {
  const [coins, setCoins] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => setCoins(responseData));
  }, []);

  
   const ascHandler = () => {
      const sorted = filteredCoins.sort((a, b) => a["price_change_percentage_24h"] - b["price_change_percentage_24h"]);
      setCoins(sorted);
   }
  
   const descHandler = () => {
      const sorted = filteredCoins.sort((a, b) => b["price_change_percentage_24h"] - a["price_change_percentage_24h"]);
      setCoins(sorted);
   }

  return (
    <div className="App">
      <Header inputChange={inputChangeHandler} />
      <Sort ascending={ascHandler} descending={descHandler} />
      <div className="coins_wrapper">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
        );
      </div>
    </div>
  );
}

export default App;
