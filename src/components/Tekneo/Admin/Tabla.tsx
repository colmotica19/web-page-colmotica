// Table.tsx
//import React from "react";

interface TableProps {
  columns: { key: string; title: string }[];
  data: Record<string, any>[];
  onRowClick?: (rowIndex: number) => void;
}

export default function Table({ columns, data, onRowClick }: TableProps) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4 text-left text-gray-700 font-semibold text-sm border-b border-gray-200"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(rowIndex)}
              className="
                transition
                hover:bg-blue-50 hover:cursor-pointer
                border-b border-gray-100
              "
            >
              {columns.map((col) => (
                <td key={col.key} className="p-4 text-sm text-gray-700">
                  {row[col.key] === "__ACTION__" ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Evita activar onRowClick
                        console.log("Ver usuario:", row);
                        // ❗ Aquí luego abrirás tu modal
                      }}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs hover:bg-blue-700 transition"
                    >
                      Ver
                    </button>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-6 text-gray-400 italic"
              >
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
