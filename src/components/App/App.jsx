import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from  './App.styles'
import productsMock from '../../mocks/products.json'

function App(){

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    /* const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)
    const [leek, setLeek] = useState(false) */
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked)

        setSelectedProducts(newSelectedProducts)
    } , [products])
    
    function handleToggle(id, checked){
        const newProducts = products.map(product => 
             product.id === id 
            ? {...product, checked: !product.checked}
            : product

/*             if(product.id === id) {
                return {
                    ...product, //spread 
                    checked: !product.checked
                }
            }
            else {
                return product
            } */
        ) 
        setProducts(newProducts)
    }

    return <Wrapper>
        <Container>
           <AppHeader />
           <AppContainer
               left = {
                <ShoppingList 
                    title = "Produtos disponiveis: "
                    products = {products}
                    onToggle = {handleToggle}
                />
                }
               middle = {
                <ShoppingList
                    title = "Sua lista de compras: "
                   products={selectedProducts}
                   onToggle = {handleToggle}
                />
                }
               right = {<div>
                   Estatisticas
                    <LineChart color = {colors[0]} title = "Saudavel" percentage = {80} />
                    <LineChart color = {colors[1]} title = "Nao tao saudavel" percentage = {20} />
                    <LineChart color = {colors[2]} title = "Limpeza" percentage = {35} />
                    <LineChart color = {colors[3]} title = "Outros" percentage = {15} />

                 </div>}
           />
        </Container> 
    </Wrapper>
}

export default App