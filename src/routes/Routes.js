import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import News from '../screens/News'

/* 
    Switch é bom para que rotas não indentificas 
    possam ser renderizadas por um componente específico.
    Ou seja, quando o usuário acessar alguma URL inválida ele
    cairá em um <Route /> para este caso, como no exemplo baixo

*/

export default props => (
    <Switch>
        <Route
            path='/'
            exact
            component={Home}
        />
        <Route
            path='/news'
            exact
            component={News}
        />
        <Route
            path='/news/:id'
            exact
            component={News}
        />
        <Route
            path='/:id'
            exact
            component={Home}
        />
        <Route render={() => <h3>Página não encontrada :/</h3>} />
    </Switch>
)