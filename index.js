import { WebSocketServer } from "ws";
import http from "http";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yaml";
import { readFile } from 'node:fs/promises';
import { readFileSync } from "node:fs";
import path from "node:path";

// Routery
import lobbyRouter from "./routes/lobby.js"


// Serwer; express, http, WebSocket
const app = express();
app.use(express.json());
const server = http.createServer(app);
const wss = new WebSocketServer({server});


const port = 3000;

const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: "3.2.1",
        info: {
            title: "Lobby API",
            version: "1.0.0",
            description: "API do zarządzania Lobby"
        },
        servers: [
            { url: `http://localhost:${port}` }
        ]
    },
    apis: [
        "./routes/lobby.js"
    ]
})

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// Mapa zalogowanych graczy (w tym guestów bez założonego konta)
let players = new Map();
// Mapa aktywnych lobby
let lobbies = new Map();




// Routing
//
// Routing na Lobby
app.use("/lobby", lobbyRouter);

// Tymczasowy (?) routing w index.js
// GET: Index
app.get("/", (req, res) => {
    res.sendFile(
        path.join(import.meta.dirname, "index.html")
    );
});
// GET: Logowanie
app.get("/login", (req, res) => {
    res.send("STRONA LOGOWANIA")
})
// GET: Rejestracja
app.get("/register", (req, res) => {
    res.send("STRONA REJESTRACJI")
})


// WSS on...
wss.on("connection", (client)=>{
    console.log("Połączenie")
    // Wiadomość do klienta przy połączeniu
    client.send("Połączono z serwerem");

    // Wiadomość od klienta
    client.on("message", (msg)=>{
        console.log(msg)
    })
})


const ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => console.log("hello");
ws.onmessage = (event) => console.log(event.data);


server.listen(port, () => {
    console.log("Server działa!")
})