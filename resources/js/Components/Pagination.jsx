export default function Pagination({ posts='', search='' }) {

    const search_word_url = !search ? '' : `&search=${search}`;

    console.log(posts);

    return (

        <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">

            {/*~sm size*/}
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href={!posts.prev_page_url ? null : posts.prev_page_url}
                    className={`relative inline-flex items-center rounded-md border border-gray-300
                        bg-white px-4 py-2 text-sm font-medium text-gray-700 ${!posts.prev_page_url?'':'hover:bg-gray-50'}`}
                >
                    Previous
                </a>
                <label className="px-4 py-2 text-sm font-medium text-gray-700">
                    {`- ${posts.current_page} -`}
                </label>
                <a
                    href={!posts.next_page_url ? null : posts.next_page_url}
                    className={`relative inline-flex items-center rounded-md border border-gray-300
                        bg-white px-4 py-2 text-sm font-medium text-gray-700 ${!posts.next_page_url?'':'hover:bg-gray-50'}`}
                >
                    Next
                </a>
            </div>

            {/*md~ size  isolate*/}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav className="inline-flex -space-x-px rounded-md" aria-label="Pagination">

                        <a
                            href={posts.current_page==1 ? null : posts.first_page_url+search_word_url}
                            className={`relative inline-flex items-center px-4 py-2 rounded-l-md
                                text-gray-900 text-sm font-semibold ring-1 ring-inset ring-gray-300
                                ${posts.current_page==1?'':'hover:bg-gray-50'} focus:z-20 focus:outline-offset-0`}
                        >
                            {"«"}
                        </a>

                        {posts.links.map((button_info, index)=>{
                            // button design
                            const text_color = !button_info.active ? 'text-gray-900' : 'text-white';
                            const bg_color   = !button_info.active ? 'bg-white' : 'bg-indigo-600';
                            const hover      = () => {
                                if((button_info.label=='&laquo; Previous' && posts.current_page==1)
                                    ||(button_info.label=='Next &raquo;' && posts.current_page==posts.last_page)){
                                    return('');

                                } else if(!button_info.active){
                                    return('hover:bg-gray-50');

                                } else {
                                    return('hover:bg-indigo-600');
                                }
                            }

                            // mark transform
                            const getLabel = () => {
                                if(button_info.label=='&laquo; Previous'){
                                    return ("<");
                                } else if(button_info.label=='Next &raquo;'){
                                    return (">");
                                } else {
                                    return (button_info.label);
                                }
                            }

                            return(
                                <a
                                    key={index}
                                    href={!button_info.url ? null : button_info.url+search_word_url}
                                    className={`relative inline-flex items-center px-4 py-2
                                                ${text_color} ${bg_color} text-sm font-semibold ring-1 ring-inset ring-gray-300
                                                ${hover()} focus:z-20 focus:outline-offset-0`}
                                >
                                    {getLabel()}
                                </a>
                            );
                        })}

                        <a
                            href={posts.current_page==posts.last_page ? null : posts.last_page_url+search_word_url}
                            className={`relative inline-flex items-center px-4 py-2 rounded-r-md
                                text-gray-900 text-sm font-semibold ring-1 ring-inset ring-gray-300
                                ${posts.current_page==posts.last_page?'':'hover:bg-gray-50'} focus:z-20 focus:outline-offset-0`}
                        >
                            {"»"}
                        </a>

                    </nav>
                </div>
            </div>
        </div>

        // <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
        //     <div className="flex flex-1 justify-between sm:hidden">
        //         <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
        //         <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        //     </div>
        //     <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        //         <div>
        //             <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
        //                 <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
        //                      <span className="sr-only">Previous</span>
        //                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //                          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
        //                      </svg>
        //                 </a>

        //                 { /*Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"*/ }
        //                 <a href="#" aria-current="page"
        //                             className="relative z-10
        //                                                 inline-flex items-center bg-indigo-600
        //                                                                          px-4 py-2 text-sm font-semibold text-white    focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        //                 <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        //                 <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        //                 <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        //                 <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        //                 <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        //                 <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        //                 <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">

        //                 <span className="sr-only">Next</span>
        //                 <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //                     <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        //                 </svg>
        //                 </a>
        //             </nav>
        //         </div>
        //     </div>
        // </div>

    );
}
