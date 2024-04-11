import Link from "next/link"
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center items-center h-[200px] gap-5 w-full mx-auto">
        <h1>Home</h1>
        <Link href="/pokemon" className="text-blue-400">View Pokemon!!!</Link>
        <p>Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the Pokémon media franchise</p>
        <Image width={200} height={200} src="/public/char.png" alt="Charmander" />
    </main>
  );
}
