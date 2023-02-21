import React from 'react'
import './trip.css'
import TripData from './TripData'

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>View some of the recent trips</p>

            <div className='trip-cards'>
                <TripData
                    url="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
                    heading="Olive Garden"
                    paragraph="Olive Garden started as a unit of General Mills. The first Olive Garden was opened on December 13, 1982, in Orlando. By 1989, there were 145 Olive Garden restaurants, making it the fastest-growing units in the General Mills restaurant division. Olive Garden restaurants were uniformly popular, and the chain's per-store sales soon matched former sister company Red Lobster. The company eventually became the largest chain of Italian-themed full-service restaurants in the United States. "
                />

                <TripData
                    url="https://images.unsplash.com/photo-1669673614578-210179f1cbde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    heading="Calangute Beach"
                    paragraph="The Calangute Beach is one of the popular beaches in Goa and is often dubbed as the “Queen of the Beaches”. It is a perfect getaway for the hippies and the best time to visit this beach is during the Christmas season and in the month of May. The Calanguate beach portrays a perfect environment of the local Goan culture and it is said that the beach was discovered by the hippies themselves in the early 60s. Located 15 kms from Panjim, the Calangute beach in Goa boasts of an enthralling nightlife that continues till dawn."
                />

                <TripData
                    url="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    heading="Sunderban National Park"
                    paragraph="The Sunderban National Park is many things at once, a biosphere reserve, national park and tiger reserve, such is the richness of this mangrove ecosystem. What we commonly call Sunderbans is actually a large delta spread across 40,000 sq. km between India and Bangladesh! Just to give you an idea of how vast it really is, consider this. It stretches from River Hooghly in West Bengal, India, all the way to River Baleswar in Bangladesh. In this UNESCO World Heritage Site (it was declared a UNESCO World Heritage Site in 1987)."
                />
            </div>

        </div>
    )
}

export default Trip