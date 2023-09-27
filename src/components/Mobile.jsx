import { useState, useEffect } from 'react';
import MobileMap from './MobileMap';

// const url = `https://geo.ipify.org/api/v2/country?apiKey=${
//   import.meta.env.VITE_API_KEY
// }`;

// url2 = `https://geo.ipify.org/api/v2/country?apiKey=${
//   import.meta.env.VITE_API_KEY
// }&ipAddress=${location.ip}`

const map_url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
  import.meta.env.VITE_API_KEY
}`;

const Mobile = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    ip: '',
    country: '',
    city: '',
    timezone: '',
    isp: '',
  });

  //const url = '';

  const fetchLocation = (map_url) => {
    setLoading(true);
    fetch(map_url)
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          ip: data.ip,
          country: data.location.country,
          city: data.location.city,
          timezone: data.location.timezone,
          isp: data.isp,
        });
        console.log('DATA: ', data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLocation(map_url);
  }, []);

  const getLocationInfo = (e) => {
    e.preventDefault();
    fetchLocation(url2);
  };

  if (loading) {
    return (
      <div className="h-72 text-center bg-[url('images/pattern-bg-mobile.png')] bg-no-repeat bg-cover">
        <p className="text-white text-xl pt-24 font-bold">loading...</p>
      </div>
    );
  }

  return (
    <>
      <section id="mobile" className="font-rubik md:hidden">
        <div className="h-72 text-center bg-[url('images/pattern-bg-mobile.png')] bg-no-repeat bg-cover">
          <h1 className="text-white text-xl pt-9">IP Address Tracker</h1>
          <div className="flex justify-center pt-7">
            <form onSubmit={getLocationInfo} className="mr-10">
              <input
                required
                type="text"
                placeholder={location.ip}
                className="border-2 border-white text-[18px] text-darkgray pl-5 p-2 focus:outline-none rounded-l-lg"
                onChange={(e) =>
                  setLocation({ ...location, ip: e.target.value })
                }
              />
              <button
                type="submit"
                className="bg-verydarkgray absolute bottom-29 p-[1.05rem] rounded-r-lg text-white"
              >
                <img src={'images/icon-arrow.svg'} />
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto text-center w-80 mt-[-120px] z-40">
          <div className="bg-white rounded-xl">
            <div className="pt-6">
              <h1 className="text-xs text-darkgray">IP ADDRESS</h1>
              <p className="text-md text-verydarkgray">{location.ip}</p>
            </div>
            <div className="pt-3">
              <h2 className="text-xs text-darkgray">LOCATION</h2>
              <p className="text-md text-verydarkgray">
                {location.city}, {location.country}
              </p>
            </div>
            <div className="pt-3">
              <h3 className="text-xs text-darkgray">TIMEZONE</h3>
              <p className="text-md text-verydarkgray">{location.timezone}</p>
            </div>
            <div className="pt-3 pb-6">
              <h4 className="text-xs text-darkgray">ISP</h4>
              <p className="text-md text-verydarkgray">{location.isp}</p>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="mx-auto max-w-full max-h-fit  mt-[-7.9rem]">
          <MobileMap />
        </div>
      </section>
    </>
  );
};

export default Mobile;
