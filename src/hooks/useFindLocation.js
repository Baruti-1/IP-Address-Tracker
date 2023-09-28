import { useState } from 'react';

const useFindLocation = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    ip: '',
    country: '',
    city: '',
    timezone: '',
    isp: '',
    latitude: '',
    longitude: '',
  });

  const fetchLocation = (url) => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          ip: data.ip,
          country: data.location.country,
          city: data.location.city,
          timezone: data.location.timezone,
          isp: data.isp,
          latitude: data.location.lat,
          longitude: data.location.lng,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        setLoading(false);
      });
  };

  return { loading, location, fetchLocation };
};

export default useFindLocation;
