import express from "express";
import { readFile } from 'node:fs/promises';
import path from "node:path";


const app = express();
const port = 3000;


// Klasy
// Klasa gracz
class Player {
    constructor(id, player_name) {
        this.id = id;
        this.player_name = player_name;
        this.hand = [];
    }
}

// Klasa lobby
class Lobby {
    constructor(lobby_name, players, hostID) {
        this.lobby_name = lobby_name;
        this.players = players;
        this.hostID = hostID;
    }
}

// Mapa aktywnych lobby
let lobbies = new Map();
// Mapa zalogowanych graczy (w tym guestów bez założonego konta)
let players = new Map();


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

// GET: Strona danego lobby
app.get("/lobby/:id", (req, res) => {
    const id = req.params.id;

    res.sendFile(
        path.join(import.meta.dirname, "lobby.html")
    );
})

// POST: Dołączanie do danego lobby
app.post("/lobby/:id/join", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})


app.listen(port, () => {
    console.log("Server działa!")
})


console.log("hello")