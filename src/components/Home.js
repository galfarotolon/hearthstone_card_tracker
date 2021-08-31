import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Home = () => {

    //change search bar
    //use .filter method and push the results to array, display that array as list of cards




    const [fitb, setFitb] = useState()
    const [input, setInput] = useState([])
    const [names, setNames] = useState([])
    // const [value, setValue] = useState([])


    const barrens = '/sets/Forged%20in%20the%20Barrens'

    const options = {
        method: 'GET',
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards${barrens}`,
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_API_HOST
        }
    };


    useEffect(() => {
        axios.request(options).then(res => {
            setFitb(res.data)

        }).catch((error) => {
            console.error(error);
        });

    }, [])

    // console.log(fitb)


    const allCardNames = []

    const allCardImages = []

    //check the current expansion, if its not empty, map through it
    if (fitb) {
        fitb.map(cards => {
            // console.log(cards)
            // allCardNames.push(Object.values(cards)[2])

            allCardNames.push(cards.name)
            allCardImages.push(cards.img)

        })
    }

    const handleChange = (e) => {
        setNames(e.target.value);
    }


    const results = []



    const searchField = []

    console.log(names)


    const defaultProps = {
        options: allCardNames,
        getOptionLabel: (option) => option,
    };

    //redo search bar since it doesn't add input to saved list

    return (
        <>


            <form>

                {/* <Autocomplete
                    id="combo-box-demo"
                    options={allCardNames}
                    getOptionLabel={(option) => {
                        // results.push(option)
                        // console.log(option)
                        return option
                    }}
                    style={{
                        width: 300,
                        margin: '0 auto'
                    }}
                    renderInput={(params) => {
                        searchField.push(params)


                        return <TextField {...params} label="Search Cards" variant="outlined" />
                    }
                    }

                    onChange={handleChange}
                // value={names}


                /> */}



                <Autocomplete
                    {...defaultProps}
                    id="include-input-in-list"
                    includeInputInList
                    renderInput={(params) => (
                        <TextField {...params} label="includeInputInList" margin="normal" />
                    )}
                />
                <input value={names} onChange={handleChange} options={allCardNames}></input>

                {fitb && (
                    fitb.map(cards => {


                        // allCardNames.push(Object.values(cards)[2])


                        const getCards = (cards) => {



                            return <img src={cards.img} />

                        }

                        getCards(cards)


                    }))
                }


                <h1>{input}</h1>
                <h1>{results}</h1>

            </form>
        </>
    )
}

export default Home
