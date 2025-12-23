// BtnProfile

import { useContext, useRef } from "react";
import Popover from "./Popover/Popover";
import type { PopoverHandle } from "./Popover/Popover";
import { GlobalContext } from "../singleton/globalContext";
import { useTranslation } from "react-i18next";
import Modal from "./Tekneo/Modal/Modal";
import Login from "./Tekneo/login/Login";
import { useNavigate } from "react-router";
import { logoutUser } from "../requests/user";

export default function BtnProfile() {
  const {
    userLogin,
    setUserLogin,
    modalLoginRef,
    loginOpenKey,
    setLoginOpenKey,
  } = useContext(GlobalContext);
  const { t } = useTranslation();
  const popoverProfile = useRef<PopoverHandle>(null);
  const btnProfile = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  return (
    <>
      {userLogin ? (
        <button
          onClick={(event) => {
            popoverProfile.current?.showPopover(
              (event.currentTarget as HTMLElement) ??
                (event.target as HTMLElement)
            );
          }}
          ref={btnProfile}
          className="rounded-[36px] size-[40px] bg-black flex flex-col justify-center items-center text-center mt-[-15px] capitalize font-bold text-white border-[2px] border-gray-200 select-none cursor-pointer"
        >
          <span>{userLogin.EMAIL[0]}</span>
        </button>
      ) : (
        <button
          className="p-[5px_15px] bg-blue-500 rounded-[8px] mt-[-15px] text-white"
          onClick={() => {
            setLoginOpenKey((prev) => prev + 1); // 🔥 Fuerza que Login resetee su estado
            modalLoginRef.current?.showModal();
          }}
        >
          <span>{t("inicio_de_sesion")}</span>
        </button>
      )}

      <Popover ref={popoverProfile} btnClose gapTop={5} gapLeft={-75}>
        <div className="flex flex-col gap-[10px] justify-center items-center p-[16px]">
          <div className="rounded-[36px] size-[50px] bg-black flex flex-col justify-center items-center text-center capitalize font-bold text-white border-[2px] border-gray-200 select-none">
            <span>{userLogin?.EMAIL[0]}</span>
          </div>
          <span>{userLogin?.EMAIL}</span>
          <button
            type="button"
            className="p-[5px_15px] bg-blue-500 text-white rounded-[8px]"
            onClick={async () => {
              await logoutUser();
              setUserLogin(null);
              popoverProfile.current?.forceClose();

              navigate("/");
              window.location.reload();
            }}
          >
            <span>{t("cerrar_sesion")}</span>
          </button>
        </div>
      </Popover>

      <Modal ref={modalLoginRef} blur onClose={() => navigate("/home")}>
        <Login key={loginOpenKey} />
      </Modal>
    </>
  );
}
