import React from 'react'
import DestinationData from './DestinationData'
import './destination.css'
const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Roam anytime anywhere!</p>
            <DestinationData 
            beachHeading = 'Tarkarli Beach'
            beachInfo = 'Tarkarli is a village in Malvan taluka in Sindhudurg district in the Indian state of Maharashtra.It is a beach destination and remote place in southern Maharashtra. Few years ago, Tarkarli beach is declared as a Queen Beach of Konkan region. Monthly, Thousands of tourists are visiting this place to rejuvenate and enjoy thrill of water sports activities. All Watersports activities in Tarkarli are going on as per international safety of standards and under guidance of professional instructor(Dive Master) with modern safety equipment. Many scuba diving operators running this activities near Tsunami island, Devbagh because of shallow water and low life risk.'
            waterfallHeading = 'Dudhsagar Waterfall'
            waterfallInfo = "Dudhsagar Falls (lit. 'Sea of Milk') is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. It is 60 km from Panaji by road and is located on the Belgavi–Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgavi. Dudhsagar Falls is amongst India's tallest waterfalls with a height of 310 m (1017 feet) and an average width of 30 metres (100 feet). The falls is located in the Bhagwan Mahaveer Sanctuary and Mollem National Park among the Western Ghats. The falls is a punctuation mark in the journey of the Mandovi River from the Western Ghats to Panjim where it meets the Arabian sea."
            />
        </div>
    )
}

export default Destination