import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};

withRouter.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export { withRouter };
