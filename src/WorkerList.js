import React from 'react';
import PropTypes from 'prop-types';
import Worker from './Worker';


const WorkerList = props => 
	<div className="workers-list">
		<h2>Workers</h2>
		<ul>
	    {props.workers
	    .map((worker, index) =>  
	      <Worker 
	      	key={index}
	      	name={worker.name}
	      	isEditing={worker.isEditing}
	      	setName={text => props.setNameAt(text, index)}
	      	handleToggleEditing={() => props.toggleEditingAt(index)}
	      	handleWorkerRemoval={() => props.removeWorkerAt(index)}
	      	handleWorkerAvailability={() => props.getWorkerAvailability(worker.id)}
	      />
	     )}
	  </ul>
	</div>;

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeWorkerAt: PropTypes.func.isRequired,
}

export default WorkerList;