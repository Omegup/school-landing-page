import { Card, CardContent } from "../../../../components/ui/card";
import { navigationItems } from "../../../../config/navigation";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../../../../components/ContactDialog";
import { useScrollContext } from "../../../../contexts/ScrollContext";

export const FrameSubsection = (): JSX.Element => {
  const { t } = useTranslation("hero");
  const { scrollToSection } = useScrollContext();
  const heroBackground = "/hero.jpg";

  const handleFeaturesClick = () => {
    scrollToSection("features");
  };

  return (
    <section
      id={navigationItems[0].id}
      className="flex flex-col w-full items-start  box-border shadow-drop-shadow-100 md:max-h-[1076px] max-h-[763px]"
    >
      <Card className="w-full flex flex-col  px-[20px] pt-[25px] h-[989px] md:px-[105px] gap-[25px] md:gap-[50px] md:pt-[50px] box-border bg-[#dee9ffb2] rounded-[25px] md:rounded-[50px_50px_0px_0px] border-0 overflow-hidden">
        <CardContent className="flex flex-col w-full items-center gap-5 md:gap-5 p-0 pt-0">
          <h1 className="w-full mt-[-1.00px] [font-family:'Krona_One',Helvetica] font-normal text-black text-2xl md:text-[34px] text-center tracking-[-1.5px] md:tracking-[-2.18px] leading-[28px] md:leading-[37.4px]">
            <span className="text-[#323232] tracking-[-0.74px]">
              {t("mainTitle.part1")}
            </span>
            <span className="text-[#3879f0] tracking-[-0.74px]">
              {t("mainTitle.part2")}
            </span>
            <span className="text-[#323232] tracking-[-0.74px]">
              {t("mainTitle.part3")}
            </span>
          </h1>

          <h2 className=" w-full font-mysticgrove-enchantedcharm font-[number:var(--mysticgrove-enchantedcharm-font-weight)] text-black text-lg md:text-[length:var(--mysticgrove-enchantedcharm-font-size)] text-center tracking-[-1px] md:tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-enchantedcharm-line-height)] [font-style:var(--mysticgrove-enchantedcharm-font-style)]">
            <span className="text-[#323232] tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] font-mysticgrove-enchantedcharm [font-style:var(--mysticgrove-enchantedcharm-font-style)] font-[number:var(--mysticgrove-enchantedcharm-font-weight)] leading-[var(--mysticgrove-enchantedcharm-line-height)] text-[length:var(--mysticgrove-enchantedcharm-font-size)]">
              {t("subtitle.part1")}
            </span>
            <span className="text-[#3879f0] tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] font-mysticgrove-enchantedcharm [font-style:var(--mysticgrove-enchantedcharm-font-style)] font-[number:var(--mysticgrove-enchantedcharm-font-weight)] leading-[var(--mysticgrove-enchantedcharm-line-height)] text-[length:var(--mysticgrove-enchantedcharm-font-size)]">
              {t("subtitle.part2")}
            </span>
            <span className="text-[#323232] tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] font-mysticgrove-enchantedcharm [font-style:var(--mysticgrove-enchantedcharm-font-style)] font-[number:var(--mysticgrove-enchantedcharm-font-weight)] leading-[var(--mysticgrove-enchantedcharm-line-height)] text-[length:var(--mysticgrove-enchantedcharm-font-size)]">
              {t("subtitle.part3")}
            </span>
          </h2>

          <p className=" w-full [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base text-center tracking-[0] leading-5 md:leading-6 px-4 md:px-0">
            &quot;{t("description")}&quot;
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[15px] relative w-full flex-[0_0_auto]">
            <ContactDialog>
              <button
                className="h-8 px-2.5 py-[5px] bg-[#3879F0]  hover:opacity-75 rounded-[20px] inline-flex justify-center items-center gap-2.5"
                aria-label="Request a demo of Forfellow"
              >
                <div className="text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
                  {t("demoButton")}
                </div>
                <img
                  className="relative w-[24px] h-[24px] mt-[-3.95px] mb-[-3.95px]"
                  alt="Arrow pointing right"
                  src="/vuesax-linear-arrow-right.svg"
                />
              </button>
            </ContactDialog>
            <button
              onClick={handleFeaturesClick}
              className="px-2.5 py-[5px] hover:bg-indigo-100 hover:text-[#3879F0] rounded-[20px] inline-flex justify-center items-center gap-[5px]"
              aria-label="View Forfellow features"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 11H7.5C10 11 11 10 11 7.5V4.5C11 2 10 1 7.5 1H4.5C2 1 1 2 1 4.5V7.5C1 10 2 11 4.5 11Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 1V11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 4.25H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7.75H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="justify-start  text-blue-500 text-base font-medium font-['Quicksand'] leading-normal">
                {t("featuresButton")}
              </div>
            </button>
          </div>
        </CardContent>
        <img
          src={heroBackground}
          alt="Forfellow platform dashboard showing student management interface and educational tools"
          className="block rounded-[50px] border-[5px] rounded-b-none  border-b-0 border-solid border-[#494949] bg-cover bg-[50%_50%] h-auto w-full object-contain"
        />
      </Card>
      <div className="self-stretch px-12 py-6 bg-[#3879f0] box-border h-[87px] rounded-bl-[50px] rounded-br-[50px] inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden sm:h-[94px]">
        <div className="self-stretch text-center justify-start text-indigo-100 text-[20px] md:text-[34px] font-normal font-['Krona_One'] leading-[110%] tracking-[-1.28px] md:tracking-[-2.176px]">
          {t("tagline")}
        </div>
      </div>
    </section>
  );
};
