import PropTypes from 'prop-types';

export const DEFAULT_PROPS = {
  check: '',
  permissionKey: '',
  permissions: []
};

export const PROP_TYPES = {
  check: PropTypes.any,
  children: PropTypes.element,
  fallback: PropTypes.element,
  permissionKey: PropTypes.string,
  permissions: PropTypes.array
};
