import React from 'react';
import PropTypes from 'prop-types';


const Time = props => 
  <li className={props.slot.includes(props.showAvailabilityFor) ? "timeslot unavailable" : "timeslot available"}>
    <div className="time">
    	{props.time}
    </div>
    
    <div className="slot">
    	{
    	props.slot.includes(props.showAvailabilityFor) ? "Unavailable" : <span className="pointer-on-hover" onClick={props.handleBookWorker}>Book</span>
    	}
    </div>
  </li>;


Time.propTypes = {
	slot: PropTypes.array.isRequired,
	time: PropTypes.string.isRequired,
	showAvailabilityFor: PropTypes.number.isRequired,
	handleBookWorker: PropTypes.func.isRequired,
}


export default Time;