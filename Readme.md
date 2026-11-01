# Hogwarts Course Management System – backend

Express + PostgreSQL REST API.

## Opsætning
1. `npm install`
2. Kopiér `.env.example` til `.env` og udfyld værdierne
3. Kør `hogwarts.sql` i pgAdmin eller DataGrip for at oprette tabeller og data
4. `node server.js` – serveren kører på http://localhost:3000

## Endpoints

| Method | Route | Beskrivelse |
|---|---|---|
| GET | /houses | get all houses |
| GET | /houses/:id | get one house |

## Mangler
- Endpoints for teachers, students og courses
- Opdeling i routes-mappe (routes ligger i server.js)

## Test af endpoints
Testene ligger i mappen `hogwarts-api-test` og er lavet i Bruno.
Åbn Bruno → "Open Collection" → vælg mappen `hogwarts-api-test`.
Start serveren først, og kør derefter de enkelte requests.