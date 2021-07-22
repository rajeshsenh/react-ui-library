import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button>
      {props.children}
    </button>
  )
}

Button.propTypes = {

  children: PropTypes.string
};

export default Button;
