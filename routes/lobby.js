import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    
});


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
// GET: Strona danego lobby
router.get("/lobby/:id", (req, res) => {
    const id = req.params.id;

    res.sendFile(
        path.join(import.meta.dirname, "lobby.html")
    );
})

// POST: Dołączanie do danego lobby
router.post("/lobby/:id/join", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Zagranie karty przez gracza
router.post("/lobby/:id/card", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Wezwanie "UNO"
router.post("/lobby/:id/call", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Wzięcie karty ze stosu
router.post("/lobby/:id/take", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Opuszczenie lobby
router.post("/lobby/:id/leave", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

export default router;