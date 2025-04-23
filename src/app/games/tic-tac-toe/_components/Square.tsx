export default function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  return (
    <button className="square text-black" onClick={onSquareClick}>
      {value}
    </button>
  );
}
