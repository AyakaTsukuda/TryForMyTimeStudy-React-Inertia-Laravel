import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function WideTextInput({ rows = '10', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <textarea
                {...props}
                rows={rows}
                className={
                    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                    className
                }
                ref={input}
            />
        </div>
    );
});
