const PackageCard = ({ image, title, description, price, duration }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/500x300?text=Image+Not+Available';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={handleImageError}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">{price}</span>
          <span className="text-gray-500">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;