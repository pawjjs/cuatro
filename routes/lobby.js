import { Router } from "express";
import path from "node:path";

const router = Router();
// router.get("/", (req, res) => {
    
// });


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


/**
 * @openapi
 * /api/lobby:
 *  get:
 *      summary: Lista lobby
 *      responses:
 *          '200':
 *              description: Lista lobby5
 */



// Endpointy
// GET: Strona z listą lobby
router.get("/", (req, res) => {
    console.log("GET: lobby - ", import.meta.dirname)
    res.sendFile(
        path.join(import.meta.dirname, "lobby.html")
    );
})

// GET: Strona danego lobby
router.get("/:id", (req, res) => {
    const id = req.params.id;

    res.sendFile(
        path.join(import.meta.dirname, "lobby.html")
    );
})

// POST: Dołączanie do danego lobby
router.post("/:id/join", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Zagranie karty przez gracza
router.post("/:id/card", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Wezwanie "UNO"
router.post("/:id/call", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Wzięcie karty ze stosu
router.post("/:id/take", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Opuszczenie lobby
router.post("/:id/leave", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

export default router;