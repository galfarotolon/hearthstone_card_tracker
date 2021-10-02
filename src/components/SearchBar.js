import React, { useState, useEffect } from 'react'
import SearchField from 'react-search-field';
import styled from 'styled-components'

const SearchBar = ({ data, fitb }) => {


    const [searchTerm, setSearchTerm] = useState('')
    const [newObj, setNewObj] = useState([])

    // console.log(fitb)


    const noDupes = [...new Set(data)]

    // console.log(noDupes)



    let check;
    let newArr = []

    const clearDupeObjects = noDupes.map(cardName => {

        check = fitb.find(obj => obj.name === cardName)
        return check
    })



    // have to figure out how to grab the new object with images, and use that to add into an array and loop through the render

    useEffect(() => {
        clearDupeObjects.map(el => {

            setNewObj({ ...check, newImg: `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${el.cardId}.png` })

            console.log(newObj)
            newArr.push(newObj)

        })

        console.log(newArr)

    }, [])




    // const locale = 'enUS'
    // const res = '256x'
    // const id = 'WC_701'
    // const ext = 'png'

    // const link = `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/BOM_02_Octobot_007hb.png`

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

