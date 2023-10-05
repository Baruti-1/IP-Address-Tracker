import { useEffect } from 'react';
import DesktopMap from './DesktopMap';
import useFindLocation from '../hooks/useFindLocation';
import iconArrow from '../assets/images/icon-arrow.svg';

const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
  import.meta.env.VITE_API_KEY
}`;

const Desktop = () => {
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
      <div className="h-72 text-center dbgImg">
        <p className="text-white text-xl pt-24 font-bold">loading...</p>
      </div>
    );
  }

  return (
    <section id="desktop" className="hidden font-rubik md:block">
      <div className="h-64 text-center dbgImg">
        <h1 className="text-white pt-7 text-xl">IP Address Tracker</h1>
        <div className="flex justify-center pt-7">
          <form onSubmit={getLocationInfo} className="mr-10 w-full">
            <input
              required
              type="text"
              placeholder="Search for any IP address or domain"
              className="border-2 border-white text-sm text-verydarkgray pl-5 p-3 focus:outline-none rounded-l-lg w-[40%]"
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
        {/* address */}
        <div className="mx-auto w-[80%] mt-11">
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-around text-darkgray text-left">
              <div>
                <h2 className="text-darkgray uppercase">Ip address</h2>
                <div className="flex items-center border-r-2 h-16 font-bold">
                  <h2 className="pr-9 text-verydarkgray">{location.ip}</h2>
                </div>
              </div>
              <div>
                <h2 className="text-darkgray uppercase">Location</h2>
                <div className="flex items-center border-r-2 h-16 font-bold">
                  <h2 className="pr-9 text-verydarkgray">
                    {location.city}, {location.country}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-darkgray uppercase">Timezone</h2>
                <div className="flex items-center border-r-2 h-16 font-bold">
                  <h2 className="pr-9 text-verydarkgray">
                    {location.timezone}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-darkgray uppercase">Isp</h2>
                <div className="flex items-center h-16 font-bold">
                  <h2 className="text-verydarkgray">{location.isp}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="mx-auto w-full max-h-fit  mt-[-7.9rem]">
          <DesktopMap
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </div>
      </div>
    </section>
  );
};

export default Desktop;
