import { useTranslation } from "react-i18next";
import { ContactDialog } from "../../../../components/ContactDialog";
import { DemoPortalLink } from "../../../../components/DemoPortalLink";
import { LanguageSwitcher } from "../../../../components/ui/language-switcher";
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
  const { t } = useTranslation("navigation");
  const { scrollToSection } = useScrollContext();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <section
      id={navigationItems[0].id}
      className="w-full h-auto xl:h-[61px] relative flex items-center justify-between gap-3 px-0 py-2.5"
    >
      <div className="flex shrink-0 items-center gap-2.5">
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

      <NavigationMenu className="hidden min-w-0 lg:flex">
        <NavigationMenuList className="gap-2 px-3 py-2 xl:gap-4 xl:px-4 xl:py-2.5 bg-[#dee9ff66] rounded-[50px] shadow-drop-shadow-100 flex items-center justify-center">
          {navigationItems.map((item, index) => {
            if (item.labelKey === "pricing") {
              return (
                <NavigationMenuItem key={index}>
                  <ContactDialog>
                    <NavigationMenuLink
                      className="gap-1.5 px-2 py-1.5 xl:gap-2.5 xl:p-2.5 flex items-center justify-center rounded-[20px] cursor-pointer opacity-70"
                    >
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap text-black">
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
                  className={`gap-1.5 px-2 py-1.5 xl:gap-2.5 xl:p-2.5 flex items-center justify-center rounded-[20px] cursor-pointer ${
                    activeSection === item.id ? "bg-blue" : "opacity-70"
                  }`}
                >
                  <div
                    className={`relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap ${
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

      <div className="hidden lg:inline-flex shrink-0 items-center gap-2 xl:gap-[18px]">
        <LanguageSwitcher />
        <DemoPortalLink className="h-8 px-2.5 py-[5px] bg-[#3879F0] hover:opacity-75 rounded-[20px] inline-flex justify-center items-center gap-2.5">
          <div className="whitespace-nowrap text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
            {t("demo")}
          </div>
          <img
            className="relative w-[24px] h-[24px]"
            alt=""
            src="/vuesax-linear-arrow-right.svg"
          />
        </DemoPortalLink>
      </div>
    </section>
  );
};
