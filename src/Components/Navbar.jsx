import React from "react";
import { Menu, Plus } from "lucide-react";
import Searchbar from "./Searchbar.jsx";
import { useData } from '../context/DataContext.jsx';

const Navbar = () => {
  const { searchQuery, setSearchQuery, setIsCreateOpen } = useData();

  return (
    <nav className="fixed left-0 top-0 z-40 w-full bg-white px-4 py-3 shadow-sm sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between sm:hidden">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-800">
            <Menu size={20} />
          </button>

          <h4 className="text-base font-bold text-slate-950">
            User Dashboard
          </h4>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white"
            onClick={() => setIsCreateOpen(true)}
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="mt-3 sm:hidden">
          <Searchbar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        <div className="hidden items-center justify-between sm:flex">
          <h4 className="text-xl font-bold text-slate-950">
            User Dashboard
          </h4>

          <div className="flex items-center gap-4">
            <Searchbar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button
              className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              onClick={() => setIsCreateOpen(true)}
            >
              + Create New User
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
