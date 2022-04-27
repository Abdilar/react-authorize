import {hasPermission, isEmptyString} from '../../utils/functions';
import {DEFAULT_PROPS, PROP_TYPES} from './Authorize.config';

const Authorize = ({check, children, fallback, permissionKey, permissions}) => {
  const per = isEmptyString(permissionKey) ? permissions : JSON.parse(localStorage.getItem(permissionKey));
  const fallbackAuth = fallback ? fallback : null;

  return (
    check ? (hasPermission(per, check) ? children : fallbackAuth) : children
  );
};

Authorize.defaultProps = DEFAULT_PROPS;
Authorize.propTypes = PROP_TYPES;

export {Authorize};
