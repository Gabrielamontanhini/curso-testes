import supertest from "supertest";

import app from "../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })

})

describe("/fibonacci",() => {
  it("should return status 400 when param is NaN", async() => {
    const response = await api.get("/fibonacci?elements=NaN");
    expect(response.status).toBe(400)
  })
  it("should return status 400 when elements param is not present ", async()=> {
    const response = await api.get("/fibonacci");
    expect(response.status).toBe(400)
  })
  it("should return an array and status 200 when parameter is valid number", async()=> {
    const {status, body} = await api.get("/fibonacci?elements=10")
    expect(status).toBe(200)
    expect(body).toHaveLength(10)
    expect(body).toEqual([ 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13, 21, 34])
  })
})