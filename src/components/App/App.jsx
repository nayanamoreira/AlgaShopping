import React, { useState } from 'react'
import CheckBox from '../../shared/CheckBox'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from  './App.styles'

function App(){
    const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)


    return <Wrapper>
        <Container>
           <AppHeader />
           <AppContainer
               left = {<div>
                   Produtos disponiveis:

                   <CheckBox
                        value={lettuce}
                        title = "Alface"
                        onClick ={() => setLettuce(!lettuce)}
                   />
                   <CheckBox
                        value={rice}
                        title = "Arroz"
                        onClick ={() => setRice(!rice)}
                   />
                   </div>}
               middle = {<div>
                   Sua lista de compras</div>}
               right = {<div>
                   Estatisticas</div>}
           />
        </Container> 
    </Wrapper>
}

export default App