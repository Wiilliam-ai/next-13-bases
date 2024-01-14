import { Navbar } from "@/components"

export default function ClientLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <Navbar/>
      <main className="p-3 container mx-auto flex flex-col justify-center items-center">
        <h1>Hola mundo</h1>
        {children}
      </main>
    </>
  );
}
