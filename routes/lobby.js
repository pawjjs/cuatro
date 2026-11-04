import { Router } from "express";
import { randomUUID } from "node:crypto";
import path from "node:path";
import Game from "../logic/game.js";

const router = Router();
// router.get("/", (req, res) => {
//
// });


// Klasa lobby
export class Lobby {
    constructor(lobby_name, players, hostID) {
        this.lobby_id = randomUUID();
        this.lobby_name = lobby_name;
        this.players = players;
        this.hostID = hostID;
        this.game;
    }

    // Rozpoczęcie gry w Lobby
    startLobbyGame() {
        this.game = new Game(this.players);
        this.game.startGame()
    }
}


// Endpointy
// GET: Strona z listą lobby
/**
 * @openapi
 * /lobby:
 *  get:
 *      summary: Lista Lobby
 *      tags:
 *          - Lobby
 *      responses:
 *          '200':
 *              description: Lista Lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.get("/", (req, res) => {
    console.log("GET: lobby - ", import.meta.dirname)
    res.sendFile(
        path.join(import.meta.dirname, "lobby.html")
    );
})

// POST: Utworzenie nowego lobby
/**
 * @openapi
 * /lobby/create:
 *  post:
 *      summary: Utworzenie nowego Lobby
 *      tags:
 *          - Lobby
 *      responses:
 *          '200':
 *              description: Utworzenie nowego lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/create/", (req, res) => {
    console.log("POST: lobby - ", import.meta.dirname)

    // const lobby_name = req.params.name
    // let lobby = new Lobby(lobby_name)

    
    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// GET: Strona danego lobby
/**
 * @openapi
 * /lobby/{id}:
 *  get:
 *      summary: Strona danego Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Strona Lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.get("/create", (req, res) => {
    res.sendFile(
        path.join(import.meta.dirname, "lobby.html")
    );
})

// POST: Rozpoczęcie gry w lobby
/**
 * @openapi
 * /lobby/{id}/start:
 *  post:
 *      summary: Rozpoczęcie gry w danym Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Rozpoczęcie gry w lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/:id/start", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // Rozpoczęcie gry przez lobby
    lobby.startGame();


    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Dołączanie do danego lobby
/**
 * @openapi
 * /lobby/{id}/join:
 *  post:
 *      summary: Dołączenie gracza do danego Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Dołączenie do lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/:id/join", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Zagranie karty przez gracza
/**
 * @openapi
 * /lobby/{id}/card:
 *  post:
 *      summary: Zagranie karty w Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Zagranie karty w Lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/:id/card", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Wezwanie "UNO"
/**
 * @openapi
 * /lobby/{id}/call:
 *  post:
 *      summary: Wezwanie UNO w Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Wezwanie UNO w Lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/:id/call", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Wzięcie karty ze stosu
/**
 * @openapi
 * /lobby/{id}/take:
 *  post:
 *      summary: Wzięcie karty ze stosu w Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Wzięcie karty ze stosu w Lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/:id/take", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

// POST: Opuszczenie lobby
/**
 * @openapi
 * /lobby/{id}/leave:
 *  post:
 *      summary: Opuszczenie danego Lobby
 *      tags:
 *          - Lobby
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                type: string
 *            description: ID danego Lobby
 *      responses:
 *          '200':
 *              description: Opuszczenie danego Lobby
 *          '400':
 *              description: Lobby nie znaleziono
 */
router.post("/:id/leave", (req, res) => {
    const id = req.params.id;
    const lobby = lobbies.get(id)

    // res.sendFile(
    //     path.join(import.meta.dirname, "lobby.html")
    // );
})

export default router;