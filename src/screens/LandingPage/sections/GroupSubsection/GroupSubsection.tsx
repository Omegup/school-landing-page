import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
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

function edgeMask(left: boolean, right: boolean) {
  if (!left && !right) return undefined;
  const from = left ? "transparent" : "#000";
  const to = right ? "transparent" : "#000";
  return `linear-gradient(to right, ${from}, #000 2.25rem, #000 calc(100% - 2.25rem), ${to})`;
}

export const GroupSubsection = (): JSX.Element => {
  const activeSection = useActiveSection();
  const { t } = useTranslation("navigation");
  const { scrollToSection } = useScrollContext();
  const navRef = useRef<HTMLElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const syncEdges = () => {
    const nav = navRef.current;
    if (!nav) return;
    const items = nav.querySelectorAll("li");
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    const navRect = nav.getBoundingClientRect();
    const left = first.getBoundingClientRect().left < navRect.left - 2;
    const right = last.getBoundingClientRect().right > navRect.right + 2;
    setEdges((prev) =>
      prev.left === left && prev.right === right ? prev : { left, right },
    );
  };

  const nudge = (side: "left" | "right") => {
    const nav = navRef.current;
    if (!nav) return;
    const delta = Math.max(140, Math.round(nav.clientWidth * 0.55));
    const rtl = document.documentElement.dir === "rtl";
    const sign = side === "left" ? -1 : 1;
    nav.scrollBy({ left: (rtl ? -sign : sign) * delta, behavior: "smooth" });
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let originX = 0;
    let originScroll = 0;
    let dragging = false;
    let moved = false;

    const onWheel = (event: WheelEvent) => {
      if (nav.scrollWidth <= nav.clientWidth) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      nav.scrollLeft += event.deltaY;
      event.preventDefault();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || nav.scrollWidth <= nav.clientWidth) return;
      dragging = true;
      moved = false;
      originX = event.clientX;
      originScroll = nav.scrollLeft;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - originX;
      if (Math.abs(delta) < 8) return;
      if (!moved) {
        moved = true;
        try {
          nav.setPointerCapture(event.pointerId);
        } catch {
          /* pointer already released */
        }
      }
      nav.scrollLeft = originScroll - delta;
    };
    const onPointerUp = () => {
      dragging = false;
    };
    const onClick = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    const observer = new ResizeObserver(syncEdges);
    observer.observe(nav);
    const list = nav.querySelector("ul");
    if (list) observer.observe(list);

    nav.addEventListener("wheel", onWheel, { passive: false });
    nav.addEventListener("pointerdown", onPointerDown);
    nav.addEventListener("pointermove", onPointerMove);
    nav.addEventListener("pointerup", onPointerUp);
    nav.addEventListener("pointercancel", onPointerUp);
    nav.addEventListener("click", onClick, true);
    nav.addEventListener("scroll", syncEdges, { passive: true });
    syncEdges();
    return () => {
      observer.disconnect();
      nav.removeEventListener("wheel", onWheel);
      nav.removeEventListener("pointerdown", onPointerDown);
      nav.removeEventListener("pointermove", onPointerMove);
      nav.removeEventListener("pointerup", onPointerUp);
      nav.removeEventListener("pointercancel", onPointerUp);
      nav.removeEventListener("click", onClick, true);
      nav.removeEventListener("scroll", syncEdges);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>("[data-active='true']");
    if (!nav || !active) return;
    const navRect = nav.getBoundingClientRect();
    const itemRect = active.getBoundingClientRect();
    if (itemRect.left < navRect.left || itemRect.right > navRect.right) {
      nav.scrollLeft +=
        itemRect.left - navRect.left - (navRect.width - itemRect.width) / 2;
    }
  }, [activeSection]);

  const mask = edgeMask(edges.left, edges.right);

  return (
    <section
      id={navigationItems[0].id}
      className="select-none w-full h-auto xl:h-[61px] relative flex items-center justify-between gap-3 px-0 py-2.5"
    >
      <div className="flex shrink-0 items-center gap-2.5">
        <div className=" w-full h-auto">
          <div className=" w-full h-auto bg-[100%_100%]">
            <img
              className=" w-8 h-8 top-0 left-0"
              draggable={false}
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

      <div className="relative hidden min-w-0 flex-1 justify-center lg:flex">
        <NavigationMenu
          ref={navRef}
          style={{ maskImage: mask, WebkitMaskImage: mask }}
          className="w-max max-w-full min-w-0 flex-none cursor-grab justify-start overflow-x-auto overflow-y-hidden rounded-[50px] bg-[#dee9ff66] px-3 py-2 shadow-drop-shadow-100 [scrollbar-width:none] active:cursor-grabbing"
        >
          <NavigationMenuList className="w-max flex-none flex-nowrap gap-2 xl:gap-4">
            {navigationItems.map((item, index) => {
              const isActive = activeSection === item.id;
              if (item.labelKey === "pricing") {
                return (
                  <NavigationMenuItem key={index} className="shrink-0">
                    <ContactDialog>
                      <NavigationMenuLink className="flex cursor-pointer items-center justify-center gap-1.5 rounded-[20px] px-2 py-1.5 opacity-70 xl:gap-2.5 xl:p-2.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-['Quicksand',Helvetica] text-sm font-medium leading-[21px] tracking-[0] text-black">
                          {t(item.labelKey)}
                        </div>
                      </NavigationMenuLink>
                    </ContactDialog>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={index} className="shrink-0">
                  <NavigationMenuLink
                    data-active={isActive || undefined}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-[20px] px-2 py-1.5 xl:gap-2.5 xl:p-2.5 ${
                      isActive ? "bg-blue" : "opacity-70"
                    }`}
                  >
                    <div
                      className={`relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-['Quicksand',Helvetica] text-sm font-medium leading-[21px] tracking-[0] ${
                        isActive ? "text-light-blue" : "text-black"
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
        <button
          type="button"
          aria-label="Scroll menu left"
          onClick={() => nudge("left")}
          className={`absolute left-1 top-1/2 z-20 -translate-y-1/2 border-0 bg-transparent p-0 text-[#838383] transition-opacity hover:text-[#5c5c5c] ${
            edges.left ? "opacity-50" : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Scroll menu right"
          onClick={() => nudge("right")}
          className={`absolute right-1 top-1/2 z-20 -translate-y-1/2 border-0 bg-transparent p-0 text-[#838383] transition-opacity hover:text-[#5c5c5c] ${
            edges.right ? "opacity-50" : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronRight className="h-7 w-7" strokeWidth={1.5} />
        </button>
      </div>

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
