const Carousel = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Amazing service! Exceeded all my expectations. Would definitely recommend to others."
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "The team was very professional and delivered outstanding results."
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Great experience working with this team. They're highly skilled and efficient."
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Marketing",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Incredible attention to detail and amazing customer service."
    }
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;