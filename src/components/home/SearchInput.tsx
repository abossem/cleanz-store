import { Search } from "lucide-react";
import React from "react";

export const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      Search
      <Search size={16} />
    </div>
  );
};
