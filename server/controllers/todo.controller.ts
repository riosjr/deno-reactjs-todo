import { Request, Response } from 'https://deno.land/x/oak/mod.ts';
import db from '../config/database.ts';

const todoCollection = db.collection('todos');

class TodoController {
  
  public async index({ response }: { response: Response }) {
    try {
      const todos = await todoCollection.find();      
      response.body = todos;
    } catch (e) {
      console.log(e);
      response.status = 500;
      response.body = {
        status: 'error',
        message: 'there was a error with the database connection',
      };
    }
  }

  public show({ response }: { response: Response }) {
    response.body = {
      status: 'success',
      data: 'show',
    };
  }

  public update({ response }: { response: Response }) {
    response.body = {
      status: 'success',
      data: 'update',
    };
  }

  public destroy({ response }: { response: Response }) {
    response.body = {
      status: 'success',
      data: 'delete',
    };
  }
}

export default new TodoController();
