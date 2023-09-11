import LogoMobile from "../../assets/logo-mobile.png";
import LogoPC from "../../assets/logo-pc.png";
import subscribeBG from "../../assets/subscribe-bg.jpg";
import { SubscribeCard } from "../../components/SubscribeCard/SubscribeCard";

export const SubscriptionPage = () => {
  return (
    <div
      className="w-full overflow-hidden bg-cover bg-no-repeat min-h-screen py-4 ss:py-6"
      style={{ backgroundImage: `url(${subscribeBG})` }}
    >
      <div className="max-w-[1160px] mx-auto w-full  px-5">
        <header className="mb-[2.875rem] ss:mb-8">
          <picture>
            <source
              srcSet={LogoMobile}
              media="(max-width: 600px)"
              width={305}
              height={62}
            />
            <img srcSet={LogoPC} alt="logo" width={377} height={76} />
          </picture>
        </header>
        <main>
          <SubscribeCard />
        </main>
      </div>
    </div>
  );
};
