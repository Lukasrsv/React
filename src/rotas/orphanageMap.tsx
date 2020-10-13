import React from 'react';
import imgMarkerMap from '../imagens/Local.svg'
import {Link} from  'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanageMap(){
    return(

        <div id="page-map">
            <aside>
                <header>
                    <img src={imgMarkerMap} alt="Happy" />
                    <h2>escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                    
                </header>
                <footer>
                    <strong>Passo Fundo</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map center={[-28.2394544,-52.3791265]} zoom={14} style={{width:'100%',height:'100%' }} >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
    ;

}

export  default OrphanageMap;