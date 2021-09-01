import React, { useState } from 'react'
import SearchField from 'react-search-field';
import styled from 'styled-components'

const SearchBar = ({ data, fitb }) => {


    const [searchTerm, setSearchTerm] = useState('')

    console.log(fitb)


    const noDupes = [...new Set(data)]

    console.log(noDupes)

    //iterate thru noDupes
    //if noDupes element (name) appears, grab first occurences' object
    //return that object's name/image


    const clearDupeObjects = noDupes.map(cardName => {

        const check = fitb.find(obj => obj.name === cardName)

        return check
    })

    return (
        <>

            <Input type='text' placeholder='search cards...' onChange={(e) => { setSearchTerm(e.target.value) }} />
            <MainContainer>
                {fitb && (
                    clearDupeObjects.filter((card) => {
                        if (searchTerm === '') {
                            return card
                        } else if (card.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return card.name
                        }
                    }).map((card, key) => {
                        return (

                            <CardContainer>
                                {card.name}
                                <CardImage src={card.img} loading='lazy' />
                            </CardContainer>

                        )
                    })
                )

                }
            </MainContainer>
        </>

    )
}

export default SearchBar


const CardImage = styled.img`
height: 400px;
width: 300px;
outline: none !important;

&:hover{
    cursor: pointer;
}
`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 80px;
border-top: 1px solid black;


`

const MainContainer = styled.div`
display: flex;
width: 85%;
margin-left: 20%;
flex-wrap: wrap;
`

const Input = styled.input`
padding: 0 10px 0 10px;
border-radius: 7px;
margin-bottom: 20px;
height: 30px;
width: 200px;
outline: none !important;

&:focus{
    outline: none;
}

`

