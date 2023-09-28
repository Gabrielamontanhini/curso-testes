
import supertest from "supertest";
import app from "../src/app"

const server = supertest(app)

describe("api",  () => {
    it("/health", async() => {
        const result = await server.get("/health");
        const {statusCode} = result;
        expect(statusCode).toBe(200);
    });
});