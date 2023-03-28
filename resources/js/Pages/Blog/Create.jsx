import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';


export default function Create(props) {

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        console.log(e.target);
        e.preventDefault();
        post(route("blogs.store"));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog</h2>}
        >
            <Head title="Blog" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h1>Create</h1>
                            <InputError message={errors.title}/>
                            <InputError message={errors.content}/>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />
                                    <TextInput
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="w-full"
                                        isFocused={true}
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="content" value="Content" />
                                    <TextInput
                                        type="text"
                                        name="content"
                                        className="w-full"
                                        value={data.content}
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div className="flex items-center justify-center mt-4">
                                    <PrimaryButton
                                        disabled={processing}
                                    >
                                        Create
                                    </PrimaryButton>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
