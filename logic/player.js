// Klasa gracz, która występuje w grze i lobby
export default class Player {
    constructor(id, player_name) {
        this.id = id;
        this.player_name = player_name;
        this.hand = [];
    }
}