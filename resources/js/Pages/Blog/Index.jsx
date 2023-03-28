import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head, useForm } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

export default function Index(props) {

    const {delete: destory} = useForm();

    const handleDelete = (event) => {
        let id = event.target.dataset.blog_id
        destory(
            route("blogs.destroy", id),
            {preserveScroll: true}
        );
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
                            <div>
                                <Link href={route("blogs.create")}>
                                    <PrimaryButton type="button">New Create</PrimaryButton>
                                </Link>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Contents</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.blogs.map((blog) => {
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

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
