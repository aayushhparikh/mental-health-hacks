import React, { useState, useEffect } from "react"
import axios from "axios";

function Main() {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    const quoteAPI = async () => {
        let quotearr = []

        const data = await axios.get("https://api.quotable.io/random")
        quotearr = data.data

        setQuote(quotearr.content)
        setAuthor(quotearr.author)
    }
    
    useEffect(() => {
        quoteAPI()
    }, [])

 return (
        <div>
            <h1>{quote} {author}</h1> 
        </div>
    )


}


export default Main