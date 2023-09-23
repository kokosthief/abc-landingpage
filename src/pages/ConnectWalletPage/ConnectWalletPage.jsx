import subscribeBG from "../../assets/subscribe-bg.webp";
import { ConnectWalletCard } from "../../components/ConnectWalletCard";
import { Logo } from "../../components/ui/Logo";

export const ConnectWalletPage = () => {
  return (
    <div
      className="w-full overflow-hidden bg-cover bg-no-repeat min-h-screen py-4 ss:py-6"
      style={{ backgroundImage: `url(${subscribeBG})` }}
    >
      <div className="max-w-[1160px] mx-auto w-full  px-5">
        <header className="mb-[2.875rem] ss:mb-8">
          <Logo />
        </header>
        <main>
          <ConnectWalletCard />
        </main>
      </div>
    </div>
  );
};
