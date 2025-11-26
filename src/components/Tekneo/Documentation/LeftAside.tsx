// LeftAside.tsx

import React, { useCallback, useEffect, type JSX } from "react";
import Popover, { type PopoverHandle } from "../../Popover/Popover";

export interface NavButton {
  key: string;
  ref?: React.RefObject<HTMLButtonElement | null>;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ariaLabel?: string;
  popoverRef?: React.RefObject<PopoverHandle | null>;
  childrenPopover: JSX.Element;
}

interface LeftAsideProps {
  title: string;
  activeKey: string;
  buttons: NavButton[];
}

export const LeftAside: React.FC<LeftAsideProps> = ({
  title,
  activeKey,
  buttons,
}) => {
  // Marca en los botones cuál está activo
  const verifyTheCorrectViewProduct = useCallback(() => {
    buttons.forEach((item) => {
      if (!item.ref || !item?.ref.current) return; // no lanzo error, solo ignoro
      item.ref.current.dataset.active =
        activeKey === item.key ? "true" : "false";
    });
  }, [activeKey, buttons]);

  useEffect(() => {
    verifyTheCorrectViewProduct();
  }, [activeKey, verifyTheCorrectViewProduct]);

  return (
    <aside className="flex h-max flex-col gap-[30px] items-center sticky top-[100px]">
      <div className="w-full">
        <h1 className="text-black font-bold text-[32px]">{title}</h1>
        <hr className="w-full border-t-gray-400" />
      </div>
      <ul className="flex flex-col gap-[5px] w-full px-2">
        {buttons.map((btn) => (
          <li key={btn.key} className="w-full">
            <button
              ref={btn.ref}
              aria-label={btn.ariaLabel ?? btn.key}
              data-active={activeKey === btn.key}
              onClick={btn.onClick}
              onMouseEnter={btn.onMouseEnter}
              onMouseLeave={btn.onMouseLeave}
              className={`flex gap-[10px] w-full items-center justify-between p-[8px_12px] btnSection rounded-[8px] text-white ${
                activeKey === btn.key
                  ? "!text-white !border-black bg-gray-800"
                  : ""
              }`}
              type="button"
            >
              <span className="text-left">{btn.key}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white size-[16px] rotate-90"
                viewBox="0 -4.5 20 20"
              >
                <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" />
              </svg>
            </button>
            {btn.popoverRef ? (
              <Popover
                ref={btn.popoverRef}
                gapTop={-(btn.ref?.current?.offsetHeight ?? 100)}
                gapLeft={(btn.ref?.current?.offsetWidth ?? 180) + 15}
              >
                {btn.childrenPopover}
              </Popover>
            ) : null}
          </li>
        ))}
      </ul>
    </aside>
  );
};
