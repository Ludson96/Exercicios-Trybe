import React from "react";

class Estrutura extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.weight} kg</p>
        <img src={this.props.img} alt={this.props.moreInfo}/>
      </>
    )
  }
}

export default Estrutura;
