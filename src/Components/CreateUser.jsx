import React, { useState } from 'react';
import { useData } from '../context/DataContext.jsx';

const CreateUser = () => {
    const { isCreateOpen, setIsCreateOpen, users, setUsers } = useData();

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        lat: '',
        lng: '',
    });
    const [errors, setErrors] = useState({});

    if (!isCreateOpen) {
        return null;
    }

    const clearForm = () => {
        setForm({
            name: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            lat: '',
            lng: '',
        });
        setErrors({});
    };

    const handleChange = (e) => {
        const fieldName = e.target.name;

        setForm({
            ...form,
            [fieldName]: e.target.value,
        });

        setErrors({
            ...errors,
            [fieldName]: '',
        });
    };

    const handleClose = () => {
        clearForm();
        setIsCreateOpen(false);
    };

    const validateForm = () => {
        const newErrors = {};
        const onlyLetters = /^[A-Za-z ]+$/;
        const onlyNumbers = /^[0-9]+$/;
        const decimalNumber = /^-?[0-9]+(\.[0-9]+)?$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const websitePattern = /^(https?:\/\/)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (!onlyLetters.test(form.name)) {
            newErrors.name = 'Name should not contain numbers';
        }

        if (!form.company.trim()) {
            newErrors.company = 'Company is required';
        } else if (!onlyLetters.test(form.company)) {
            newErrors.company = 'Company should not contain numbers';
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(form.email)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!form.street.trim()) {
            newErrors.street = 'Address is required';
        }

        if (!form.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!onlyNumbers.test(form.phone)) {
            newErrors.phone = 'Phone number should contain only numbers';
        } else if (form.phone.length < 10) {
            newErrors.phone = 'Phone number should be at least 10 digits';
        }

        if (!form.website.trim()) {
            newErrors.website = 'Website is required';
        } else if (!websitePattern.test(form.website)) {
            newErrors.website = 'Enter a valid website';
        }

        if (!form.suite.trim()) {
            newErrors.suite = 'Suite is required';
        }

        if (!form.city.trim()) {
            newErrors.city = 'City is required';
        } else if (!onlyLetters.test(form.city)) {
            newErrors.city = 'City should not contain numbers';
        }

        if (!form.zipcode.trim()) {
            newErrors.zipcode = 'Zipcode is required';
        } else if (!onlyNumbers.test(form.zipcode)) {
            newErrors.zipcode = 'Zipcode should contain only numbers';
        }

        if (!form.lat.trim()) {
            newErrors.lat = 'Latitude is required';
        } else if (!decimalNumber.test(form.lat)) {
            newErrors.lat = 'Latitude should be a number';
        }

        if (!form.lng.trim()) {
            newErrors.lng = 'Longitude is required';
        } else if (!decimalNumber.test(form.lng)) {
            newErrors.lng = 'Longitude should be a number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const newUser = {
            id: Date.now(),
            name: form.name,
            email: form.email,
            phone: form.phone,
            website: form.website,
            company: {
                name: form.company,
            },
            address: {
                street: form.street,
                suite: form.suite,
                city: form.city,
                zipcode: form.zipcode,
                geo: {
                    lat: form.lat,
                    lng: form.lng,
                },
            },
        };

        setUsers([...users, newUser]);
        handleClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/45 px-4 py-4 sm:flex sm:items-center sm:justify-center sm:py-6">
            <form
                onSubmit={handleSubmit}
                noValidate
                className="relative mx-auto max-h-[calc(100vh-32px)] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:max-h-[calc(100vh-48px)] sm:p-7"
            >
                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-xl text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                >
                    &times;
                </button>

                <div className="mb-8 flex items-start gap-5 text-left">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="mt-1 flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-950 hover:bg-slate-100"
                    >
                        &lt;
                    </button>

                    <div>
                        <h2 className="text-xl font-semibold text-slate-950">Create New User</h2>
                        <p className="mt-1 text-sm text-slate-500">Fill in the details below</p>
                    </div>
                </div>

                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter full name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="company">
                            Company
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Enter company name"
                            value={form.company}
                            onChange={handleChange}
                        />
                        {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="street">
                            Address
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="street"
                            name="street"
                            placeholder="Enter address"
                            value={form.street}
                            onChange={handleChange}
                        />
                        {errors.street && <p className="mt-1 text-xs text-red-500">{errors.street}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Enter phone number"
                            value={form.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="website">
                            Website
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="website"
                            name="website"
                            placeholder="Enter website"
                            value={form.website}
                            onChange={handleChange}
                        />
                        {errors.website && <p className="mt-1 text-xs text-red-500">{errors.website}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="suite">
                            Suite
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="suite"
                            name="suite"
                            placeholder="Enter suite"
                            value={form.suite}
                            onChange={handleChange}
                        />
                        {errors.suite && <p className="mt-1 text-xs text-red-500">{errors.suite}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="city">
                            City
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter city"
                            value={form.city}
                            onChange={handleChange}
                        />
                        {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                    </div>

                    <div className="text-left">
                        <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="zipcode">
                            Zipcode
                        </label>
                        <input
                            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            placeholder="Enter zipcode"
                            value={form.zipcode}
                            onChange={handleChange}
                        />
                        {errors.zipcode && <p className="mt-1 text-xs text-red-500">{errors.zipcode}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-left">
                            <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="lat">
                                Latitude
                            </label>
                            <input
                                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                                type="text"
                                id="lat"
                                name="lat"
                                placeholder="-37.3159"
                                value={form.lat}
                                onChange={handleChange}
                            />
                            {errors.lat && <p className="mt-1 text-xs text-red-500">{errors.lat}</p>}
                        </div>

                        <div className="text-left">
                            <label className="mb-2 block text-xs font-semibold text-slate-950" htmlFor="lng">
                                Longitude
                            </label>
                            <input
                                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-violet-500"
                                type="text"
                                id="lng"
                                name="lng"
                                placeholder="81.1496"
                                value={form.lng}
                                onChange={handleChange}
                            />
                            {errors.lng && <p className="mt-1 text-xs text-red-500">{errors.lng}</p>}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={clearForm}
                        className="h-12 min-w-28 rounded-lg bg-slate-100 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-200"
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        className="h-12 min-w-32 rounded-lg bg-violet-600 px-6 text-sm font-semibold text-white hover:bg-violet-700"
                    >
                        Save User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
