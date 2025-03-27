import cardimg from "./assets/cardimg.png";




function Card() {
  return (
    <div className="card">
      <img src={cardimg} className="card-image" alt="card-img" />
      <h2 className="card-title">Soofiya</h2>
      <p className="card-text">i build apps and website</p>
    </div>
  );
}

export default Card;
