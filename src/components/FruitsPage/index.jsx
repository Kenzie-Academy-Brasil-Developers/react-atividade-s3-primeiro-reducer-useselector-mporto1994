//importando useSelector do react-redux
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFruit } from "../../Store/modules/fruits/actions";


const FruitsPage = () => {
    const [fruit, setFruit] = useState("")
    const dispatch = useDispatch();
	//acessando o estado global e pegando o state fruits
    const fruits = useSelector((state) => state.fruits);

    const handleAddFruit = () => {
        dispatch(addFruit(fruit))
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setFruit(e.target.value)} />
        <button onClick={()=>handleAddFruit()}>Adicionar Fruta</button>
      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </div>
  );
}

export default FruitsPage;