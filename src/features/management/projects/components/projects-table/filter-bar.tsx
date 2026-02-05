import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

interface FilterBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const FilterBar = ({ value, onChange, placeholder = "Cari disini.." }: FilterBarProps) => {
  const inputref = useRef<HTMLInputElement>(null);
  return (
    <div
      className="py-2 px-6 flex items-center border-b"
      onClick={() => inputref.current?.focus()}
    >
      <div className="shrink-0 mr-3 cursor-pointer">
        <IoSearch className="size-5 text-muted-foreground" />
      </div>
      <input
        type="text"
        ref={inputref}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
      />
    </div>
  );
};
