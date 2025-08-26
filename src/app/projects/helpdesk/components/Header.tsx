import { SearchIcon } from './Icons'; // Assumes icon is in a separate file

export const Header = () => {
  return (
    <header className="flex-1 flex items-center justify-between p-6 bg-gray-900 md:bg-gray-900/0">
      <div>
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-400">Welcome back, here's a list of your tickets.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tickets..."
            className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-800">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-400"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/40x40/E9D5FF/4C1D95?text=JD"
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-gray-700"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/cccccc/ffffff?text=U'; e.currentTarget.onerror = null; }}
          />
          <div className="hidden lg:block">
            <p className="font-semibold text-white">John Doe</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};