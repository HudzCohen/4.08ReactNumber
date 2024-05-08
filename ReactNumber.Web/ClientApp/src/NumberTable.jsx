
import React from "react";
import { produce } from 'immer';
import NumberRow from "./NumberRow";
import NumberLock from "./NumberLock";
import { v4 as uuidv4 } from 'uuid';

class NumberTable extends React.Component {
 
    state = {
       allNumbers: [],
       selectedNumbers: [],
       lockedNumbers: []
    }

   onAddNumClicked = () => {
    
    const num = {
        id: uuidv4(),
        value: Math.floor(Math.random() * 100)
     }

     const nextState = produce(this.state, draft => {
        draft.allNumbers.push(num);
     });

    this.setState(nextState);
   }  
 
  onSelectClick = (n) => {

    const { selectedNumbers } = this.state;
    
    if(selectedNumbers.includes(n)) {
        this.setState({ selectedNumbers: selectedNumbers.filter(number => number.id !== n.id)});
    } else {
        this.setState({ selectedNumbers: [...selectedNumbers, n] });
    }
  } 

  onLockClick = (sn) => {
      const { lockedNumbers } = this.state;

      if(lockedNumbers.includes(sn)) {
        this.setState({ lockedNumbers: lockedNumbers.filter(number => number.id !== sn.id)});
      } else {
        this.setState({ lockedNumbers: [...lockedNumbers, sn]});
      }
  }

    render () {
        const { allNumbers, selectedNumbers, lockedNumbers } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <button className="btn btn-success w-100 " onClick={this.onAddNumClicked}>Add Number</button>
                    </div>
                    <table className="table table-hover table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            { allNumbers.map(n => <NumberRow 
                            key={n.id} 
                            number={n.value}
                            isSelected= {selectedNumbers.includes(n)}
                            isLocked= {lockedNumbers.includes(n)}
                            onSelectClick={() => this.onSelectClick(n)}/>)}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="p-5 rounded card bg-light mb-4">
                       { !selectedNumbers.length && <h4>There are no selected numbers.</h4>}
                       {!!selectedNumbers.length && <h3>Selected Numbers:</h3>}
                        { selectedNumbers.map(sn => <NumberLock 
                        key={sn.id}
                        number={sn.value}
                        isLocked={lockedNumbers.includes(sn)}
                        onLockClick={() => this.onLockClick(sn)} /> )}
                    </div>
                </div>
            </div>
        )
    }
}


export default NumberTable;