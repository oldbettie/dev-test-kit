"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { get } from "@/lib/request"

type Pokemon_species = {
    name: string
    url: string
}


type Pokedex_Entry = {
    entry_number: number
    pokemon_species: Pokemon_species
}

// gets all the pokemon in a list from our secret api and returns them so you can view each on a new page
export default function Page() {
    const [pokemon, setPokemon] = useState<any[]>([])

    useEffect(() => {
        get(`${process.env.NEXT_PUBLIC_SECRET_API!}`)
            .then(res => setPokemon(res.data.pokemon_entries))

        console.log(pokemon)
    }, [])

    return (
        <section>
            <h2>Check out the full list of pokemon here!</h2>
            {pokemon && pokemon.map((poke: Pokedex_Entry) => {
                return (
                    <>
                        <Link href={poke.pokemon_species.url}>
                            <h4>{poke.pokemon_species.name}</h4>
                        </Link>
                    </>
                )
            })}
        </section>
    )
}
