import React from 'react'
import 'leaflet/dist/leaflet.css'
import { Map, TileLayer, Marker } from 'react-leaflet'
import Leaflet from 'leaflet'

import '../styles/Contact.css'

var icon = `${process.env.PUBLIC_URL}/images/marker.png`

const mapIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize:[20,30]
})

export default function Contact(){

    return(
        <>
        <div className="mainContact">
            <div className="divContact">
                <div className="contactTitle">
                    <header>
                        <h2>Contato</h2>
                    </header>
                    <div className="contactText">
                        <strong>Carvoeira, Florianópolis, 88040-370</strong>
                        <span>(12) 3456-7890</span>
                    </div>
                    <footer>
                        <strong>Florianopolis</strong>
                        <span>Santa Catarina</span>
                    </footer>
                </div>
                <div className="contactMap">
                    <Map zoomControl={false} center={[-27.6006175,-48.518566]} zoom={15} style={{ width: '100%', height: '100%'}}>
                        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhpYWdvYyIsImEiOiJja2diNTZwZ3EwMGVzMnhsN3NtZjh1eGVtIn0.FdO4y2BMjBNHOCMhHp9rEg`} />
                        <Marker icon={mapIcon} position={[-27.6006175,-48.518566]}/>
                    </Map>
                </div>
            </div>
        </div>
        </>
    )
}