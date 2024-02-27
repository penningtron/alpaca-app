// const APCA-API-KEY-ID = "PKUHJ7NZEG8V5L8MXC8Q"

const getPositions = async(event) => {
    try{
        event.preventDefault()
        let response = await fetch('https://paper-api.alpaca.markets/v2/account')
        let responseData = await response.json()
        console.log(responseData)

    }
    catch(err){
        console.log(err.message)
    }
}
