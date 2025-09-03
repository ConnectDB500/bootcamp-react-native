import "dotenv";
import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true});

server.register(cors, {
    origin: "*",
    methods: ["GET"],
});

const teams = [
    {id: 1, name: "McLaren", base: "United Kingdom"},
    {id: 2, name: "Mercedes", base: "United Kingdom"},
    {id: 3, name: "Red Bull Racing", base: "United Kingdom"}
]

const drivers = [
    {id: 1, name: "Ayrton Senna", team: "McLaren"},
    {id: 2, name: "Lewis Hamilton", team: "Mercedes"},
    {id: 3, name: "Max Verstappen", team: "Red Bull Racing"}
]

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200);
    return { teams };
})

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);
    return { drivers };
})

interface DriverParam {
    id: string
}

server.get<{Params: DriverParam}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver){
        response.type("application/json").code(404);
        return { message: "Driver Not Found!" }
    } else {
        response.type("application/json").code(200);
        return { driver };
    }
})

server.listen({port: 4000}, () => {
    console.log("server init");
})