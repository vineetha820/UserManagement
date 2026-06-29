import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin } from 'lucide-react';
import { getUserById } from '../api/userApi.js';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div className="px-4 py-6 text-left">Loading user details...</div>;
  }

  const firstLetter = user.name ? user.name.charAt(0) : 'U';

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="mb-5 flex items-center gap-4 border-b border-slate-100 pb-4 sm:border-b-0">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-base font-bold text-slate-950 sm:text-xl">
            User Details
          </h1>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-1">
            <div className="flex items-center gap-4 sm:flex-col sm:text-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-violet-100 text-2xl font-bold text-violet-700">
                {firstLetter}
              </div>

              <div className="min-w-0 text-left sm:text-center">
                <h2 className="truncate text-lg font-bold text-slate-950">
                  {user.name}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{user.email}</p>
                <p className="mt-1 text-sm text-slate-600">{user.phone}</p>
                <p className="mt-2 flex items-center gap-1 text-sm text-slate-700 sm:justify-center">
                  <Building2 size={14} className="text-violet-600" />
                  {user.company?.name}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-violet-600" />
              <h3 className="font-bold text-slate-950">Address</h3>
            </div>

            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold text-slate-950">Street </span>
                <span className="text-slate-600">{user.address?.street}</span>
              </p>
              <p>
                <span className="font-semibold text-slate-950">Suite </span>
                <span className="text-slate-600">{user.address?.suite}</span>
              </p>
              <p>
                <span className="font-semibold text-slate-950">City </span>
                <span className="text-slate-600">{user.address?.city}</span>
              </p>
              <p>
                <span className="font-semibold text-slate-950">Zipcode </span>
                <span className="text-slate-600">{user.address?.zipcode}</span>
              </p>
            </div>

         
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm lg:col-span-3">
            <h3 className="mb-4 font-bold text-slate-950">Geo Location</h3>
            <div className="space-y-3 text-sm sm:flex sm:gap-12 sm:space-y-0">
              <p>
                <span className="font-semibold text-slate-950">Latitude </span>
                <span className="text-slate-600">{user.address?.geo?.lat}</span>
              </p>
              <p>
                <span className="font-semibold text-slate-950">Longitude </span>
                <span className="text-slate-600">{user.address?.geo?.lng}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
