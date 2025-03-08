"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // 검색 로직 구현
      console.log("검색어:", searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-none border border-gray-300 py-2 pl-10 pr-4 focus:border-gray-500 focus:outline-none placeholder:text-gray-500"
      />
      <button
        type="submit"
        className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"
      >
        <FiSearch size={18} />
      </button>
    </form>
  );
};
