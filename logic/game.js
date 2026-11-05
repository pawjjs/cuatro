import { randomUUID } from "node:crypto";

// Klasa karty
export class Card {
    constructor(color, value) {
        this.id = randomUUID();
        this.color = "red";  // Kolor karty: red/blue/green/yellow
        this.value = "0"  // numer karty 0-9 albo specjalna karta ("skip", "block", etc.)
    }
}

// Kolory
const colors = ["red", "blue", "green", "yellow"]

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

    // Tworzenie kart do gry
    createDeck() {
        // Tworzenie kart dla każdego koloru
        for (let color of colors) {
            // Tworzenie kart dla każdego numeru
            for (let num = 0; num < 10; num++) {
                // Nowa karta
                let new_card = new Card(color, string(num))
                // Dodanie karty do stosu
                this.drawPile.push(new_card)
            }
        }

        // Tasowanie
        this.drawPile = this.FYshuffle(this.drawPile);
    }

    // Tasowanie kart algorytmem Fishera-Yatesa
    // (https://bost.ocks.org/mike/algorithms/#shuffling)
    FYshuffle(array) {
        let n = array.length, t, i;
        while (n) {
            i = Math.random() * n-- | 0;  // 0 <= i < n
            t = array[n];
            array[n] = array[i];
            array[i] = t;
        }

        return array
    }


    // Rozpoczęcie gry
    startGame() {
        // Utworzenie kart
        this.createDeck();

        // Przydzielenie 7 kart każdemu graczowi
        for (let player of players) {
            player.hand = this.drawPile.splice(0, 7);
        }

        // Wybranie pierwszej możliwej karty na stos zagranych
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  // Karty nie-specjalne
        let i = 0;
        while(true) {
            // Jeśli dana karta nie jest kartą specjalną, zostanie przeniesiona na stos kart zagranych
            if (this.drawPile[i].value in numbers) {
                card = this.drawPile.splice(i, 1)[0];
                this.discardPile.push(card);
                break;
            }

            i++;
        }
    }

    // Zagranie karty
    playCard(player, played_card) {
        // Kartę może zagrać tylko gracz odgrywający obecną turę
        if (player.id != this.currentPlayerId) {
            return
        }

        // Jeśli karta nie jest prawidłowa, nie może zostać zagrana
        if (!this.checkCardValid(played_card)) {
            return
        }

        // Dodanie karty do stosu zagranych kart
        this.discardPile.push(played_card)

        card_index = player.hand.indexOf(played_card);  // Indeks zagranej karty w ręce gracza
        player.hand.splice(card_index, 1);  // Usunięcie zagranej karty z ręki gracza
    }

    // Sprawdzenie czy dana karta jest prawidłowa/czy można ją zagrać
    checkCardValid(new_card) {
        // Dana karta musi mieć ten sam kolor albo numer co ostatnio zagrana karta
        last_played_card = this.getLastPlayedCard();
        if ((new_card.color === last_played_card.color) || (new_card.value === last_played_card.value)) {
            return true
        }

        // ??? sprawdzenie specjalnych kart tutaj ???

        return false
    }

    // Zwrócenie ostatnio zagranej karty, czyli tej na górze stosu zagranych kart
    getLastPlayedCard() {
        return this.discardPile[-1]
    }
}