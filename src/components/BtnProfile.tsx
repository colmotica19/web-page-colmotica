import { useContext, useRef } from "react";
import Popover from "./Popover/Popover";
import type { PopoverHandle } from "./Popover/Popover";
import { GlobalContext } from "../singleton/globalContext";
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Modal from "./Tekneo/Modal/Modal";
import Login from "./login/Login";
import { useNavigate } from "react-router";
export default function BtnProfile() {
  const { user, setUser, modalLoginRef } = useContext(GlobalContext);
  const {t} = useTranslation()
  const popoverProfile = useRef<PopoverHandle>(null)
  const btnProfile = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate()
  return (
    <>
      {user ?
        <button onClick={(event) => {
        popoverProfile.current?.showPopover(event.currentTarget ?? event.target)
      }} ref={btnProfile} className="rounded-[36px] size-[40px] bg-black flex flex-col justify-center items-center text-center mt-[-15px] capitalize font-bold text-white border-[2px] border-gray-200 select-none cursor-pointer">
        <span>{user?.name[0]}</span>
        </button>
        :
        <button className="p-[5px_15px] bg-blue-500 rounded-[8px] mt-[-15px] text-white" onClick={() => modalLoginRef.current?.showModal()}>
          <span>Iniciar sesión</span>
        </button>
      }

      <Popover btnClose gapLeft={(popoverProfile.current?.this?.offsetWidth ? (popoverProfile.current.this.offsetWidth / 2) - 20 : 150 / 2) * -1} gapTop={5} ref={popoverProfile}>
        <div className="flex flex-col gap-[10px] justify-center items-center p-[16px]">
          <div className="rounded-[36px] size-[50px] bg-black flex flex-col justify-center items-center text-center mt-[-15px] capitalize font-bold text-white border-[2px] border-gray-200 select-none">
            <span>{user?.name[0]}</span>
          </div>
          <span>{user?.name}</span>
          <span>{user?.admin ? t("administrador") : t("usuario") }</span>
          <button type="button" className="p-[5px_15px] bg-blue-500 text-white rounded-[8px]" onClick={() => {
            setUser(null)
            popoverProfile.current?.forceClose()
          }}>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </Popover>
      <Modal ref={modalLoginRef} blur onClose={() => {
        console.log(true)
        navigate("/home")
      }}>
        <Login></Login>
      </Modal>
    </>
  )
}
