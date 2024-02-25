const OTSea = () => (
  <section className="h-fit py-20 sm:py-0">
    <div className="h-auto mx-auto -mt-20 pb-32 ">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className=" font-league font-bold text-white pt-16 text-6xl xs:mt-16 sm:text-8xl  md:text-8xl xl:text-8xl  ">
          <span className="text-[white] ">Buy OTC</span>
        </h1>

        <p className="font-spacegrotesk my-6 text-xl sm:text-2xl leading-8 text-white">
          Over the counter deals buying and selling $ABC.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-6 pt-10 mx-auto ">
        <iframe
          style={{ borderRadius: 24 }}
          width={400}
          height={540}
          allow="ethereum"
          src="https://otsea.xyz/mini-market?tokenAddress=0x52B552c4a698c9B1De4c7fe0Dd4462AF141F7C3e"
        />
      </div>
    </div>
  </section>
);

export default OTSea;
