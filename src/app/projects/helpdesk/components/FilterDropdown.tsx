import { ChevronDownIcon } from './Icons'; // Assumes icon is in a separate file

interface FilterDropdownProps {
  label: string;
  options: string[];
}

export const FilterDropdown = ({ label, options }: FilterDropdownProps) => {
  return (
    <div className="relative">
      <button className="flex items-center gap-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700">
        {label}
        <ChevronDownIcon className="h-4 w-4" />
      </button>
    </div>
  );
};