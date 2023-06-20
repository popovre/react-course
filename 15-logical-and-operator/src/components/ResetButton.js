export default function ResetButton(props) {
  const { count, onClick, style } = props;
  return (count > 0 && (
    <div>
      <button onClick={onClick} style={style}>
        Reset
      </button>
    </div>
  ));
}
