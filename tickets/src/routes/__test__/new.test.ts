import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/tickets";

it("has a route handler listening to /api/tickets for post request", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).not.toEqual(404);
});

it("can only be accessed if the user is signed in", async () => {
  const response = await request(app).post("/api/tickets").send({}).expect(401);
});

it("returns a status other than 401 if the user is signed in", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({});
  expect(response.status).not.toEqual(401);
});

describe("Invalid title tests", () => {
  it("returns an error if an invalid title is provided (empty string)", async () => {
    await request(app)
      .post("/api/tickets")
      .set("Cookie", signin())
      .send({
        title: "",
        price: 10,
      })
      .expect(400);
  });
});
describe("Invalid price tests", () => {
  it("returns an error if an invalid price is provided", async () => {
    await request(app)
      .post("/api/tickets")
      .set("Cookie", signin())
      .send({
        title: "new ticket",
        price: -10,
      })
      .expect(400);
    await request(app)
      .post("/api/tickets")
      .set("Cookie", signin())
      .send({
        title: "new ticket",
      })
      .expect(400);
  });
});

it("creates a ticket with valid inputs", async () => {
  //add a check to make sure that the ticket is saved to database.
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);
  const title = "new title";
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title,
      price: 20,
    })
    .expect(201);
  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].price).toEqual(20);
  expect(tickets[0].title).toEqual(title);
});
