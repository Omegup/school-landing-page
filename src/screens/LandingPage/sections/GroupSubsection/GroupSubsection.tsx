import { ChevronDownIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../../../../components/ContactDialog";
import { HamburgerMenu } from "../../../../components/ui/hamburger-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { navigationItems } from "../../../../config/navigation";
import { useActiveSection } from "../../../../hooks/useActiveSection";
import { useScrollContext } from "../../../../contexts/ScrollContext";

export const GroupSubsection = (): JSX.Element => {
  const activeSection = useActiveSection();
  const { t, i18n } = useTranslation("navigation");
  const { scrollToSection } = useScrollContext();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  const handleNavClick = (sectionId: string) => {
    console.log("Navigating to section:", sectionId);
    scrollToSection(sectionId);
  };

  return (
    <section
      id={navigationItems[0].id}
      className="w-full h-auto md:h-[61px] relative flex items-center justify-between px-0 py-2.5"
    >
      <div className="flex items-center gap-2.5">
        <div className=" w-full h-auto">
          <div className=" w-full h-auto bg-[100%_100%]">
            <img
              className=" w-8 h-8 top-0 left-0"
              alt="ForFellow logo icon"
              src="/vector-4.svg"
            />
          </div>
        </div>

        <div className="relative w-fit mr-[-1.15px] [font-family:'Krona_One',Helvetica] font-normal text-transparent text-xl text-center leading-5 whitespace-nowrap">
          <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
            ForFellow
          </span>
        </div>
      </div>

      <HamburgerMenu />

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="gap-2 lg:gap-5 px-3 lg:px-5 py-2.5 bg-[#dee9ff66] rounded-[50px] shadow-drop-shadow-100 flex items-center justify-center">
          {navigationItems.map((item, index) => {
            if (item.labelKey === "pricing") {
              return (
                <NavigationMenuItem key={index}>
                  <ContactDialog>
                    <NavigationMenuLink
                      className={`gap-1 lg:gap-2.5 p-1.5 lg:p-2.5 flex items-center  justify-center rounded-[20px] cursor-pointer opacity-70`}
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-xs lg:text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap text-black`}
                      >
                        {t(item.labelKey)}
                      </div>
                    </NavigationMenuLink>
                  </ContactDialog>
                </NavigationMenuItem>
              );
            }
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  onClick={() => handleNavClick(item.id)}
                  className={`gap-1 lg:gap-2.5 p-1.5 lg:p-2.5 flex items-center  justify-center rounded-[20px] cursor-pointer ${
                    activeSection === item.id ? "bg-blue" : "opacity-70"
                  }`}
                >
                  <div
                    className={`relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-xs lg:text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap  ${
                      activeSection === item.id
                        ? "text-light-blue"
                        : "text-black"
                    }`}
                  >
                    {t(item.labelKey)}
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="inline-flex items-center gap-3 md:gap-[18px] hidden lg:flex">
        <div
          onClick={toggleLanguage}
          className="inline-flex items-center gap-[5px] relative flex-[0_0_auto] hidden md:flex"
        >
          <img
            className="relative w-6 h-6"
            alt="Language circle"
            src="/language-circle.svg"
          />
          <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
            {i18n.language.toUpperCase()}
          </div>
          <ChevronDownIcon className="relative w-[21px] h-[21px]" />
        </div>
        <ContactDialog>
          <button className="h-8 px-2.5 py-[5px] bg-[#3879F0] hover:opacity-75 rounded-[20px] inline-flex justify-center items-center gap-2.5">
            <div className="whitespace-nowrap text-ellipsis overflow-hidden text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
              {t("demo")}
            </div>
            <img
              className="relative w-[24px] h-[24px] mt-[-3.95px] mb-[-3.95px]"
              alt="Arrow pointing right"
              src="/vuesax-linear-arrow-right.svg"
            />
          </button>
        </ContactDialog>
      </div>
    </section>
  );
};
