// import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      title: 'Mountain Landscape'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Tropical Beach'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
      title: 'City Architecture'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220',
      title: 'Cultural Experience'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
      title: 'Scenic Route'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      title: 'Historical Monument'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf',
      title: 'Local Cuisine'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
      title: 'Wildlife Safari Experience in Tanzania'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Glimpses of unforgettable moments from our adventures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group h-[40vh]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-100 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-lime-200 text-center text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
