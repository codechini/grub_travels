import { FaHeart, FaPlane, FaStar, FaUsers } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaPlane />, value: "500+", label: "Destinations" },
    { icon: <FaUsers />, value: "10,000+", label: "Happy Customers" },
    { icon: <FaStar />, value: "15+", label: "Years Experience" },
    { icon: <FaHeart />, value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About GRUB Travel
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Making your travel dreams come true since 2008
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg gap-8 mb-16">
          {/* Left Column - Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="GRUB Travel Team"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div className="md:w-1/2 pb-2 md:py-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pl-1">Our Story</h2>
            <div className="space-y-4">
              <p className="text-gray-600 px-2">
                Founded in 2008, GRUB Travel began with a simple vision: to make extraordinary travel experiences accessible to everyone. What started as a small local agency has grown into a trusted name in the travel industry.
              </p>
              <p className="text-gray-600 px-2">
                Our headquarters in the heart of the city serves as the base for our team of passionate travel experts, each bringing years of experience and personal insights from exploring the worlds most remarkable destinations.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 pl-1">Company Milestones</h3>
                <ul className="list-disc list-inside space-y-2 px-2 text-gray-600">
                  <li>2008 - Company establishment</li>
                  <li>2012 - Expanded to international destinations</li>
                  <li>2015 - Awarded Best Travel Agency</li>
                  <li>2018 - Launched sustainable tourism initiatives</li>
                  <li>2020 - Introduced virtual travel experiences</li>
                  <li>2023 - Reached 10,000+ satisfied customers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lime-300 text-3xl mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At GRUB Travel, we believe every journey should be extraordinary. Our mission is to create unforgettable travel experiences that combine adventure, comfort, and cultural immersion while maintaining sustainable tourism practices.
          </p>
          <p className="text-gray-600">
            We work tirelessly to ensure every trip is perfectly tailored to our clients dreams, providing exceptional service from the first consultation to the journey home.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
            <p className="text-gray-600">
              Our team of experienced travel professionals knows every destination inside and out, ensuring you get the best advice and recommendations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Best Value</h3>
            <p className="text-gray-600">
              We negotiate the best rates with our partners to offer you competitive prices without compromising on quality.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Travel with peace of mind knowing our dedicated support team is always available to assist you during your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
