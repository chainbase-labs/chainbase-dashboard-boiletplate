import { useCallback, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

interface AddressInputProps {
  onQuery: (address: string) => void;
}

export default function AddressInput({ onQuery }: AddressInputProps) {
  const [value, setValue] = useState<string>("");
  const handleQuery = useCallback(() => {
    onQuery(value);
  }, [onQuery, value]);
  return (
    <div className="w-full flex space-x-2 items-center py-2">
      <input
        type="text"
        className="flex-1 border focus:outline-gray-900 focus:outline-1 h-8 text-sm px-2 rounded"
        placeholder="address"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <span
        className="w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-50 cursor-pointer"
        onClick={handleQuery}
      >
        <SearchIcon className="w-4 h-4" />
      </span>
    </div>
  );
}
