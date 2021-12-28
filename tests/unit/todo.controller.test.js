const todoController = require("../../controllers/todo.controller")
const todoModel = require("../../model/todo.model")
const httpMocks = require("node-mocks-http")
const newTodo = require("../mock-data/new-todo.json")
const TodoModel = require("../../model/todo.model")
todoModel.create = jest.fn()
todoModel.find = jest.fn()
todoModel.findById =jest.fn()
todoMmodel.findByIdAndUpdate=jest.fn()
let req,res,next
const todoId = "djfwbdu43ou5h43ov9e3"
beforeEach(()=>{
    req=httpMocks.createRequest()
    res=httpMocks.createResponse()
    next=jest.fn()
})

describe("TodoController.getTodoById",()=>{
    it("should have a getTodoById",()=>{
        expect(typeof todoController.getTodoById).toBe("function")
    })
    it("should call TodoModel.findById with route parameters", async()=>{
        req.params.todoId = todoId
        await todoController.getTodoById(req, res,next)
        expect(todoModel.findById).toBeCalledWith(todoId)
    })
    it("should return json body and response code 200", async ()=>{
        todoModel.findById.mockReturnValue(newTodo)
        await todoController.getTodoById(req,res,next)
        expect(res.statusCode).toBe(200)
        expect(res._getJSONData()).toStrictEqual(newTodo)
        expect(res._isEndCalled()).toBeTruthy()
    })
    it("should do error handling", async ()=>{
        const errorMessage = {message:"Error finding"}
        const rejectedPromise = Promise.reject(errorMessage)
        todoModel.findById.mockReturnValue(rejectedPromise)
        await todoController.getTodoById(req,res,next)
        expect(next).toBeCalledWith(errorMessage)
    })
})

describe("TodoController.getTodos",()=>{
    it("should have a getTodo function",()=>{
        expect(typeof todoController.getTodos).toBe("function")
    })
    it("should call TodoModel.find({})", async()=>{
        await todoController.getTodos(req,rex,next)
        expect(todoModel.find).toHaveBeenCallednWith({})
    })
    it("should return response with status 200 and all todos",()=>{
        todoModel.find.mockReturnValue(allTodos)
        await todoController.getTodos(req,res,next)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBbeTrythy();
        expect(res._getJSONData()).toStrictEqual(allTodos)
    })
    it("should handle errors in getTodos", async()=>{
        const errorMessage = {message:"Error finding"}
        const rejectedPromise = Promise.reject(errorMessage)
        todoModel.find.mockReturnValue(rejectedPromise)
        await todoController.getTodos(req,res,next)
        expect(next).toBeCalledWith(errorMessage)
    })
    it("should return 404 when item doesnt exist", async()=>{
        todoModel.findById.mockReturnValue(null)
        await todoController.getTodoById(req,res,next)
        expect(res.statusCode).toBe(404)
        expect(res._isEndCalled()).toBeTruthy()
    })
})
describe("TodoController.createTodo",()=>{
    beforeEach(()=>  {  req.body =  newTodo    }
    )

    it("should have a createTodo function",()=>{
        expect(typeof todoController.createTodo).toBe("function")
    })
    it("should call TodoModel.create",()=>{
        todoController.createTodo(req,res,next)
        expect(todoModel.create).toBeCalled()
    })
    it("should return 201 response code", async ()=>{
        await todoController.createTodo(req,res,next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })
    it("should return json body in response", async ()=>{
        todoModel.create.mockReturnValue(newTodo)
        await todoController.createTodo(req,res,next)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })
    it("should handle errors", async()=>{
        const errorMessage = {message:"Done property missing"}
        const rejectedPromise = Promise.reject(errorMessage)
        todoModel.create.mockReturnValue(rejectedPromise)
        await todoController.createTodo(req,res,next)
        expect(next).toBeCalledWith(errorMessage)
    })
})
describe("TodoController.updateTodo",()=>{
    it("should have a updateTodo function",()=>{
        expect(typeof todoController.updateTodo).toBe("function")
    })
    it("shpuld update with TodoModel.findByIdAndUpdate",async ()=>{
        req.params.todoId= todoId
        req.body= newTodo
        await todoController.updateTodo(req,rex,next)
        TodoModel.findByIdAndUpdate(todoId, newTodo,{
            new:true,
            useFindAndModify:false
        })
        expect(TodoModel.findByIdAndUpdate).toHaveBeenCallednWith(todoId, newTodo,{
            new: true,useFindAndModify:false})  
    })
    it("should return a response with json data and http code 200", async()=>{
        req.params.todoId= todoId
        req.body= newTodo
        TodoModel.findByIdAndUpdate.mockReturnValue(newTodo)
        await todoController.updateTodo(req,)
        expect(res._isEndCalled()).toBeTruthy()
        expect(res.statusCode).toBe(200)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })
    it("should handle errors", async()=>{
        const errorMessage = {message:"Error"}
        const rejectedPromise = Promise.reject(errorMessage)
        todoModel.findByIdAndUpdate.mockReturnValue(rejectedPromise)
        await todoController.updateTodo(req,res,next)
        expect(next).toHaveBeenCalledWith(errorMessage)
    })
    it("should return 404 ", async()=>{
        todoModel.findByIdAndUpdate.mockReturnValue(null)
        await todoController.updateTodo(req,res,next)
        expect(res.statusCode).todoBe(404)
        expect(res._isEndCalled()).toBeTruthy()
    })
})