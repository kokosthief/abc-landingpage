import { CheckCircleIcon } from "@heroicons/react/20/solid";

const bullishPoints = [
  "Total token supply: 1,000,000",
  "100% of supply added",
  "No team tokens",
  "Max wallet: 2%",
];

const OTSea = () => (
  <section className="h-fit py-20">
    <div className="container flex flex-wrap sm:py-40 mx-auto px-0  md:px-20">
      <div className="flex flex-col sm:flex-row justify-center gap-6 mx-auto">
        <iframe
          style={{ borderRadius: 24 }}
          width={400}
          height={540}
          allow="ethereum"
          src="https://otsea.xyz/mini-market?tokenAddress=0xD4d4B7b55B30fB096C30ad202e746d010B47dc30"
        />
      </div>
    </div>
  </section>
);

export default OTSea;
