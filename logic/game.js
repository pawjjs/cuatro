import { randomUUID } from "node:crypto";

// Klasa karty
export class Card {
    constructor() {
        this.id = RandomUUID();
        this.color = "red";  // Kolor karty: red/blue/green/yellow
        this.value = "0"  // numer karty 0-9 albo specjalna karta ("skip", "block", etc.)
    }
}


// Klasa gry
export default class Game {
    constructor(players) {
        this.players = players;  // Lista graczy w grze

        this.drawPile = [];  // Stos kart do doboru
        this.discardPile = [];  // Stos zagranych kart

        this.currentPlayerId = 0;  // ID gracza o obecnej turze
        this.playDirection = 1;  // 1 - zgodnie z zegarem; -1 - naprzeciw zegara

        this.currentColor = "";  // Obecnie grany kolor: red/blue/green/yellow
    }
}