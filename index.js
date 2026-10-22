import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

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


const server = createServer(async (request, response) => {
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
        'text/html; charset=utf-8'
    )

    // Ciało odpowiedzi
    // GET /karta
    if (request.method === "GET"  &&
        request.url === "/karta"
    ) {
        let html_page = await readFile("./index.html", "utf-8")
        html_page = html_page.replace("{card_color}", card.getColor())
        html_page = html_page.replace("{card_symbol}", card.getSymbol())
        response.write(html_page)
    }

    // POST /karta
    else if (request.method === "POST" &&
        request.url === "/karta"
    ) {
        let post = ""
        
        for await (const chunk of request) {
            post += chunk
        }
        let params = new URLSearchParams(post)

        card.color = params.get("color")
        card.symbol = params.get("symbol")


        console.log("POST działa")
        response.write("TEST")
    }


    response.end()
})





console.log("hello")


server.listen(3000)