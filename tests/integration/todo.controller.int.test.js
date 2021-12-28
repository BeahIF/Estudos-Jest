const request = require("supertest")
const endpointUrl = "/todos/"
const app = require("../../app")
const newTodo = require("../mock-data/new-todo.json")
const allTodos = require("../mock-data/all-todos.json")

describe(endpointUrl, ()=>{
    test("GET"+endpointUrl,async()=>{
        const response = await request(app).get(endpointUrl)
        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body[0].title).toBeDefined()
    })
    test("GET by id"+endpointUrl,async()=>{
        const response = await request(app).get(endpointUrl+firstTodo._id)
        expect(response.statusCode).toBe(200)
        expect(response.body.tile).toBe(firstTodo.title)
        expect(response.body.done).toBe(firstTodo.done)
    })
    test("GET todoby id doesn't exist"+endpointUrl+":todoId",async()=>{
        const response = await request(app).get(endpointUrl+"9fh39g785hgi4r")
        expect(response.statusCode).toBe(404)
    })
    it("post"+endpointUrl,async ()=>{
        const response = await request(app).post(endpointUrl).send(newTodo)
        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe(newTodo.title)
        expect(response.body.done).toBe(newTodo.done)
        newTodoId= response.body._id
    })
    it("should return error 500 on malformed data with POST"+endpointUrl, async()=>{
        const response = await (await request(app).post(endpointUrl)).send({title:"Missing done property"})
        expect(response.statusCode).toBe(500)
        expect(response.body).toStrictEqual({
            message:"Todo validation failed: done: Path `done` is required."

        })
    })
    it("PUT"+endpointUrl,async()=>{
        const testData = { title:"Make integration test for PUT",done:true}
        const res = await (await request(app).put(endpointUrl+newTodoId)).send(testDate)
        expect(res.statusCode).toBe(200)
        expect(res.body.title).toBe(testData.title)
        expect(res.body.done).toBe(testData.done)
    })
})