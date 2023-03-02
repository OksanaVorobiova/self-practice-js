import PropTypes from 'prop-types';
import css from './Event.module.css';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';


export const Event = ({ name, location, speaker, type, start, end }) => {
    return (
        <div className={css.event}>
  <h2 className={css.title}>{name}</h2>
  <p className={css.info}>
    <i className={css.icon}></i>
       <FaMapMarkerAlt className={css.icon} />     
    {location}
  </p>
  <p className={css.info}>
    <i className={css.icon}></i>
        <FaUserAlt className={css.icon} />       
    {speaker}
  </p>
  <p className={css.info}>
    <i className={css.icon}></i>
    <FaCalendarAlt className={css.icon} />
    {start}
  </p>
  <p className={css.info}>
    <i className={css.icon}></i>
        <FaClock className={css.icon} />     
    {end}
  </p>
</div>
    )
}

Event.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    type: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
}