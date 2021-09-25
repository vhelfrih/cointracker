import "./Coin.css";

const Coin = ({ name, price, image, volume, priceChange, symbol }) => {
  return (
    <div className="coin-container">
      <h1 className="coin_name">{name}</h1>
      <img className="coin_img" src={image} alt={`${name}`} />
      <p>{symbol}</p>
      <h2>${price.toLocaleString()}</h2>
      {priceChange < 0 ? (
        <div className="negative">
          <p>{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="positive">
          <p>{priceChange.toFixed(2)}%</p>
        </div>
      )}
      <p>Volume: {volume.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
