import PropTypes from 'prop-types';

export const DEFAULT_PROPS = {
  check: '',
  isViceVersa: false,
  permissionKey: '',
  permissions: []
};

export const PROP_TYPES = {
  check: PropTypes.any,
  children: PropTypes.element,
  fallback: PropTypes.element,
  isViceVersa: PropTypes.bool,
  permissionKey: PropTypes.string,
  permissions: PropTypes.array
};
