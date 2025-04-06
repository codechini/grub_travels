import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    destination: '',
    persons: 1,
    startDate: '',
    endDate: '',
    description: ''
  });

  const destinations = [
    "Bali Paradise",
    "Swiss Alps",
    "Paris",
    "Tokyo",
    "Maldives",
    "African Safari",
    "Greek Islands",
    "Machu Picchu",
    "New Zealand"
  ];

  // Static user data for validation
  const validUser = {
    name: 'Gregory',
    email: 'gregory@gmail.com',
    password: 'gregory123'
  };

  // Get today's date for min date validation
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.description.length < 15 || formData.description.length > 500) {
      alert('Description must be between 50 and 500 characters');
      return;
    }

    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      alert('End date must be after start date');
      return;
    }

    if (formData.email === validUser.email &&
      formData.password === validUser.password) {
      alert(`Booking successful!\n
        Name: ${formData.name}
        Destination: ${formData.destination}
        Persons: ${formData.persons}
        Dates: ${formData.startDate} to ${formData.endDate}
      `);
      navigate('/package-gallery');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Book Your Trip
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Where to
              </label>
              <select
                name="destination"
                id="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              >
                <option value="">Select destination</option>
                {destinations.map(dest => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="persons" className="block text-sm font-medium text-gray-700">
                How Many Persons
              </label>
              <input
                type="number"
                name="persons"
                id="persons"
                min="1"
                max="10"
                value={formData.persons}
                onChange={handleChange}
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                min={today}
                value={formData.startDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                min={formData.startDate || today}
                value={formData.endDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                minLength="15"
                maxLength="500"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Minimum 50 characters required"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
              />
              <p className="mt-1 text-sm text-gray-500">
                {formData.description.length}/500 characters
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-lime-200 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition duration-150 ease-in-out"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;