import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../../../../components/ContactForm";
import { navigationItems } from "../../../../config/navigation";
import { Logo } from "./Logo";

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
              <Logo width="30" height="30" />
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
