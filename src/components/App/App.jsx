import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from  './App.styles'

function App(){
    return <Wrapper>
        <Container>
           <AppHeader />
           <AppContainer
               left = {<div style={{backgroundColor: "red"}}>
                   Produtos disponiveis</div>}
               middle = {<div style={{backgroundColor: "green"}}>
                   Sua lista de compras</div>}
               right = {<div style={{backgroundColor: "blue"}}>
                   Estatisticas</div>}
           />
        </Container> 
    </Wrapper>
}

export default App