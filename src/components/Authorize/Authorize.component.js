import React from 'react';
import PropTypes from 'prop-types';

const Authorize = ({check, children, permissions}) => {
  const hasPermission = () => {
    if (Array.isArray(permissions) && permissions.length) {
      if (Array.isArray(check)) {
        return check.every(check => permissions.some(permission => permission === check))
      } else {
        return (check === "" || permissions.some(permission => permission === check));
      }
    }
    return false;
  };

  return (
    check ? (hasPermission() ? children : null) : children
  );
};

Authorize.defaultProps = {
  check: '',
  permissions: []
};

Authorize.propTypes = {
  check: PropTypes.any,
  children: PropTypes.element,
  permissions: PropTypes.Array
};

export {Authorize};
