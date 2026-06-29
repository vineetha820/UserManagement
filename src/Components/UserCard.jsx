import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2 } from 'lucide-react';

const UserCard = ({ user }) => {
  const firstLetter = user.name ? user.name.charAt(0) : 'U';

  return (
    <Link
      to={`/user/${user.id}`}
      className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left no-underline shadow-sm hover:border-violet-200 hover:no-underline hover:shadow-md sm:block sm:p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-lg font-bold text-violet-700 sm:mx-auto sm:h-16 sm:w-16">
        {firstLetter}
      </div>

      <div className="min-w-0 flex-1 sm:mt-4 sm:text-center">
        <h2 className="truncate text-sm font-bold text-slate-950 sm:text-base">
          {user.name}
        </h2>
        <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">
          {user.email}
        </p>
        <p className="mt-1 hidden text-sm text-slate-700 sm:block">
          {user.phone}
        </p>
        <p className="mt-2 hidden items-center justify-center gap-1 text-sm text-slate-600 sm:flex">
          <Building2 size={14} className="text-violet-600" />
          {user.company.name}
        </p>
      </div>

      <ChevronRight size={18} className="text-slate-500 sm:hidden" />
    </Link>
  );
};

export default UserCard;
