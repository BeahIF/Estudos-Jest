const TodoModel = require("../model/todo.model")
exports.createTodo =async(req,res, next)=>{
    try{
    const createdModel =  await TodoModel.create(req.body)
    res.status(201).json(createdModel)
}catch(err){
    next(err)
}
}
exports.getTodos = async(req,res,next)=>{
    try{
    const allTodos = TodoModel.find({})
    res.status(200).json(allTodos)}catch(err){
        next(err)
    }
}
exports.getTodoById = async (req,res,next)=>{
    try{
        const todosById = await TodoModel.findById(req.params.todoId)
        if(todosById){
            res.status(200).json(todosById)
        }else{
            res.status(400).send()
        }
        }catch(err){
        next(err)
    }

}
