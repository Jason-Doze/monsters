import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";


type CardListProps = {
  monsters: Monster[];
}

// functional component
const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;

// class component
// class CardList extends Component {
//   render() {
//     console.log("render from cardlist");
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }
// export default CardList;
