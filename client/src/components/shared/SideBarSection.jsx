import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export const SideBarSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-5 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full uppercase py-1.5 flex justify-between items-center
                   text-[12px] font-semibold border-b border-[#0000001a] transition-all duration-300"
      >
        {title}
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>

      {isOpen && (
        <div className="pt-4 transition-all duration-300">{children}</div>
      )}
    </div>
  );
};
