import { useEffect, useState } from "react";

const useArrangeNavbar = () => {
  const [isBannerHidden, setIsBannerHidden] = useState(false);

  useEffect(() => {
    const syncBannerState = () => {
      setIsBannerHidden(window.innerWidth > 768 && window.scrollY > 0);
    };

    window.addEventListener("resize", syncBannerState);
    window.addEventListener("scroll", syncBannerState);
    syncBannerState();

    return () => {
      window.removeEventListener("resize", syncBannerState);
      window.removeEventListener("scroll", syncBannerState);
    };
  }, []);

  return isBannerHidden;
};

export default useArrangeNavbar;