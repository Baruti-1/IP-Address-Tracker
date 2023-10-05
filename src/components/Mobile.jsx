import { useEffect } from 'react';
import useFindLocation from '../hooks/useFindLocation';
import MobileMap from './MobileMap';
import iconArrow from '../assets/images/icon-arrow.svg';

const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
  import.meta.env.VITE_API_KEY
}`;

const Mobile = () => {
  const { loading, location, fetchLocation } = useFindLocation();

  useEffect(() => {
    fetchLocation(url);
  }, []);

  let ip = '';

  const getLocationInfo = (e) => {
    e.preventDefault();
    fetchLocation(url + `&ipAddress=${ip}`);
  };

  if (loading) {
    return (
      <div className="bgImg h-72 text-center">
        <p className="text-white text-xl pt-24 font-bold">loading...</p>
      </div>
    );
  }

  return (
    <section id="mobile" className="font-rubik md:hidden">
      <div className="bgImg h-72 text-center">
        <h1 className="text-white text-xl pt-9">IP Address Tracker</h1>
        <div className="flex justify-center pt-7">
          <form onSubmit={getLocationInfo} className="mr-10">
            <input
              required
              type="text"
              placeholder={location.ip}
              className="border-2 border-white text-[18px] text-darkgray pl-5 p-2 focus:outline-none rounded-l-lg"
              onChange={(e) => (ip = e.target.value)}
            />
            <button
              type="submit"
              className="bg-verydarkgray absolute bottom-29 p-[1.05rem] rounded-r-lg text-white"
            >
              <img src={iconArrow} />
            </button>
          </form>
        </div>
      </div>
      {/* address */}
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
        <MobileMap
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
    </section>
  );
};

export default Mobile;
