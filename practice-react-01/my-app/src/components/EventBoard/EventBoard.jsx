import css from "./EventBoard.module.css";
import PropTypes from 'prop-types';
import {Event} from '../Event/Event';

export const EventBoard = ({events}) => {
    return (
        <div className={css.eventBoard}>
            {events.map(({name, location, speaker, type, time}) => <Event key={name} name={name}
                location={location}
                speaker={speaker}
                type={type}
                start={time.start}
                end={time.end}></Event>)}
        </div>
    );
}

//EventBoard.propTypes = {
//    events: PropTypes.array,
//}