import { DotsLoader } from "@/components/dots-loader";

export default function Loading() {
    return (
        <div className="absolute left-0 top-0 z-100 flex flex-col justify-center items-center w-full h-screen bg-background">
            <DotsLoader />
        </div>
    );
}