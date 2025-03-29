import { FaHeadset, FaHotel, FaMapMarkedAlt, FaPlane, FaShieldAlt, FaUtensils } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHotel className="text-4xl mb-4 text-lime-300" />,
      title: "Affordable Hotels",
      description: "Hand-picked quality accommodations that won't break your bank, ensuring comfort and value."
    },
    {
      id: 2,
      icon: <FaUtensils className="text-4xl mb-4 text-lime-300" />,
      title: "Food & Drinks",
      description: "Experience local cuisines and beverages with our curated dining recommendations."
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-4xl mb-4 text-lime-300" />,
      title: "Safety Guide",
      description: "24/7 support and detailed safety guidelines to ensure a worry-free travel experience."
    },
    {
      id: 4,
      icon: <FaPlane className="text-4xl mb-4 text-lime-300" />,
      title: "Fast Travel",
      description: "Efficient transportation arrangements and optimized itineraries to maximize your time."
    },
    {
      id: 5,
      icon: <FaMapMarkedAlt className="text-4xl mb-4 text-lime-300" />,
      title: "Custom Tours",
      description: "Personalized travel plans tailored to your interests, preferences, and schedule."
    },
    {
      id: 6,
      icon: <FaHeadset className="text-4xl mb-4 text-lime-300" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you with any queries or emergencies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need for a perfect travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;