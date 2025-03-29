import PackageCard from "../components/PackageCard";

const PackageGallery = () => {
  const travelPackages = [
    {
      id: 1,
      title: "Bali Paradise",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&w=500&q=60",
      price: "$1,299",
      duration: "7 days",
      description: "Experience the magic of Bali's beaches and culture"
    },
    {
      id: 3,
      title: "Paris Romance",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&w=500&q=60",
      price: "$1,899",
      duration: "6 days",
      description: "Romantic getaway in the city of love"
    },
    {
      id: 4,
      title: "Tokyo Explorer",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&w=500&q=60",
      price: "$2,299",
      duration: "9 days",
      description: "Discover the blend of modern and traditional Japan"
    },
    {
      id: 5,
      title: "Maldives Luxury",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&w=500&q=60",
      price: "$3,499",
      duration: "5 days",
      description: "Ultimate luxury in overwater bungalows"
    },
    {
      id: 6,
      title: "African Safari",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&w=500&q=60",
      price: "$4,299",
      duration: "10 days",
      description: "Wildlife adventure in the Serengeti"
    },
    {
      id: 7,
      title: "Greek Islands",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=500&q=60",
      price: "$1,999",
      duration: "8 days",
      description: "Island hopping in the Mediterranean"
    },
    {
      id: 9,
      title: "New Zealand Adventure",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&w=500&q=60",
      price: "$3,299",
      duration: "12 days",
      description: "Epic landscapes and outdoor activities"
    },
    {
      id: 8,
      title: "Machu Picchu Trek",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&w=500&q=60",
      price: "$2,799",
      duration: "9 days",
      description: "Historic journey through the Andes"
    },
    {
      id: 2,
      title: "Swiss Alps Adventure",
      image: "https://images.unsplash.com/photo-1607585011081-241d2bacb7de?auto=format&w=500&q=60",
      price: "$2,499",
      duration: "8 days",
      description: "Ski and explore the majestic Swiss mountains"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Travel Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelPackages.map((pack) => (
          <PackageCard key={pack.id} image={pack.image} title={pack.title} description={pack.description} price={pack.price} duration={pack.duration} />
        ))}
      </div>
    </div>
  );
};

export default PackageGallery;