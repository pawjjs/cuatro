import express from "express";
import { readFile } from 'node:fs/promises';


const app = express();
const port = 3000;


// Klasy
// Klasa gracz
class Player {
    constructor(player_name, id) {
        this.player_name = player_name
        this.id = id
    }
}

// Klasa lobby
class Lobby {
    constructor(lobby_name, players) {
        this.lobby_name = lobby_name
        this.players = players
    }
}

// Lista lobby na serwerze
let lobbies = []


// Index
app.get("/", (req, res) => {
    res.send("STRONA GŁÓWNA; ZAWIERA LOBBY");  
})

// Logowanie
app.get("/login", (req, res) => {
    res.send("STRONA LOGOWANIA")
})

// Rejestracja
app.get("/register", (req, res) => {
    res.send("STRONA REJESTRACJI")
})

// Strona danego lobby
app.get("/lobby/:id", (req, res) => {
    const id = req.params.id;

    res.send(`STRONA LOBBY O ID: ${id}`)
})


app.listen(port, () => {
    console.log("Server działa!")
})


console.log("hello")