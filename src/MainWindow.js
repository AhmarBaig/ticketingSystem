import React from 'react';
import Styles from "./index.css"

function MainWindow() {
  return (
    <div className='main'>
        <div className="mainTitle">Tickets</div>

        <div className="ticketsMain">
            <div className="ticketWindow">To-Do</div>
            <div className="ticketWindow">In Progress</div>
            <div className="ticketWindow">Completed</div>
        </div>
        
    </div>
    
  )
}

export default MainWindow
