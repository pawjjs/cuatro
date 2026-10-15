// Obiekt "karta"
const card = {
    color: "Niebieski",
    symbol: "1",

    getColor() {
        return this.color
    },

    getSymbol() {
        return this.symbol
    }
}

import { createServer } from 'node:http'
const server = createServer((request, response) => {
    console.log(
        request.method,
        request.url
    )
    

    // const url = new URL(
    //     request.url, "http://${request.headers.host}"
    // )


    // Nagłówki
    response.setHeader(
        'Content-Type',
        'text/plain; charset=utf-8'
    )


    // Ciało odpowiedzi
    // GET card
    if (request.method === "GET"  &&
        request.url === "/karta"
    ) {
        response.write("Kolor: " + card.getColor() + "\n")
        response.write("Symbol: " +  card.getSymbol() + "\n")
    }

    // POST card
    if (request.method === "POST" &&
        request.url === "/karta"
    ) {
        console.log("test")
        response.write("TEST")
    }


    response.end()
})





console.log("hello")


server.listen(3000)