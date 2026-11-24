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
        <div className="fixed inset-0 z-50 flex flex-col justify-between gap-6 overflow-y-auto bg-[#f4f8ff] p-6">
          <div className="flex w-full items-center justify-between">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-8 h-10 relative">
                <img src="/Logo.svg" alt="logo" />
              </div>
              <span className="text-blue-500 text-xl font-normal font-['Krona_One'] leading-snug">
                Forfellow
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-2 [&_svg]:size-6"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 text-black" />
            </Button>
          </div>
          <div className="flex flex-col items-stretch gap-2">
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
                      isActive ? "text-white" : "text-[#323232]"
                    } text-sm font-medium font-['Quicksand'] leading-tight`}
                  >
                    {t(navItem.labelKey)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-4 pb-2">
            <LanguageSwitcher placement="top" />
            <DemoPortalLink className="h-8 w-full px-2.5 py-[5px] bg-[#3879f0] rounded-[20px] inline-flex justify-center items-center gap-2.5 cursor-pointer">
              <div className="text-center text-white text-sm font-medium font-['Quicksand'] leading-tight">
                {t("demo")}
              </div>
              <img
                className="relative w-6 h-6"
                alt=""
                src="/vuesax-linear-arrow-right.svg"
              />
            </DemoPortalLink>
          </div>
        </div>
      )}
    </div>
  );
};
