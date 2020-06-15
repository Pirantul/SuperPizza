import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class GroupedButtons extends React.Component {
  
  handleIncrement = () => {
    this.props.onClickChangeProduct({...this.props.product, action: 'INC'});
  };

  handleDecrement = () => {
    this.props.onClickChangeProduct({...this.props.product, action: 'DEC'});
  };
  render() {
    const displayCounter = this.props.product.count > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
        {displayCounter && <Button >{this.props.product.count}</Button>}
        <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;