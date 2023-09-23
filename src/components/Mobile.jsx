import { TbMathGreater } from 'react-icons/tb';

const Mobile = () => {
  return (
    <section id="mobile" className="font-rubik md:hidden">
      <div className="h-72 text-center bg-[url('images/pattern-bg-mobile.png')] bg-no-repeat bg-cover">
        <h1 className="text-white text-xl pt-9">IP Address Tracker</h1>
        <div className="flex justify-center pt-7">
          <form>
            <input
              type="number"
              placeholder="192.212.174.101"
              className="text-[18px] text-darkgray pl-5 p-3 focus:outline-none rounded-l-lg"
            />
          </form>
          <button
            type="button"
            className="bg-verydarkgray p-3 rounded-r-lg text-white"
          >
            <TbMathGreater />
          </button>
        </div>
      </div>
      <div className="relative mx-auto text-center w-80 m-[-120px]">
        <div className="bg-white rounded-xl">
          <div className="pt-6">
            <h1 className="text-xs text-darkgray">IP ADDRESS</h1>
            <p className="text-md text-verydarkgray">192.212.174.101</p>
          </div>
          <div className="pt-3">
            <h2 className="text-xs text-darkgray">LOCATION</h2>
            <p className="text-md text-verydarkgray">Brooklyn, NY 10001</p>
          </div>
          <div className="pt-3">
            <h3 className="text-xs text-darkgray">TIMEZONE</h3>
            <p className="text-md text-verydarkgray">UTC -05:00</p>
          </div>
          <div className="pt-3">
            <h4 className="text-xs text-darkgray">ISP</h4>
            <p className="text-md text-verydarkgray">SpaceX Starlink</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
