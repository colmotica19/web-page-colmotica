// import React from "react"; // No es necesario en proyectos con JSX transform
import "./EditableTable.css";

export interface EditableTableProps {
  headers: string[];
  data: string[][];
  title?: string;
  onChange?: (rowIdx: number, colIdx: number, value: string) => void;
  onClick?: (rowIdx: number, colIdx: number, value: string) => void;
}

export default function EditableTable({ headers, data, title, onChange, onClick }: EditableTableProps) {
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
                  // readOnly
                  onChange={e => onChange?.(-1, idx, e.target.value)}
                  onClick={(event) => onClick?.(-1, idx, (event.target as HTMLInputElement).value)}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, colIdx) => (
                <td key={colIdx}>
                  <input
                    className="editable-table-cell"
                    type="text"
                    value={cell}
                    title={`Fila ${rowIdx + 1}, columna ${colIdx + 1}`}
                    placeholder={`Dato (${rowIdx + 1},${colIdx + 1})`}
                    // readOnly
                    onChange={e => onChange?.(rowIdx, colIdx, e.target.value)}
                    onClick={(event) => onClick?.(rowIdx, colIdx, (event.target as HTMLInputElement).value)}

                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
