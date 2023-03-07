export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
};