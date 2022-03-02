//importando useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </div>
  );
}

export default FruitsPage;