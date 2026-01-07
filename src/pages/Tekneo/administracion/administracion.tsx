// Updated Administracion.tsx with role-based filtering
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Table from "../../../components/Tekneo/Admin/Tabla";
import { GlobalContext } from "../../../singleton/globalContext";
import Modal from "../../../components/Tekneo/Modal/Modal";
import AgregarAdministrador from "../../../components/Tekneo/Admin/Agregar";
import type { ModalHandle } from "../../../components/Tekneo/Modal/Modal";
import {
  requestManualList,
  getUsers,
  aproveManual,
  refusedManual,
  deleteAdmin,
  recoverPassAdmin,
  editarAdmin,
} from "../../../requests/user";
import toast from "react-hot-toast";

export default function Administracion() {
  const { t } = useTranslation();
  const { user } = useContext(GlobalContext);

  const modalAggAdminRef = useRef<ModalHandle>(null);
  const refModal = useRef<ModalHandle>(null);
  const confirmDeleteModal = useRef<ModalHandle>(null);
  const editModal = useRef<ModalHandle>(null);

  const [userToDelete, setUserToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const headers = useMemo(() => [t("nombre"), "Email", "Pais", "Numero", "Tipo", "Estado", "Acciones"], [t]);

  const [data, setData] = useState<string[][]>([]);
  const [pageSize, setPageSize] = useState(5);
  const [filterName, setFilterName] = useState("");
  const [filterTipo, setFilterTipo] = useState("");
  const [editName, setEditName] = useState("");
  const [editPass, setEditPass] = useState("");
  const [page, setPage] = useState(1);
  //const [filterRol, setFilterRol] = useState("ALL");

  const [selectedUser, setSelectedUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const [userToEdit, setUserToEdit] = useState<{
    id: string;
    name: string;
    email: string;
  } | null>(null);

  const [manualReqList, setManualReqList] = useState<any[]>([]);

  async function loadUsers() {
    try {
      const res = await getUsers();

      if (res.success && Array.isArray(res.result)) {
        const mapped = res.result
          .filter((u: any) => {
            if (!user) return false;

            if (user.ID_ROL === 10002) return u.ID_ROL === 10003;
            if (user.ID_ROL === 10001) return u.ID_ROL === 10002 || u.ID_ROL === 10003;

            return false;
          })
          .map((u: any) => {
            let rolText = "";
            switch (u.ID_ROL) {
              case 10001:
                rolText = "SUPER_ADMIN";
                break;
              case 10002:
                rolText = "ADMINISTRADOR";
                break;
              case 10003:
                rolText = "USUARIO";
                break;
              default:
                rolText = "DESCONOCIDO";
            }

            const verifiedText = u.VERIFIED === 1 ? "VERIFICADO" : "PENDIENTE";

            return [
              u.NAME ?? "Null",
              u.EMAIL ?? "Null",
              u.PAIS ?? "Null",
              u.TEL ?? "Null",
              rolText,
              verifiedText,
              "__ACTION__",
              u.ID_USERS ?? "", // 🔥 Aquí guardamos el ID del usuario
            ];
          });

        setData(mapped);
      }
    } catch (err) {
      console.error("Error cargando usuarios:", err);
    }
  }

  useEffect(() => {
    loadUsers();
  }, [user]);

  useEffect(() => {
    if (selectedUser) {
      loadPendingRequests(selectedUser.email);
      refModal.current?.showModal();
    }
  }, [selectedUser]);

  async function loadPendingRequests(email: string) {
    try {
      const response = await requestManualList({ EMAIL: email });

      if (response.success && Array.isArray(response.result)) {
        setManualReqList(response.result);
      } else {
        setManualReqList([]);
      }
    } catch (err) {
      console.error("Error cargando solicitudes:", err);
      setManualReqList([]);
    }
  }

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const nameMatch = row[0].toLowerCase().includes(filterName.toLowerCase());

      const tipoMatch = !filterTipo || filterTipo === "ALL" ? true : row[4] === filterTipo;

      return nameMatch && tipoMatch;
    });
  }, [filterName, filterTipo, data]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const filteredPaginatedData = filteredData.slice(start, end);

  return (
    <>
      <section className="m-[50px_50px] min-h-[70vh]">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t("usuarios")}</h2>

          <div className="mb-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Filtrar por nombre"
              value={filterName}
              onChange={(e) => {
                setFilterName(e.target.value);
                setPage(1);
              }}
              className="p-2 rounded-lg w-[250px] shadow-sm outline-none border border-transparent focus:border-black transition"
            />

            <select
              value={filterTipo}
              onChange={(e) => {
                setFilterTipo(e.target.value);
                setPage(1);
              }}
              className="border rounded-md p-2"
            >
              {user?.ID_ROL === 10002 ? (
                <>
                  <option value="ALL">Todos</option>
                  <option value="USUARIO">Usuario</option>
                </>
              ) : (
                <>
                  <option value="ALL">Todos</option>
                  <option value="ADMINISTRADOR">Administrador</option>
                  <option value="USUARIO">Usuario</option>
                </>
              )}
            </select>
          </div>

          {/* =========================
              TABLA PRINCIPAL
          ========================== */}
          <Table
            columns={headers.map((h, i) => ({
              key: i.toString(),
              title: h,
            }))}
            data={filteredPaginatedData.map((row, rowIndex) =>
              row.reduce((acc, val, idx) => {
                if (val === "__ACTION__") {
                  const rowReal = filteredPaginatedData[rowIndex];
                  const rol = rowReal[4];

                  acc[idx] = (
                    <div className="flex items-center gap-2">
                      {rol === "USUARIO" && (
                        <button
                          onClick={() => {
                            setSelectedUser({
                              name: rowReal[0],
                              email: rowReal[1],
                            });
                          }}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm shadow"
                        >
                          Ver
                        </button>
                      )}

                      {rol === "ADMINISTRADOR" && (
                        <div className="flex items-center gap-2">
                          {/* ---- Editar ---- */}
                          <button
                            onClick={() => {
                              setUserToEdit({
                                id: rowReal[7],
                                name: rowReal[0],
                                email: rowReal[1],
                              });
                              setEditName("");
                              setEditPass("");
                              editModal.current?.showModal();
                            }}
                            className="p-2 rounded-md shadow flex items-center justify-center"
                            title="Editar"
                          >
                            <img src="../../../../public/svg/EDIT.png" alt="Editar" className="w-5 h-5" />
                          </button>

                          {/* ---- Eliminar ---- */}
                          <button
                            onClick={() => {
                              setUserToDelete({
                                id: rowReal[7],
                                name: rowReal[0],
                              });
                              confirmDeleteModal.current?.showModal();
                            }}
                            className="p-2 rounded-md shadow flex items-center justify-center"
                            title="Eliminar"
                          >
                            <img src="../../../../public/svg/DELETE.png" alt="Eliminar" className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                } else {
                  acc[idx] = val;
                }
                return acc;
              }, {} as any)
            )}
          />

          {/* =========================
              PAGINACIÓN
          ========================== */}
          <div className="flex items-center gap-4 mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 border rounded"
            >
              {"<"}
            </button>

            <span>
              Página {page} de {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 border rounded"
            >
              {">"}
            </button>

            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="border rounded px-2 py-1"
            >
              {[5, 10, 20].map((n) => (
                <option key={n} value={n}>
                  {n} por página
                </option>
              ))}
            </select>
          </div>
        </div>

        {user?.ID_ROL === 10001 && (
          <button
            onClick={() => modalAggAdminRef.current?.showModal()}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold shadow"
          >
            Agregar Administrador
          </button>
        )}

        {/* =========================
            MODAL DE SOLICITUDES
        ========================== */}
        <Modal ref={refModal}>
          <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Solicitudes de: {selectedUser?.name}</h2>

            <Table
              columns={[
                { key: "email", title: "Correo" },
                { key: "name", title: "Nombre" },
                { key: "state", title: "Estado" },
                { key: "date_req", title: "Fecha de Solicitud" },
                { key: "actions", title: "Acciones" },
              ]}
              data={manualReqList.map((item) => ({
                email: item.EMAIL,
                name: item.NAME,
                state: item.STATE,
                date_req: item.DATE_REQ ? new Date(item.DATE_REQ).toLocaleString("es-CO") : "—",
                actions: (
                  <div className="flex gap-2">
                    <button
                      onClick={async () => {
                        try {
                          const res = await aproveManual({
                            ID_MANUALS_VS_USERS: item.ID_MANUALS_VS_USERS,
                            ID_MANUALS: item.ID_MANUALS,
                            ID_USERS: item.ID_USERS,
                          });

                          console.log("ITEM:", item);
                          console.log("DATE_REQ:", item.DATE_REQ);

                          toast.success(res?.message || "Manual aprobado correctamente");

                          await loadPendingRequests(selectedUser?.email || "");
                        } catch (err: any) {
                          toast.error(err?.message || "Error al aprobar el manual");
                        }
                      }}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                    >
                      Aprobar
                    </button>

                    <button
                      onClick={async () => {
                        try {
                          const res = await refusedManual({
                            ID_MANUALS_VS_USERS: item.ID_MANUALS_VS_USERS,
                            ID_MANUALS: item.ID_MANUALS,
                            ID_USERS: item.ID_USERS,
                          });

                          toast.success(res?.message || "Manual rechazado correctamente", {
                            icon: "✕",
                          });

                          await loadPendingRequests(selectedUser?.email || "");
                        } catch (err: any) {
                          toast.error(err?.message || "Error al rechazar el manual");
                        }
                      }}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                    >
                      Rechazar
                    </button>
                  </div>
                ),
              }))}
            />
          </section>
        </Modal>
      </section>

      {/* =========================
          MODAL PARA AGREGAR ADMIN
      ========================== */}
      <Modal ref={modalAggAdminRef} blur>
        <AgregarAdministrador />
      </Modal>

      {/* =========================
    MODAL EDITAR ADMIN
========================== */}
      <Modal ref={editModal} blur>
        <section className="p-6 w-[350px]">
          <h2 className="text-xl font-bold mb-4 text-center">Editar Administrador</h2>

          <p className="text-center text-gray-600 mb-4">{userToEdit?.email}</p>

          <input
            type="text"
            placeholder="Nuevo nombre (opcional)"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="password"
            placeholder="Nueva contraseña (opcional)"
            value={editPass}
            onChange={(e) => setEditPass(e.target.value)}
            className="w-full p-2 border rounded mb-5"
          />

          <div className="flex justify-center gap-4">
            <button
              onClick={() => editModal.current?.close()}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
            >
              Cancelar
            </button>

            <button
              onClick={async () => {
                if (!userToEdit) return;

                const newName = editName.trim();
                const newPass = editPass.trim();

                // Nada para editar?
                if (!newName && !newPass) {
                  toast.error("Debe ingresar un nuevo nombre o una nueva contraseña.");
                  return;
                }

                try {
                  // Editar nombre si lo puso
                  if (newName && newName !== userToEdit.name) {
                    const r1 = await editarAdmin({
                      ID_USERS: userToEdit.id,
                      NAME: newName,
                    });

                    if (!r1.success) {
                      toast.error(r1.message || "Error al editar el nombre");
                    } else {
                      toast.success("Nombre actualizado");
                    }
                  }

                  // Editar contraseña si la puso
                  if (newPass) {
                    const r2 = await recoverPassAdmin({
                      email: userToEdit.email,
                      pass: newPass,
                    });

                    if (!r2.success) {
                      toast.error(r2.message || "Error al actualizar contraseña");
                    } else {
                      toast.success("Contraseña actualizada");
                    }
                  }

                  // Recargar tabla
                  await loadUsers();

                  editModal.current?.close();
                } catch (err) {
                  toast.error("Error al actualizar datos");
                  console.error(err);
                }
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Guardar cambios
            </button>
          </div>
        </section>
      </Modal>

      {/* =========================
          MODAL CONFIRMAR ELIMINACIÓN
      ========================== */}
      <Modal ref={confirmDeleteModal}>
        <section className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">
            ¿Seguro que deseas eliminar al administrador
            <br />
            <span className="font-bold">{userToDelete?.name}</span>?
          </h2>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => confirmDeleteModal.current?.close()}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
            >
              Cancelar
            </button>

            <button
              onClick={async () => {
                if (!userToDelete) return;

                try {
                  const res = await deleteAdmin(userToDelete.id);

                  if (res.success) {
                    toast.success("Administrador eliminado");
                    await loadUsers();
                  } else {
                    toast.error(res.message || "Error al eliminar");
                  }
                } catch (err) {
                  console.log(err);
                  toast.error("Error al eliminar");
                }

                confirmDeleteModal.current?.close();
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Sí, eliminar
            </button>
          </div>
        </section>
      </Modal>
    </>
  );
}
