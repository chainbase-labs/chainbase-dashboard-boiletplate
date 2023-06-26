import { FC } from "react";
import { get }  from 'lodash-es'

interface ColumnItemType {
  title: string;
  dataIndex: string;
  render?:(val: any, record: any) => React.ReactElement
}

interface ResultTalbeProps {
  data: (string | number)[][];
  columns: ColumnItemType[];
}

const ResultTable: FC<ResultTalbeProps> = ({ data, columns }) => {
  return (
    <div className="overflow-auto h-full">
      <table className="w-full max-h-full border-collapse">
        <thead className="bg-gray-200 sticky top-0">
          <tr className="text-left h-9">
            {columns.map((column, index) => (
              <th className="border-r last:border-r-0 px-2" key={index}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="h-8 even:bg-gray-100 even:border-white">
              {columns.map((col, idx) => (
                <td className="px-2 border-r last:border-r-0" key={col.dataIndex}>
                  {col.render? col.render(get(row, col.dataIndex, ''), row) :get(row, col.dataIndex, '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
