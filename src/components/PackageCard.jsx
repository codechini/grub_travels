const PackageCard = (pack) => {
  return (
    <>
      {/* <h1>PAckage Card</h1> */}
      <div key={pack.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* <PackageCard /> */}
        <div className="relative h-48">
          <img
            src={pack.image}
            alt={pack.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{pack.title}</h2>
          <p className="text-gray-600 mb-4">{pack.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">{pack.price}</span>
            <span className="text-sm text-gray-400">{pack.duration}</span>
          </div>
          <button className="mt-4 w-full bg-lime-200 py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </>
  )
}

export default PackageCard