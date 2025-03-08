import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  sizeGuideData: {
    tabs: string[];
    units: string[];
    headers: string[];
    rows: string[][];
  };
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  sizeGuideData,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeUnit, setActiveUnit] = useState(1); // 0: INCH, 1: CM

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[90vh] w-[95vw] max-w-4xl overflow-auto bg-white p-4 md:p-6 lg:p-8">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 md:right-4 md:top-4"
          aria-label="닫기"
        >
          <FiX size={24} />
        </button>

        <div className="mb-6">
          <Typography variant="h4" className="mb-4 text-center text-gray-900">
            사이즈 가이드
          </Typography>

          {/* 탭 */}
          <div className="mb-6 flex border-b border-gray-200">
            {sizeGuideData.tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-3 py-2 text-sm md:px-4 md:text-base ${
                  activeTab === index
                    ? "border-b-2 border-black font-medium text-gray-900"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 단위 선택 */}
          <div className="mb-4 flex justify-end">
            <div className="relative inline-flex items-center rounded-full border border-gray-300 p-1">
              {sizeGuideData.units.map((unit, index) => (
                <button
                  key={unit}
                  className={`relative z-10 rounded-full px-3 py-1 text-xs md:text-sm ${
                    activeUnit === index
                      ? "bg-black text-white"
                      : "text-gray-800"
                  }`}
                  onClick={() => setActiveUnit(index)}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-center text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    {sizeGuideData.headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-1 py-3 font-medium text-gray-900 md:px-2"
                        style={{ fontSize: "0.7rem", lineHeight: "1rem" }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeGuideData.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-b border-gray-200 ${
                        rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-1 py-2 text-gray-800 md:px-2"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <Typography variant="h6" className="mb-4 text-gray-900">
                측정 방법
              </Typography>
              <ul className="space-y-4">
                <li>
                  <Typography variant="body2" className="text-gray-800">
                    <strong>흉상:</strong> 가슴의 가장 넓은 부분을 수평으로
                    측정하세요.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" className="text-gray-800">
                    <strong>허리:</strong> 자연스러운 허리선(보통 배꼽 위 약
                    2-3cm)을 수평으로 측정하세요.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" className="text-gray-800">
                    <strong>넓은 허리:</strong> 허리의 가장 좁은 부분을 수평으로
                    측정하세요.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" className="text-gray-800">
                    <strong>엉덩이:</strong> 엉덩이의 가장 넓은 부분을 수평으로
                    측정하세요.
                  </Typography>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
