import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        level_id: '',
    });

    const levels = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'User' },
        { id: 3, name: 'Guest' },
    ];

    const handleChange = e => {
        setData(e.target.name, e.target.value);
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="level_id" value="User Level" />

                    <div className="mt-1 relative rounded-md shadow-sm">
                        <select
                            id="level_id"
                            name="level_id"
                            value={data.level_id}
                            className={`block w-full pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${errors.level_id ? 'border-red-500' : 'border-gray-300'
                                }`}
                            onChange={(e) => setData('level_id', e.target.value)}
                            required
                        >
                            <option value="">Select a level</option>
                            {levels.map((level) => (
                                <option key={level.id} value={level.id}>
                                    {level.name}
                                </option>
                            ))}
                        </select>
                        {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L11 5.414V14a1 1 0 1 1-2 0V5.414L7.707 6.707a1 1 0 0 1-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div> */}
                    </div>

                    <InputError message={errors.level_id} className="mt-2" />
                </div>


                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
