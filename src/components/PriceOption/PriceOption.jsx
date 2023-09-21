import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white w-9/12 mx-auto">
      <h2 className="text-center">
        <span className="text-xl md:text-3xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-2xl text-center my-8">{name}</h4>
      <div className="pl-5 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-500 w-full py-2 font-bold rounded-lg hover:bg-green-800">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
