import React, { Component } from 'react';
import WorkerList from './WorkerList';
import Calendar from './Calendar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingWorker: "",
      workers: [
        {
          id: 0,
          name: 'Jackie Perry',
          isEditing: false,
        },
        {
          id: 1,
          name: 'Jessie James',
          isEditing: false,
        },
        {
          id: 2,
          name: 'Francis Monroe',
          isEditing: false,
        },
        {
          id: 3,
          name: 'Sarah R. Jonsson',
          isEditing: false,
        } 
      ],
      schedule: [
        {
          date: 'Mon, 05 Nov 2018',
          timeslot: [
            ["08:00",[0,1,2] ],
            ["08:30",[2] ],
            ["09:00",[1] ],
            ["09:30",[0,2,3] ],
            ["10:00",[] ],
          ]
        },
        {
          date: 'Tues, 06 Nov 2018',
          timeslot: [
            ["08:00",[1] ],
            ["08:30",[0] ],
            ["09:00",[3] ],
            ["09:30",[2, 3] ],
            ["10:00",[3] ],
          ]
        }
      ],
      showAvailabilityFor : "",
    };
  }

  toggleWorkerPropertyAt = (property, indexToChange) => 
    this.setState({
      workers: this.state.workers.map((worker,index) => {
        if (index === indexToChange) {
          return {
            ...worker,
            [property]: !worker[property]
          };
        }
        return worker;
      })      
    });


  toggleEditingAt = index =>
    this.toggleWorkerPropertyAt("isEditing", index);

  handleNameInput = e =>
    this.setState({pendingWorker: e.target.value});

  handleEditing = e =>
    this.setState({pendingWorker: e.target.value});

  addWorkerHandler = e => {
    e.preventDefault();
    if (this.state.pendingWorker){
      this.setState({
        workers: [
         ...this.state.workers,
          {
            id: this.state.workers.length,
            name: this.state.pendingWorker,
            isEditing: false
          },
        ],
        pendingWorker: "",
      });
    }
  }
  
  removeWorkerAt = index =>
    this.setState({
      workers: [
        ...this.state.workers.slice(0, index),
        ...this.state.workers.slice(index + 1)
      ]
   })

  setNameAt = (name, indexToChange) => 
    this.setState({
      workers: this.state.workers.map((worker, index) => {
      if (index === indexToChange) {
        return {
          ...worker,
          name
        };
      }
      return worker;
    })      
  });

  getWorkerAvailability = (workerId) => {
    this.setState({
      showAvailabilityFor: workerId,
    })
  }

  bookWorker = (workerId, date, indexToChange) => {
    console.log(workerId + date + indexToChange)
    // TODO: update the scheduler with workerID 
  }

  render() {
    return (
      <div className="app">
        {/*
          Add worker
        */}
        <h2>Add worker</h2>
        <form onSubmit={this.addWorkerHandler}>
          <input
            type="text"
            value={this.state.pendingWorker} 
            onChange={this.handleNameInput}></input>
          <button>Add worker</button>
        </form>

        {/*
          List workers
          Must be able to delete worker and update the worker names.  
        */}

        <WorkerList 
          workers={this.state.workers}
          setNameAt={this.setNameAt}
          toggleEditingAt={this.toggleEditingAt}
          removeWorkerAt={this.removeWorkerAt}
          getWorkerAvailability={this.getWorkerAvailability}
        />
        <hr/>
        {/*
          Calendar that takes users. Get calendar data when someone clicks on particular worker button.  
        */}
        {Number.isInteger(this.state.showAvailabilityFor) ? 
        <Calendar
          schedule={this.state.schedule}
          showAvailabilityFor={this.state.showAvailabilityFor}
          bookWorker={this.bookWorker}
        />
        : <p>Click "display availability" for worker calendar</p>
        } 

      </div>
    );
  }
}

export default App;
