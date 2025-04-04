export function DotsLoader() {
    return (
        <div  className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] flex items-center mt-12 gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-dots-loader"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-dots-loader delay-50"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-dots-loader delay-100"></div>
        </div>
    );
}