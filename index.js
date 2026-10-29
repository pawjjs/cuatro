import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yaml";
import { readFile } from 'node:fs/promises';
import { readFileSync } from "node:fs";
import path from "node:path";

// Routery
import lobbyRouter from "./routes/lobby.js"


const app = express();
app.use(express.json());

// Specyfikacja OpenAPI w openapi.yaml
// const spec = YAML.parse(
//     readFileSync(new URL("./openapi.yaml", import.meta.url), "utf8")
// );

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));  // zawiera YAML
app.use("/api-docs", swaggerUi.serve);

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
    apis: []
})

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);



// Klasy
// Klasa gracz
class Player {
    constructor(id, player_name) {
        this.id = id;
        this.player_name = player_name;
        this.hand = [];
    }
}


// Mapa zalogowanych graczy (w tym guestów bez założonego konta)
let players = new Map();




// Routing
app.use("/api/lobby", lobbyRouter);


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



app.listen(port, () => {
    console.log("Server działa!")
})


console.log("hello")