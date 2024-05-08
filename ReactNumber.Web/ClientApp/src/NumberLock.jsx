
import React from "react";

class NumberLock extends React.Component {
    
    render() {

        const { number, isLocked, onLockClick } = this.props;

        return (
            <div>
               <ul className="list-group">
                <li className="list-group-item">{number}
                  <button className="ms-5 btn btn-primary" onClick={onLockClick}>
                    {isLocked ? 'Unlock' : 'Lock'}
                  </button>
                </li>
               </ul>
            </div>
        )
    }
}

export default NumberLock;
