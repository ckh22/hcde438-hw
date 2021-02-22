import React from 'react'
import { Button } from '@material-ui/core'

const FishBase = () => {

    async function fishData() {
        let url = 'https://fishbase.ropensci.org/'
        let route = 'species'
        url += route
        console.log(url)
        const res = await fetch(url, )
        console.log(res)
    }

    return (
        <Button onClick={() => fishData()}>
            Fishbase
        </Button>
    )
}

export default FishBase
