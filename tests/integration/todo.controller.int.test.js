const request = require("supertest")
const endpointUrl = "/todos/"
const app = require("../../app")
const newTodo = require("../mock-data/new-todo.json")
describe(endpointUrl, ()=>{
    it("post"+endpointUrl,async ()=>{
        const response = await request(app).post(endpointUrl).send(newTodo)
        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe(newTodo.title)
        expect(response.body.done).toBe(newTodo.done)
    })
})