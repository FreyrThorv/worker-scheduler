import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';

const Timeslot = props => 
  <ul className="time-slots">
    <h2>{props.date}</h2>
      {props.timeslot
      .map((timeslot, index) =>  
        <Time 
          key={index}
          time={timeslot[0]}
          slot={timeslot[1]}
          showAvailabilityFor={props.showAvailabilityFor}
          handleBookWorker={() => props.bookWorker(props.showAvailabilityFor, props.id, index)}
        />
       )}
  </ul>;

Timeslot.propTypes = {
	timeslot: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  showAvailabilityFor: PropTypes.number.isRequired,
  bookWorker: PropTypes.func.isRequired
}

export default Timeslot;