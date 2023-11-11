import { Wrapper } from "./Components";

const Main = () => {
  return (
    <main className="w-full mt-5 z-10 relative lg:pl-[30px] lg:pr-[10px] xl:px-[80px] 2xl:px-[160px] px-2 py-2 pb-10 flex-[1_0_auto]">
      <div className="flex xl:justify-between flex-wrap justify-center">
        <section className="z-20 flex flex-col relative">
          <h1 className="lg:text-[96px] text-[70px] lg:text-left text-center text-[#2DA831] font-sans tracking-[-0.001em] leading-[1] lg:leading-tight max-w-[600px] ">
            LEARN TO RECYCLE TRACK IT & KEEP DOING
          </h1>
          <p className="text-center max-w-[600px] py-10 text-[18px] lg:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <img
          className="z-10 sm:max-w-[512px] sm:max-h-[512px] max-w-[256] max-h-[256px] relative"
          src="/planet-earth (3).png"
        />
      </div>
    </main>
  );
};

export default Main;
