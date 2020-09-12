import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from  './App.styles'
import productsMock from '../../mocks/products.json'
import extractPercentage from '../../utils/extractPergentege'

function App(){

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    /* const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)
    const [leek, setLeek] = useState(false) */
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

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

    useEffect(() => {
        const total = selectedProducts
            .map(product => product.price)
            .reduce((a, b) => a + b, 0)

        setTotalPrice(total)

    }, [selectedProducts] )

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
                    <LineChart 
                    color = {colors[0]} 
                    title = "Saudavel" 
                    percentage = {extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => product.tags.includes('healthy'))
                        .length
                    )} 
                    />
                    <LineChart 
                    color = {colors[1]} 
                    title = "Nao tao saudavel" 
                    percentage = {extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => product.tags.includes('junk'))
                        .length
                    )} 
                    />
                    <LineChart 
                    color = {colors[2]} 
                    title = "Limpeza" 
                    percentage = {extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => product.tags.includes('cleaning'))
                        .length
                    )} 
                    />
                    <LineChart 
                    color = {colors[3]} 
                    title = "Outros" 
                    percentage = {extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => product.tags.includes('others'))
                        .length
                    )} 
                    />

                    <div style = {{ marginTop: 12 }}>
                        <h2 style = {{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                            Previsao de Gastos
                        </h2>
                        <div style={{ fontSize: 24 }}>
                            { totalPrice.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL' 
                            }) }
                        </div>
                    </div>

                 </div>}
           />
        </Container> 
    </Wrapper>
}

export default App