import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head, useForm } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from '@/Components/TextInput';
import Pagination from '@/Components/Pagination';

export default function Index(props) {

    const {delete: destory, data, setData, get, post, processing} = useForm({
        search: props.search,
    });

    const handleDelete = (event) => {
        let id = event.target.dataset.blog_id
        destory(
            route("blogs.destroy", id),
            {preserveScroll: true}
        );
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        get(route("blogs.index"));
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
                            <div className="py-4 flex flex-row gap-6 justify-end items-center">
                                <form onSubmit={submit}>
                                    <div className="py-1 flex gap-1 items-stretch">
                                        <TextInput
                                            type="search"
                                            name="search"
                                            value={data.search}
                                            isFocused={true}
                                            onChange={onHandleChange}
                                            placeholder="title name, content name"
                                        />
                                        <button disabled={processing}>
                                            🔍
                                        </button>
                                    </div>
                                </form>
                                <div className="">
                                    <Link href={route("blogs.create")}>
                                        <PrimaryButton type="button">New Create</PrimaryButton>
                                    </Link>
                                </div>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Contents</th>
                                        <th></th>
                                        <th>
                                            Total : {props.blogs.total}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.blogs.data.map((blog) => {
                                        return (
                                            <tr key={blog.id}>
                                                <td className="border px-4 py-2">
                                                    {blog.title}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {blog.content}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <Link href={route("blogs.edit", blog.id)}>
                                                        <PrimaryButton type="button">
                                                            Update
                                                        </PrimaryButton>
                                                    </Link>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <DangerButton
                                                        type="button"
                                                        data-blog_id={blog.id}
                                                        onClick={handleDelete}
                                                    >
                                                        Delete
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="p-2 flex justify-end">
                                <label htmlFor="">Row : {props.blogs.per_page}</label>
                            </div>
                            <div className="pt-4 flex justify-center">
                                <Pagination posts={props.blogs} search={data.search}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
