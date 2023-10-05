import supertest from "supertest";

import app from "../../src/app";
import { MathBody } from "../../src/validator";

const api = supertest(app);

describe("calculator tests", () => {
  it("should do a sucessfull operation and return 200", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: 1,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(3);
  })

  it("should not do the operation and return 422", async () => {
    const mathBody = { // missing properties on purpose
      operation: "sum",
    };

    const { status } = await api.post("/math").send(mathBody);
    expect(status).toBe(422);
  });

  it("should not do an invalid operation and return 422", async () => {
    const mathBody = {
      operation: "not",
      n1: 2,
      n2: 2
    };

    const { status } = await api.post("/math").send(mathBody);
    expect(status).toBe(400);
  });
});