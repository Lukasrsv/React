import{BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import landing from './rotas/principal';
import OrphanageMap from './rotas/orphanageMap'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={landing}/>
            <Route path="/App" component={OrphanageMap}/>


            
        </BrowserRouter>

    );


}

export default Routes; 