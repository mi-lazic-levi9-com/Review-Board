import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to Review Board
        </h1>
        <p className="text-base text-center">
          ReviewBoard is a CMS-driven product review platform where users can
          explore editorial reviews of tools, apps, and services
        </p>
      </main>
    </div>
  );
}
