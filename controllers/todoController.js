
import TodoModel from "../model/todoModelSchema.js";


export const getTodosController = (req, res) => {
  try {
    TodoModel.find({}, (err, data) => {
      if (err) {
        res
          .status(200)
          .json({ msg: "Error in mongodb server", error: err, data: data });
      } else {
        res.status(200).json({ msg: "yes", error: err, data: data });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({
        token: null,
        error: error,
        data: null,
        msg: "Inernal Server Error",
      });
  }
};

export const addTodoController = (req, res) => {
    try {
        const { name, description, createdAt, status, images } = req.body;
        const todoData = {
          name: name,
          description: description,
          createdAt: createdAt,
          status: status,
          images: images,
        };
        const todoModel = TodoModel(todoData);
        todoModel.save((err, data) => {
          if (err) {
            res
              .status(400)
              .json({
                token: null,
                msg: "Error in mongodb server",
                data: data,
                error: err,
              });
          } else {
            res
              .status(200)
              .json({ error: null, data: data, msg: "ok", error: err });
          }
        });
     
    } catch (error) {
      res
        .status(500)
        .json({
          error: error,
          data: null,
          msg: "Inernal Server Error",
        });
    }
  };