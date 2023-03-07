//import css from "./EventBoard.module.css";
import { Event } from "./Event/Event";
import { Board } from "./EventBoard.styled";

export const EventBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        ></Event>
      ))}
    </Board>
  );
};

//EventBoard.propTypes = {
//    events: PropTypes.array,
//}
