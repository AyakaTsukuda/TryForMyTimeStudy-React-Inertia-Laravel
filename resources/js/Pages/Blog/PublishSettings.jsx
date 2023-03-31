import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import WideTextInput from '@/Components/WideTextInput';


export default function PublishSettings(props) {

    let form_type = !props.post ? 'create' : 'edit';

    const { data, setData, post, patch, processing, errors } = useForm({
        // title  : form_type=='create' ? "" : props.blog.title,
        // content: form_type=='create' ? "" : props.blog.content,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if(form_type=='create'){
            post(route("blogs.publish_setting_store"));
        } else {
            patch(route("blogs.publish_setting_update", props.blogs.id));
        }
    }

    return (
        <div>設定</div>

        // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Blog ${form_type=='create'?'Create':'Edit'}`}</h2>}
        // >
        //     <Head title="Blog" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 border-b border-gray-200">
        //                     <InputError message={errors.title}/>
        //                     <InputError message={errors.content}/>
        //                     <form onSubmit={submit}>
        //                         <div className="pb-4">
        //                             <InputLabel htmlFor="title" value="Title" />
        //                             <TextInput
        //                                 type="text"
        //                                 name="title"
        //                                 value={data.title}
        //                                 className="w-full"
        //                                 isFocused={true}
        //                                 onChange={onHandleChange}
        //                             />
        //                         </div>
        //                         <div>
        //                             <InputLabel htmlFor="content" value="Content" />
        //                             <WideTextInput
        //                                 rows="20"
        //                                 name="content"
        //                                 className="w-full"
        //                                 value={data.content}
        //                                 onChange={onHandleChange}
        //                             />
        //                         </div>
        //                         <div className="flex items-center justify-center mt-4">
        //                             <PrimaryButton
        //                                 disabled={processing}
        //                             >
        //                                 {form_type=='create' ? "Create" : "Update"}
        //                             </PrimaryButton>
        //                         </div>
        //                     </form>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
    );
}
