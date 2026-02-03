import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";
import { navigationItems } from "../../../../config/navigation";
import { useSchoolUpData } from "../../../../lib/schoolUp-data";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  const [activeMainTab, setActiveMainTab] = useState("admin");
  const [activeSubTab, setActiveSubTab] = useState("dashboard");
  const { t } = useTranslation("features");
  const schoolUpData = useSchoolUpData();

  // Get dynamic data from schoolUpData
  const mainTabs = schoolUpData.mainTabs;

  // Get current active main tab data
  const currentMainTab = useMemo(() => {
    return mainTabs.find((tab) => tab.id === activeMainTab) || mainTabs[0];
  }, [activeMainTab, mainTabs]);

  // Get dynamic subTabs based on current main tab
  const subTabs = useMemo(() => {
    return currentMainTab?.subTabs || [];
  }, [currentMainTab]);

  // Get dynamic features based on current main tab and sub tab
  const features = useMemo(() => {
    const featureData =
      currentMainTab?.featuresBySubTab?.[
        activeSubTab as keyof typeof currentMainTab.featuresBySubTab
      ];
    return featureData?.features || [];
  }, [currentMainTab, activeSubTab]);

  // Get images for current selection
  const images = useMemo(() => {
    const featureData =
      currentMainTab?.featuresBySubTab?.[
        activeSubTab as keyof typeof currentMainTab.featuresBySubTab
      ];
    return featureData?.images || [];
  }, [currentMainTab, activeSubTab]);

  // Reset activeSubTab when mainTab changes
  const handleMainTabChange = (tabId: string) => {
    setActiveMainTab(tabId);
    const newMainTab = mainTabs.find((tab) => tab.id === tabId);
    if (newMainTab?.subTabs && newMainTab.subTabs.length > 0) {
      setActiveSubTab(newMainTab.subTabs[0].id);
    }
  };

  const { primaryBgClass, lightTextClass } = useMemo(
    () => mainTabs.find((tab) => tab.id === activeMainTab) || {},
    [activeMainTab, mainTabs]
  );

  return (
    <section
      id={navigationItems[4].id}
      className="flex flex-col flex-start w-full items-start gap-[15px] "
    >
      <div className="w-full mt-[-1.00px] text-[#323232] font-['Krona_One'] text-[24px] font-normal leading-[110%] tracking-[-1.536px]">
        <span>{t("title")} </span>
        <span className="pl-1 text-[#3879f0]">{t("schoolName")}</span>
      </div>
      <div className="relative w-full text-[#323232] font-['Quicksand'] text-[16px] font-medium leading-[150%]">
        {t("subtitle")}
      </div>

      <div className="flex flex-col w-full">
        <div
          className={`overflow-scroll flex flex-nowrap items-end gap-2 md:gap-[15px] px-4 md:px-[50px] py-4 md:py-[25px] relative self-stretch w-full flex-[0_0_auto] ${
            mainTabs.find((tab) => tab.id === activeMainTab)?.primaryBgClass ||
            "bg-[#3879F0]"
          } rounded-[25px_25px_0px_0px] md:rounded-[50px_50px_0px_0px]`}
        >
          {mainTabs.map((tab) => {
            const Icon = tab.Icon;
            return (
              <Button
                key={tab.id}
                onClick={() => handleMainTabChange(tab.id)}
                className={`flex flex-col md:flex-row items-center justify-center gap-15 md:gap-2.5 px-2 md:px-5 py-2 md:py-2.5 relative md:flex-1 grow rounded-[20px] md:rounded-[50px] h-auto text-xs md:text-sm ${
                  activeMainTab === tab.id
                    ? `${tab.secondaryBgClass} ${tab.primaryTextClass}`
                    : "bg-transparent text-white"
                }`}
                variant="ghost"
              >
                <div
                  className={`h-[16px] w-auto  bg-transparent ${
                    activeMainTab === tab.id
                      ? `${tab.secondaryBgClass} ${tab.primaryTextClass} `
                      : ""
                  }`}
                >
                  <Icon />
                </div>
                <div className="w-fit mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-xs md:text-[length:var(--quicksand-easyread-semibold-font-size)] text-center tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[16px] md:leading-[var(--quicksand-easyread-semibold-line-height)] md:whitespace-nowrap [font-style:var(--quicksand-easyread-semibold-font-style)]">
                  {tab.label}
                </div>
              </Button>
            );
          })}
        </div>

        <div
          className={`flex flex-col h-auto md:h-[638px] items-start gap-4 md:gap-5 p-4 md:p-[25px]   w-full ${
            mainTabs.find((tab) => tab.id === activeMainTab)
              ?.secondaryBgClass || "bg-[#DEEAFF]"
          } rounded-[0px_0px_25px_25px] md:rounded-[0px_0px_50px_50px] border-0`}
        >
          <div className="flex items-start gap-2 md:gap-5   w-full flex-[0_0_auto]  overflow-x-scroll scrollbar-hide  pb-2">
            {subTabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`inline-flex items-center justify-center gap-1 md:gap-2.5 px-3 md:px-5 py-2 md:py-2.5  flex-[0_0_auto] rounded-[25px] md:rounded-[50px] h-auto whitespace-nowrap ${
                  activeSubTab === tab.id
                    ? `${primaryBgClass || "bg-[#3879F0]"} hover:${
                        primaryBgClass || "bg-[#3879F0]"
                      } ${lightTextClass || "text-[#DEEAFF]"} hover:${
                        lightTextClass || "text-[#DEEAFF]"
                      }`
                    : "bg-transparent text-[#323232] hover:bg-transparent"
                }`}
                variant="ghost"
              >
                <div className=" w-fit mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-xs md:text-[length:var(--quicksand-easyread-semibold-font-size)] text-center tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[16px] md:leading-[var(--quicksand-easyread-semibold-line-height)] whitespace-nowrap [font-style:var(--quicksand-easyread-semibold-font-style)]">
                  {tab.label}
                </div>
              </Button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 w-full flex-[0_0_auto] md:h-[524px]">
            <div className="flex flex-col items-start gap-3 md:gap-[15px] h-full overflow-scroll order-2 md:order-1">
              {features.map(
                (
                  feature: { title: string; description: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="relative [font-family:'Quicksand',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-4 md:leading-4"
                  >
                    <span className="font-[number:var(--quicksand-easyread-semibold-font-weight)] leading-[var(--quicksand-easyread-semibold-line-height)] font-quicksand-easyread-semibold [font-style:var(--quicksand-easyread-semibold-font-style)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] text-[length:var(--quicksand-easyread-semibold-font-size)]">
                      {feature.title}
                      <br />
                    </span>

                    <span className="font-medium text-xs md:text-sm leading-[18px] md:leading-[21px]">
                      {feature.description
                        .split("\n")
                        .map((line: string, lineIndex: number) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex <
                              feature.description.split("\n").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))}
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="flex flex-1 min-w-fit md:justify-end justify-stretch gap-5 overflow-scroll w-full h-full order-1 md:order-2">
              {images.map((image: string, index: number) => (
                <img
                  key={image}
                  src={image}
                  alt={`${currentMainTab?.label} - ${activeSubTab} - ${
                    index + 1
                  }`}
                  className={`object-contain rounded-[10px] ${
                    activeMainTab === "admin"
                      ? "md:max-w-[734px]"
                      : "md:min-w-[216px] md:w-auto"
                  } md:h-full w-full h-auto`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
