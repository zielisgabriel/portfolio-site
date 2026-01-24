import { Spinner } from "./ui/spinner";

export function GlobalLoading() {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center gap-4 absolute overflow-hidden">
      <h1 className="text-2xl font-bold">Zielis.</h1>
      <Spinner className="size-6" />
    </main>
  );
}