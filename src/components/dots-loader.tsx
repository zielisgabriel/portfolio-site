export function DotsLoader() {
    return (
        <div  className="flex items-center mt-12 gap-1.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-dot-float-loader"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-dot-float-loader delay-50"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-dot-float-loader delay-100"></div>
        </div>
    );
}