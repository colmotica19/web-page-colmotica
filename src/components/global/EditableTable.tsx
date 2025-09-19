// import React from "react"; // No es necesario en proyectos con JSX transform
import { useTranslation } from "react-i18next";
import "./EditableTable.css";

export interface EditableTableProps {
  headers: string[];
  data: string[][];
  title?: string;
  // pagination
  showPagination?: boolean;
  pageSize?: number; // filas por página
  pageSizeOptions?: number[];
  onPageChange?: (page: number, pageSize: number) => void;
  onChange?: (rowIdx: number, colIdx: number, value: string) => void;
  onClick?: (rowIdx: number, colIdx: number, value: string) => void;
}

import { useMemo, useState } from "react";

export default function EditableTable({ headers, data, title, showPagination = true, pageSize = 5, pageSizeOptions = [5, 10, 20], onPageChange, onChange, onClick }: EditableTableProps) {
  const [page, setPage] = useState(1);
  const totalRows = data.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
  const {t} = useTranslation()

  const currentSlice = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  const gotoPage = (p: number) => {
    const newPage = Math.max(1, Math.min(totalPages, p));
    setPage(newPage);
    onPageChange?.(newPage, pageSize);
  };

  const handlePageSizeChange = (size: number) => {
    // recalcular página manteniendo el primer índice mostrado
    const firstIndex = (page - 1) * pageSize;
    const newPage = Math.floor(firstIndex / size) + 1;
    setPage(newPage);
    onPageChange?.(newPage, size);
  };

  return (
    <div className="editable-table-container">
      {title ? <h1 className="text-[32px] font-bold text-center">{title}</h1> : null}
      <table className="editable-table">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>
                <input
                  className="editable-table-header"
                  type="text"
                  value={header}
                  title={`Encabezado ${idx + 1}`}
                  placeholder={`Encabezado ${idx + 1}`}
                  onChange={e => onChange?.(-1, idx, e.target.value)}
                  onClick={(event) => onClick?.(-1, idx, (event.target as HTMLInputElement).value)}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentSlice.map((row, localRowIdx) => {
            const globalRowIdx = (page - 1) * pageSize + localRowIdx;
            return (
              <tr key={globalRowIdx}>
                {row.map((cell, colIdx) => (
                  <td key={colIdx}>
                    <input
                      className="editable-table-cell"
                      type="text"
                      value={cell}
                      title={`Fila ${globalRowIdx + 1}, columna ${colIdx + 1}`}
                      placeholder={`Dato (${globalRowIdx + 1},${colIdx + 1})`}
                      onChange={e => onChange?.(globalRowIdx, colIdx, e.target.value)}
                      onClick={(event) => onClick?.(globalRowIdx, colIdx, (event.target as HTMLInputElement).value)}
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showPagination && (
        <div className="editable-table-pagination mt-[12px] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <button onClick={() => gotoPage(1)} disabled={page === 1} className="text-[20px] px-[9px] flex flex-col justify-center items-center border rounded-[36px] hover:bg-black hover:text-white btnPag">«</button>
            <button onClick={() => gotoPage(page - 1)} disabled={page === 1} className="text-[20px] px-[9px] flex flex-col justify-center items-center border rounded-[36px] hover:bg-black hover:text-white btnPag">‹</button>
            <span className="px-[8px]">Página {page} de {totalPages}</span>
            <button onClick={() => gotoPage(page + 1)} disabled={page === totalPages} className="text-[20px] px-[9px] flex flex-col justify-center items-center border rounded-[36px] hover:bg-black hover:text-white btnPag">›</button>
            <button onClick={() => gotoPage(totalPages)} disabled={page === totalPages} className="text-[20px] px-[9px] flex flex-col justify-center items-center border rounded-[36px] hover:bg-black hover:text-white btnPag">»</button>
          </div>

          <div className="flex items-center gap-[8px]">
            <label className="text-sm">{t("filas")}</label>
            <select aria-label="Filas por página" value={pageSize} onChange={(e) => handlePageSizeChange(Number(e.target.value))} className="border rounded px-[6px] py-[4px]">
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
