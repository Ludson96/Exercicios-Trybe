import React from "react";
import PropTypes from 'prop-types'

class Estrutura extends React.Component {
  render() {
    const { name, type, image, moreInfo, averageWeight } = this.props;
    return (
      <div className="pokemon">
        <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>
           { `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }
          </p>
          </div>
        <img src={image} alt={moreInfo} />
      </div>
    )
  }
}

Estrutura.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired
}

export default Estrutura;
