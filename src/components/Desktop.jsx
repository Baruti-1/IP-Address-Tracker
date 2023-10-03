import React from 'react';

const Desktop = () => {
  return (
    <section id="desktop" className="hidden font-rubik md:block">
      <div className="h-64 text-center bg-[url('images/pattern-bg-desktop.png')] bg-no-repeat bg-cover">
        <h1 className="text-white pt-7 text-xl">IP Address Tracker</h1>
        <div className="flex justify-center pt-7">
          <form onSubmit={() => {}} className="mr-10 w-full">
            <input
              required
              type="text"
              placeholder="Search for any IP adress or domain"
              className="border-2 border-white text-[18px] text-darkgray pl-5 p-2 focus:outline-none rounded-l-lg w-[40%]"
              onChange={(e) => (ip = e.target.value)}
            />
            <button
              type="submit"
              className="bg-verydarkgray absolute bottom-29 p-[1.05rem] rounded-r-lg text-white"
            >
              <img src={'images/icon-arrow.svg'} />
            </button>
          </form>
        </div>
        <div className="mx-auto w-[80%] mt-11">
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-around text-darkgray text-left">
              <div>
                <h2 className="text-darkgray uppercase">Ip address</h2>
                <div className="flex items-center border-r-2 h-16 font-bold">
                  <h2 className="pr-9 text-verydarkgray">192.212.174.101</h2>
                </div>
              </div>
              <div>
                <h2 className="text-darkgray uppercase">Location</h2>
                <div className="flex items-center border-r-2 h-16 font-bold">
                  <h2 className="pr-9 text-verydarkgray">Brooklyn, NY 10001</h2>
                </div>
              </div>
              <div>
                <h2 className="text-darkgray uppercase">Timezone</h2>
                <div className="flex items-center border-r-2 h-16 font-bold">
                  <h2 className="pr-9 text-verydarkgray">UTC -5:00</h2>
                </div>
              </div>
              <div>
                <h2 className="text-darkgray uppercase">Isp</h2>
                <div className="flex items-center h-16 font-bold">
                  <h2 className="text-verydarkgray">
                    SpaceX <br /> Starlink
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
