import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pagina/Login';
import Cadastro from './pagina/Cadastro';
import Usuario from './pagina/Usuario';
import Cliente from './pagina/Cliente'
import Fornecedor from './pagina/Fornecedor'
import Produto from './pagina/Produto'


function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/usuario" component={Usuario} />
                <Route path="/cliente" component={Cliente}/>
                <Route path="/fornecedor" component={Fornecedor}/>
                <Route path="/produto" component={Produto}/>


            </Switch>
        </BrowserRouter>

    )

}

export default Routes;