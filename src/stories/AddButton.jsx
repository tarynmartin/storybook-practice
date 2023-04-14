import React from 'react';
import { Card } from 'react-bootstrap';
import Icon from './Icon';
import PropTypes from 'prop-types';
import './addButton.css';

export const AddButton = ({ buttonText, action, disabled, fill, testLabel }) => {
  return (
    <button variant="light" onClick={() => action(true)} disabled={disabled} data-cy={testLabel}>
      <Icon name="plus-circle" fill={fill || '#445688'} width="1rem" height="1rem" />
      <Card.Link>{buttonText}</Card.Link>
    </button>
  );
};

AddButton.propTypes = {
  buttonText: PropTypes.string,
  action: PropTypes.func,
  disabled: PropTypes.bool,
  fill: PropTypes.string,
  testLabel: PropTypes.string
};

AddButton.defaultProps = {
  buttonText: '',
  action: undefined,
  disabled: false,
  fill: '',
  testLabel: 'add-button'
}