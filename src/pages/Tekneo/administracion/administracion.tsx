import { useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import EditableTable from "../../../components/global/EditableTable";
import { GlobalContext } from "../../../singleton/globalContext";
export default function Administracion() {
  const { t } = useTranslation();
  const { user } = useContext(GlobalContext);
  const headers = useMemo(() => [t("nombre"), "Email"], [t])
  const data = [
    ["Juan Pérez", "juan.perez@email.com"],
    ["Ana Gómez", "ana.gomez@email.com"],
    ["Carlos Ruiz", "carlos.ruiz@email.com"],
    ["Lucía Torres", "lucia.torres@email.com"],
    ["Pedro Sánchez", "pedro.sanchez@email.com"],
    ["María López", "maria.lopez@email.com"],
    ["Sofía Castro", "sofia.castro@email.com"],
    ["Miguel Díaz", "miguel.diaz@email.com"],
    ["Laura Fernández", "laura.fernandez@email.com"],
    ["David Romero", "david.romero@email.com"]
  ];
  const [pageSize, setPageSize] = useState(5)

  const [selectedUser, setSelectedUser] = useState<{ name: string; email: string } | null>(null);
  return (
    
    <section className="grid grid-cols-[4fr_1fr] gap-x-[50px] m-[50px_50px] min-h-[70vh] place-content-start items-start">
      <EditableTable
        title={t("usuarios")}
        headers={headers}
        data={data}
        showPagination={true}
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20]}
        onPageChange={(_page, pageSize) => {
          setPageSize(pageSize);
        }}
        onClick={(_rowIdx, _colIdx, _value) => {
          // _rowIdx is the global index across pagination
          if (_rowIdx >= 0 && _rowIdx < data.length) {
            setSelectedUser({ name: data[_rowIdx][0], email: data[_rowIdx][1] });
          }
        }}
      />
      <aside className="bg-white rounded-2xl drop-shadow-xl border-[1px] border-gray-200 p-[16px] h-auto flex flex-col gap-[10px]">
        <h1 className="text-[32px] font-black text-center">Info</h1>
        <div className="size-[50px] rounded-[36px] bg-black  m-[10px] self-center flex flex-col justify-center items-center">
          <span className="text-white text-[20px] capitalize font-bold text-center">{selectedUser ? selectedUser.name[0] : user ? user.name[0] : null}</span>
        </div>
        <section className="grid grid-cols-[80px_max-content] grid-rows-2 gap-y-[20px]">
          <span className="text-[16px] font-bold">Email:</span>
          <span>{selectedUser?.email ?? user?.email ?? "..."}</span>
          <span className="text-[16px] font-bold">{t("nombre")}:</span>
          <span>{selectedUser?.name ?? user?.name ?? "..."}</span>
        </section>
      </aside>
    </section>
  )
}
