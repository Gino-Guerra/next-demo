"use client"
import { useState,useEffect } from "react"
import AffirmationCard from "@/components/affirmationCard"
export default function AffirmOld() {

    const [affirmations, setAffirmations] = useState()

    useEffect(() => {
        fetch("https://affirm-bc-api.web.app/affirmations")
        .then(res => res.json())
        .then(setAffirmations)
        .catch(alert)
    },[])

    return(
        <main>
            <h1 className="text-3xl font-bold dark:text-amber-200 text-amber-700">Old Affirmation</h1>
            <section className="cotainer mx-auto sm:px-5 px-2 py-8 flex flex-wrap">
                {affirmations && affirmations.map(item => (
                    <AffirmationCard key={item.id} item={item}/>
             
             
                ) 
                )}
            </section>
        </main>
    )
}