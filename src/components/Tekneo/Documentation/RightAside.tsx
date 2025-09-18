import React, { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

interface RightAsideProps {
  anchors: Record<string, JSX.Element[]> | undefined;
  viewProduct: keyof RightAsideProps["anchors"];
  listOfNavRef: React.RefObject<HTMLUListElement | null>;
}

export const RightAside: React.FC<RightAsideProps> = ({ anchors, viewProduct, listOfNavRef }) => {
  const {t} = useTranslation()
  return (
    <aside className="sticky top-[125px] self-start flex flex-col items-center gap-[20px]">
      <div>
        <h1 className="text-[18px]">{t("tabla_de_contenido")}</h1>
        <ul className={`listOfNav mt-[10px] flex-col items-start gap-[5px] min-h-[150px]`} ref={listOfNavRef}>
          {(anchors?.[viewProduct] ?? []).map((el) => el)}
        </ul>
      </div>
      <hr className="border-t-gray-400 w-full" />
    </aside>
  );
};
