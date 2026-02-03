import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../../../../components/ContactForm";
import { navigationItems } from "../../../../config/navigation";

const useSearchParamsSafe = () => {
  return typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();
};

const socialIcons = [
  "/social-4.svg",
  "/social.svg",
  "/social-2.svg",
  "/social-3.svg",
  "/social-1.svg",
];

const contactInfo = [
  {
    icon: "/map.svg",
    text: "10, Cyber Park Zarzis, Medenine",
    href: "https://www.google.com/maps/place/OmegUp/@33.4966778,11.1157896,15z/data=!4m5!3m4!1s0x0:0xab85ea46c136a0b8!8m2!3d33.4966778!4d11.1157896?hl=en",
  },
  {
    icon: "/sms-tracking.svg",
    text: "contact@omegup.tn",
    href: "mailto:contact@omegup.tn",
  },
  {
    icon: "/call-incoming.svg",
    text: "+216 28 827 941",
    href: "tel:+216 28 827 941",
  },
];

export const Frame2Subsection = (): JSX.Element => {
  const { t } = useTranslation("contact");
  const [searchParams] = useSearchParamsSafe();
  const [isDesktop, setIsDesktop] = useState(false);

  const quickLinks = [
    t("footer.quickLinks.home"),
    t("footer.quickLinks.about"),
    t("footer.quickLinks.whyUs"),
    t("footer.quickLinks.features"),
    t("footer.quickLinks.pricing"),
    t("footer.quickLinks.contact"),
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <section
        id={navigationItems[5].id}
        className="flex flex-col w-full items-start relative"
      >
        <ContactForm />
      </section>
      <footer className="flex flex-col flex-wrap md:flex-row items-start gap-8 md:gap-[50px] px-6 md:px-[117px] py-8 md:py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-blue !m-0">
        <div className="inline-flex flex-col  items-start gap-2.5 relative flex-[0_0_auto] w-full md:w-auto">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[170.85px] items-center gap-2.5 relative flex-[0_0_auto]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="40"
                viewBox="0 0 32 40"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M30.1037 8.71815C28.0494 4.51764 24.079 1.41726 19.4765 0.39714C14.6568 -0.682991 9.71852 0.477149 5.94568 3.55752C2.15309 6.61789 0 11.1984 0 16.099C0 21.2797 3.06173 26.7003 7.68395 29.8407V31.5009C7.6642 32.061 7.64444 32.9211 8.31605 33.6212C9.00741 34.3412 10.0346 34.4213 10.8444 34.4213H20.9778C22.0444 34.4213 22.8543 34.1212 23.4074 33.5611C24.158 32.7811 24.1383 31.7809 24.1185 31.2409V29.8407C30.242 25.6602 34.0938 16.8391 30.1037 8.71815Z"
                  fill="#DEEAFF"
                />
                <path
                  d="M22.3011 40.002C22.1825 40.002 22.0443 39.982 21.9258 39.942C17.9554 38.8018 13.7875 38.8018 9.81711 39.942C9.08625 40.142 8.31588 39.7219 8.11835 38.9818C7.90106 38.2417 8.33563 37.4617 9.0665 37.2616C13.5307 35.9815 18.2319 35.9815 22.6961 37.2616C23.427 37.4817 23.8616 38.2417 23.6443 38.9818C23.4467 39.6019 22.8937 40.002 22.3011 40.002Z"
                  fill="#DEEAFF"
                />
                <path
                  d="M16 0.00195312C7.168 0.00195312 0 7.26043 0 16.2039C0 25.1474 7.168 32.4059 16 32.4059C24.832 32.4059 32 25.1474 32 16.2039C32 7.26043 24.832 0.00195312 16 0.00195312ZM24 24.7099H19.04C18.56 24.7099 18.128 24.4345 17.936 23.9808C17.744 23.5272 17.824 23.0249 18.144 22.6685L20.736 19.7683C21.808 18.5532 22.416 17.014 22.416 15.4262C22.416 13.806 21.76 12.283 20.56 11.1327C19.36 9.98236 17.696 9.31808 16 9.31808C14.304 9.31808 12.64 9.98236 11.44 11.1327C10.24 12.283 9.584 13.806 9.584 15.4262C9.584 17.014 10.176 18.5532 11.264 19.7683L13.84 22.6847C14.16 23.0411 14.24 23.5596 14.048 23.9971C13.856 24.4345 13.424 24.7261 12.944 24.7261H8C7.344 24.7261 6.8 24.1753 6.8 23.511C6.8 22.8467 7.344 22.2796 8 22.2796H10.256L9.472 21.4047C8 19.7521 7.184 17.6297 7.184 15.4262C7.184 13.1741 8.128 10.9545 9.792 9.36668C11.456 7.76269 13.648 6.88779 16 6.88779C18.352 6.88779 20.544 7.76269 22.208 9.36668C23.856 10.9545 24.816 13.1741 24.816 15.4262C24.816 17.6135 24 19.7359 22.528 21.4047L21.744 22.2796H24C24.656 22.2796 25.2 22.8305 25.2 23.4948C25.2 24.1591 24.656 24.7099 24 24.7099Z"
                  fill="#DEEAFF"
                />
              </svg>
              <div className="relative w-fit mr-[-1.15px] font-mysticgrove-whisperingxs font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-light-blue text-[length:var(--mysticgrove-whisperingxs-font-size)] text-center tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingxs-font-style)]">
                Forfellow
              </div>
            </div>

            <div className="flex w-full md:w-[428px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] font-quicksand-delicatescript font-[number:var(--quicksand-delicatescript-font-weight)] text-pearl-white text-xs md:text-[length:var(--quicksand-delicatescript-font-size)] tracking-[var(--quicksand-delicatescript-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-delicatescript-line-height)] [font-style:var(--quicksand-delicatescript-font-style)]">
                {t("footer.description")}
              </p>
            </div>
          </div>
          <div className="inline-flex  items-start gap-2.5 relative flex-[0_0_auto] md:justify-center justify-start w-full md:w-auto">
            {socialIcons.map((icon, index) => (
              <img
                key={`social-${index}`}
                className="relative w-6 h-6"
                alt="Social"
                src={icon}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[50px] relative flex-1 grow w-full">
          <div className="flex gap-2.5 flex-1 grow flex-col items-start relative w-full md:w-auto">
            <h3 className="relative w-fit mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-pearl-white text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] text-center md:text-left tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
              {t("footer.quickLinks.title")}
            </h3>

            <nav className="md:grid md:grid-cols-2 flex flex-col md:flex-col  gap-2 md:gap-[5px] flex-[0_0_auto] items-start  w-full">
              {quickLinks.map((link, index) => (
                <div
                  key={`link-${index}`}
                  className="inline-flex items-center  md:justify-start   gap-2.5 relative flex-[0_0_auto]"
                >
                  <a className="relative w-fit mt-[-1.00px] font-quicksand-delicatescript font-[number:var(--quicksand-delicatescript-font-weight)] text-white text-xs md:text-[length:var(--quicksand-delicatescript-font-size)] text-left md:text-center tracking-[var(--quicksand-delicatescript-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-delicatescript-line-height)] whitespace-nowrap [font-style:var(--quicksand-delicatescript-font-style)] hover:text-light-blue cursor-pointer">
                    {link}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex gap-2.5 flex-1 grow flex-col items-start relative w-full md:w-auto">
            <h3 className="relative w-fit mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-white text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] text-center md:text-left tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
              {t("footer.contact.title")}
            </h3>

            <div className="inline-flex gap-[5px] flex-[0_0_auto] flex-col items-start relative">
              {contactInfo.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
                >
                  <img
                    className="relative w-[21px] h-[21px]"
                    alt="Contact icon"
                    src={contact.icon}
                  />

                  <a
                    className="relative w-fit mt-[-1.00px] font-quicksand-delicatescript font-[number:var(--quicksand-delicatescript-font-weight)] text-white text-xs md:text-[length:var(--quicksand-delicatescript-font-size)] text-left md:text-center tracking-[var(--quicksand-delicatescript-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-delicatescript-line-height)] [font-style:var(--quicksand-delicatescript-font-style)] hover:text-light-blue break-words"
                    href={contact.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex h-auto md:h-[50px] items-center justify-center gap-2.5 px-4 md:px-2.5 py-4 md:py-[13px] relative self-stretch w-full bg-light-blue !m-0">
        <p className="relative w-fit mt-[-1.00px] font-quicksand-easyread font-[number:var(--quicksand-easyread-font-weight)] text-blue text-xs md:text-[length:var(--quicksand-easyread-font-size)] text-center tracking-[var(--quicksand-easyread-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-easyread-line-height)] [font-style:var(--quicksand-easyread-font-style)]">
          {t("footer.copyright")}
        </p>
      </div>
    </>
  );
};
