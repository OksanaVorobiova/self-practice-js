import PropTypes from "prop-types";
//import css from './Event.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventDuration, formatEventStart } from "../../../utils";
import { iconSize } from "../../../constants";
import { Card, Info } from "./Event.styled";
import { EventName, Chip } from "./Event.styled";

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStartTime = formatEventStart(start);
  const formattedEventDuration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <i></i>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <i></i>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <i></i>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStartTime}
      </Info>
      <Info>
        <i></i>
        <FaClock size={iconSize.sm} />
        {formattedEventDuration}
      </Info>
      <Chip type={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  speaker: PropTypes.string,
  type: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
};
