import React from 'react';
import PropTypes from 'prop-types';
import WorkerName from './WorkerName';


const Worker = props => 
  <li className="worker-item">
		<WorkerName
  		isEditing={props.isEditing}
  		handleNameEdits={e => props.setName(e.target.value)} >
  		{props.name}
  	</WorkerName>

    <button onClick={props.handleToggleEditing}>
      {
      	props.isEditing ? "save" : "edit" 
    	}
    </button>
    <button onClick={props.handleWorkerRemoval}>remove</button>
    <button onClick={props.handleWorkerAvailability} className="availability-button">Display Availability </button>
  </li>;

Worker.propTypes = {
	name: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  handleWorkerRemoval: PropTypes.func.isRequired,
  handleWorkerAvailability: PropTypes.func.isRequired,
}

export default Worker;