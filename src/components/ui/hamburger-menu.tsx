import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../ContactDialog";
import { DemoPortalLink } from "../DemoPortalLink";
import { LanguageSwitcher } from "./language-switcher";
import { navigationItems } from "../../config/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollContext } from "../../contexts/ScrollContext";
import { Button } from "./button";

export const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const { t } = useTranslation("navigation");
  const { scrollToSection } = useScrollContext();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
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
      {!isOpen && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="p-2 [&_svg]:size-6"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6 text-black" />
        </Button>
      )}

      {isOpen && (
        <div className="ios-glass fixed inset-0 z-50 inline-flex flex-col items-center justify-between p-12 outline outline-1 outline-offset-[-1px] [outline-color:rgba(255,255,255,0.9)]">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 p-2 [&_svg]:size-6"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6 text-black" />
          </Button>
          <div className="inline-flex w-44 items-center gap-2.5">
            <div className="relative h-10 w-8">
              <img src="/Logo.svg" alt="logo" />
            </div>
            <span className="text-nowrap text-center font-['Krona_One'] text-xl font-normal leading-snug text-blue-500">
              Forfellow
            </span>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch">
            {navigationItems.map((navItem) => {
              const isActive = activeSection === navItem.id;

              if (navItem.labelKey === "pricing") {
                return (
                  <ContactDialog key={navItem.id}>
                    <div className="p-2.5 rounded-[20px] inline-flex w-full justify-center items-center cursor-pointer">
                      <div className="text-center text-[#323232] text-sm font-medium font-['Quicksand'] leading-tight">
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
                  className={`p-2.5 ${
                    isActive ? "bg-[#3879f0]" : "bg-transparent"
                  } rounded-[20px] inline-flex w-full justify-center items-center cursor-pointer`}
                >
                  <div
                    className={`text-center ${
                      isActive ? "text-indigo-100" : "text-[#323232]"
                    } text-sm font-medium font-['Quicksand'] leading-tight`}
                  >
                    {t(navItem.labelKey)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 self-stretch">
            <LanguageSwitcher placement="top" />
            <DemoPortalLink className="inline-flex h-8 cursor-pointer items-center justify-center gap-2.5 self-stretch rounded-[20px] bg-[#3879f0] px-2.5 py-[5px]">
              <div className="text-center font-['Quicksand'] text-sm font-medium leading-tight text-indigo-100">
                {t("demo")}
              </div>
              <div className="relative h-6 w-6 origin-top-left rotate-[-25deg]">
                <img
                  className="relative mb-[-3.95px] mt-[3px] h-[31.89px] w-[31.89px]"
                  alt=""
                  src="/vuesax-linear-arrow-right.svg"
                />
              </div>
            </DemoPortalLink>
          </div>
        </div>
      )}
    </div>
  );
};
