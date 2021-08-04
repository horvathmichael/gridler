import React from 'react';
import PropTypes from 'prop-types';

import ToolbarButton from './ToolbarButton';

export default function ToolbarAdd({ icon, local, onAddClick }) {
  return (
    <div>
      <ToolbarButton icon={icon} label={local.button} onClick={onAddClick} />
    </div>
  );
}

ToolbarAdd.propTypes = {
  icon: PropTypes.node.isRequired,
  local: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  onAddClick: PropTypes.func.isRequired,
};
