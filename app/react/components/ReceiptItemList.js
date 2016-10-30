import React, { Component } from 'react';

class ReceiptItemList extends Component {
  renderProducts(){
    return this.props.items.map((product, index) => {
      return <li key={index}>{product.name} - ${product.price}</li>
    })
  }

  render(){
    return(
      <ul>
        { this.renderProducts() }
      </ul>
    )
  }
}

export default ReceiptItemList;
