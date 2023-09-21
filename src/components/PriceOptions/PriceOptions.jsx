import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: 'Basic Membership',
      features: [
        'Access to cardio equipment',
        'Access to weightlifting area',
        'Locker room access',
        'Fitness classes not included',
      ],
      price: '$29.99/month',
    },
    {
      id: 2,
      name: 'Standard Membership',
      features: [
        'Access to cardio equipment',
        'Access to weightlifting area',
        'Locker room access',
        'Access to all fitness classes',
      ],
      price: '$49.99/month',
    },
    {
      id: 3,
      name: 'Premium Membership',
      features: [
        'Access to cardio equipment',
        'Access to weightlifting area',
        'Locker room access',
        'Access to all fitness classes',
        'Personal training session (1/month)',
      ],
      price: '$79.99/month',
    },
  ];

  return (
    <div className="pb-40">
      <h2 className="text-5xl text-center">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {priceOptions.map(option => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
