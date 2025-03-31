import { useEffect, useState } from 'react';

const ChangeCity = () => {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
  const [currentCity, setCurrentCity] = useState(cities[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setCurrentCity(randomCity);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="text-2xl md:text-4xl font-bold mb-4">{currentCity}</span>
    </>
  )
}

export default ChangeCity;