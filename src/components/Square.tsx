function Square({ value, onSquareClick }) {
  //const [value, setValue] = useState(value);
  //true is for X, false is for O
  /*const onSquareClick = () => {
    if (value === null) {
      setValue("X");
    }
  };*/

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
