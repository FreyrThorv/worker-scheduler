import React from 'react';
import PropTypes from 'prop-types';
import Timeslot from './Timeslot';


const Calendar = props => 
	<div className="calendar">
		<h2>Calendar</h2>
		<ul>
	    {props.schedule
	    .map((schedule, index) =>  
	      <Timeslot 
	      	key={index}
	      	id={schedule.id}
	      	timeslot={schedule.timeslot}
	      	date={schedule.date}
	      	showAvailabilityFor={props.showAvailabilityFor}
	      	bookWorker={props.bookWorker}
	      />
	     )}
	  </ul>
	</div>;

Calendar.propTypes = {
  schedule: PropTypes.array.isRequired,
  showAvailabilityFor: PropTypes.number.isRequired,
  bookWorker: PropTypes.func.isRequired,
}

export default Calendar;