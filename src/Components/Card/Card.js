import card_1 from '../../assets/card_1.jpg';
import './Card.css';

const cards = [1, 2, 3, 4, 5, 6];

export default function CustomCard() {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="card" key={card}>
          <img
            src={card_1}
            alt="green iguana"
            height="140"
          />

          <div className="card-content">
            <h2>Lizard</h2>

            <p>
              Lizards are a widespread group of squamate reptiles,
              with over 6,000 species, ranging across all continents
              except Antarctica
            </p>
          </div>      
        </div>
      ))}
    </div>
  );
}
