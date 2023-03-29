import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Try this tasks!</div>
                        <label htmlFor="">基礎編</label>
                        <ul className="p-6 text-gray-900">
                            <li>● inertia.js + React のCRUDチュートリアル</li>
                            <li>● inertia.js動作の基本</li>
                            <li>● React BlogのContentをTextareaフォームのコンポーネントに置き換えてみる</li>
                            <li>● inertia.js + React 検索フォームの作り方を確認</li>
                            <li>〇inertia.js + React ページネーションのやり方を確認</li>
                            <li>〇色々なフォームのデータの渡し方を確認(dropdown, dropdown(複数選択), checkbox, radio, fileImport)</li>
                            <li>〇useForm errors メッセージの編集方法を探す</li>
                            <li>〇Laravel FormValidation まとめて書く書き方確認&Form使ってる所全部書き直し(Login追っていけばありそう)</li>
                        </ul>
                        <label htmlFor="">Break time</label>
                        <ul>
                            <li>〇DashboardのTodo、Checkboxにしませんか？</li>
                        </ul>
                        <label htmlFor="">応用編</label>
                        <ul className="p-6 text-gray-900">
                            <li>〇プラスボタンでフォームが増えてくやつの作り方</li>
                            <li>〇マイナスボタンでフォームが消えていくやつの作り方</li>
                            <li>〇inputFormの入力補完</li>
                            <li>〇モーダルの出し方と使うデータの渡し方</li>
                        </ul>
                        <label htmlFor="">番外編</label>
                        <ul className="p-6 text-gray-900">
                            <li>〇Laravel User毎に出し分けるヤツのやり方確認(Login追っていけばありそう)</li>
                            <li>〇inertia.js API通信(あまりにも資料が少なかったらやめる)</li>
                        </ul>
                        <p className="p-6 text-gray-900"> ↑ ここまでやったところで一週間が終わると思う。</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
