import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface SizeTableProps {
  headers: string[];
  rows: {
    size: string;
    measurements: string[];
  }[];
}

const SizeTable: React.FC<SizeTableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.size}
              </td>
              {row.measurements.map((measurement, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {measurement}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface SizeGuideProps {
  title: string;
  subtitle: string;
  womenSizes: SizeTableProps;
  menSizes: SizeTableProps;
}

export const SizeGuide: React.FC<SizeGuideProps> = ({
  title,
  subtitle,
  womenSizes,
  menSizes,
}) => {
  const [activeTab, setActiveTab] = React.useState<"women" | "men">("women");

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-3xl font-medium mb-4">
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 max-w-3xl mx-auto mb-8"
          >
            {subtitle}
          </Typography>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === "women"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("women")}
              >
                여성 사이즈
              </button>
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === "men"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("men")}
              >
                남성 사이즈
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {activeTab === "women" ? (
            <SizeTable
              headers={womenSizes.headers}
              rows={womenSizes.rows}
            />
          ) : (
            <SizeTable
              headers={menSizes.headers}
              rows={menSizes.rows}
            />
          )}
        </div>
      </div>
    </div>
  );
}; 