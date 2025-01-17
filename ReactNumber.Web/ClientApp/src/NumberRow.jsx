
import React from "react";

class NumberRow extends React.Component{
 
    render() {
        const { number, isSelected, isLocked, onSelectClick } = this.props;

        return (
            <tr>
                <td>{number}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'success'} `}
                    disabled={isLocked} 
                    onClick={onSelectClick}>
                        {isSelected ? 'Remove from Selected' : 'Add to Selected'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default NumberRow;