import React, { useEffect, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface RightAsideProps {
  anchors: Record<string, JSX.Element[]> | undefined;
  viewProduct: string;
  listOfNavRef: React.RefObject<HTMLUListElement | null>;
  viewSection: React.RefObject<HTMLElement | null>;
}

export const RightAside: React.FC<RightAsideProps> = ({
  anchors,
  viewProduct,
  listOfNavRef,
  viewSection,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (!viewSection.current) return;

    const sections = Array.from(
      viewSection.current.querySelectorAll<HTMLElement>("[id]")
    );
    let prevLink: HTMLAnchorElement | null = null;

    const intersectionCb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector<HTMLAnchorElement>(
          `.listOfNav a[href="#${entry.target.id}"]`
        );
        if (!link) return;
        if (entry.isIntersecting) {
          prevLink?.classList.remove("active");
          link.classList.add("active");
          prevLink = link;
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCb, {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0.1,
    });
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  });
  return (
    <aside className="sticky top-[125px] self-start flex flex-col items-center gap-[20px]">
      <div>
        <h1 className="text-[18px]">{t("tabla_de_contenido")}</h1>
        <ul
          className={`listOfNav mt-[10px] flex-col items-start gap-[5px] min-h-[150px]`}
          ref={listOfNavRef}
        >
          {(anchors?.[viewProduct] ?? []).map((el) => el)}
        </ul>
      </div>
      <hr className="border-t-gray-400 w-full" />
    </aside>
  );
};
