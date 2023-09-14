import LogoMobile from "../../assets/logo-mobile.png";
import LogoPC from "../../assets/logo-pc.png";

export const Logo = () => {
  return (
    <picture>
      <source
        srcSet={LogoMobile}
        media="(max-width: 600px)"
        width={305}
        height={62}
      />
      <img srcSet={LogoPC} alt="logo" width={377} height={76} />
    </picture>
  );
};
