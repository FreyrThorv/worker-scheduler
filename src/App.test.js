import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {expect} from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('removeWorker() removes user from state', () => {
	const div = document.createElement('div');
	const app = ReactDOM.render(<App />, div);

	// Call function and remove worker with index 0. 
	app.removeWorkerAt(0);
	
	// Get worker at index 0.
	const newApplicationState = app.state.workers[0];

	// Expect state to equal the lovable outlaw we all know and love, Jessie James, who was originally at index 1. 
	expect(newApplicationState).to.deep.equal({ id: 1, name: 'Jessie James', isEditing: false });
});