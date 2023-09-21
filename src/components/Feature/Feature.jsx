import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="text-lg flex items-center">
        <AiFillCheckCircle className="text-slate-600 mr-3"></AiFillCheckCircle>
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  option: PropTypes.string,
};
export default Feature;
