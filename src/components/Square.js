import Cross from './Cross';
import Circle from './Circle';

const Square = ({position,value, takeTurn}) =>  {
    const clicked = () =>{
        if(value === "EMPTY") return takeTurn(position);
    }
    return (
      <div className = "square" onClick = {clicked}>
          {value === 'CIRCLE' && <Circle />}
          {value === 'CROSS' && <Cross />}
      </div>
    );
}

export default Square;
