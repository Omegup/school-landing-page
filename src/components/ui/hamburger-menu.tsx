import { ChevronDownIcon, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../ContactDialog";
import { navigationItems } from "../../config/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollContext } from "../../contexts/ScrollContext";
import { Button } from "./button";

interface HamburgerMenuProps {}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const { i18n, t } = useTranslation("navigation");
  const { scrollToSection } = useScrollContext();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-black" />
        ) : (
          <Menu className="h-6 w-6 text-black" />
        )}
      </Button>

      {isOpen && (
        <div className=" fixed inset-0 z-50  p-12 bg-[#DEEAFF66]   outline outline-1 outline-offset-[-1px] outline-white/90 backdrop-blur-xl inline-flex flex-col justify-between items-center">
          <div className="w-44 inline-flex justify-start items-center gap-2.5">
            <div className="w-8 h-10 relative">
              <img src="/Logo.svg" alt="logo" />
            </div>
            <div className="text-center justify-start text-nowrap">
              <span className="text-blue-500 text-xl font-normal font-['Krona_One'] leading-snug">
                Forfellow
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            {navigationItems.map((navItem, index) => {
              const isActive = activeSection === navItem.id;

              if (navItem.labelKey === "pricing") {
                return (
                  <ContactDialog key={navItem.id}>
                    <div
                      className={`self-stretch p-2.5 bg-transparent rounded-[20px] inline-flex justify-center items-center gap-2.5 cursor-pointer`}
                    >
                      <div
                        className={`text-center justify-start text-[#323232] text-sm font-medium font-['Quicksand'] leading-tight`}
                      >
                        {t(navItem.labelKey)}
                      </div>
                    </div>
                  </ContactDialog>
                );
              }

              return (
                <div
                  onClick={() => handleNavClick(navItem.id)}
                  key={navItem.id}
                  className={`self-stretch p-2.5 ${
                    isActive ? "bg-[#3879f0]" : "bg-transparent"
                  } rounded-[20px] inline-flex justify-center items-center gap-2.5 cursor-pointer`}
                >
                  <div
                    className={`text-center justify-start ${
                      isActive ? "text-indigo-100" : "text-[#323232]"
                    } text-sm font-medium font-['Quicksand'] leading-tight`}
                  >
                    {t(navItem.labelKey)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="self-stretch flex flex-col justify-center items-center gap-4">
            <div
              onClick={toggleLanguage}
              className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]  md:flex"
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
              <div
                data-property-1="Selected"
                className="self-stretch h-8 px-2.5 py-[5px] bg-[#3879f0] rounded-[20px] inline-flex justify-center items-center gap-2.5 cursor-pointer"
              >
                <div className="text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
                  {t("demo")}
                </div>
                <div className="w-6 h-6 relative origin-top-left rotate-[-25deg]">
                  <img
                    className="relative w-[31.89px] h-[31.89px] mt-[3px] mb-[-3.95px]"
                    alt="Arrow pointing right"
                    src="/vuesax-linear-arrow-right.svg"
                  />
                </div>
              </div>
            </ContactDialog>
          </div>
        </div>
      )}
    </div>
  );
};
