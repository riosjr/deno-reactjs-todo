import { Request, Response, RouteParams } from 'https://deno.land/x/oak/mod.ts';
import db from '../config/database.ts';

const Todo = db.collection('todos');

class TodoController {
  public async index({ response }: { response: Response }) {
    try {
      const todos = await Todo.find();
      response.body = todos;
    } catch (e) {
      response.status = 500;
      response.body = {
        status: 'error',
        message: 'there was a error with the database connection',
      };
    }
  }

  public async show({
    params,
    response,
  }: {
    response: Response;
    params: RouteParams;
  }) {
    if (!params.id) {
      response.status = 400;
      response.body = {
        status: 'error',
        message: 'Bad request',
      };
      return;
    }

    try {
      const todo = await Todo.findOne({
        _id: { $oid: params.id },
      });
      if (!todo) {
        response.status = 404;
        response.body = {
          status: 'error',
          message: 'Not found',
        };
        return;
      }
      response.body = todo;
    } catch (e) {
      response.status = 500;
      response.body = {
        status: 'error',
        message: 'there was a error with the database connection',
      };
    }
  }

  public async store({
    request,
    response,
  }: {
    request: any;
    response: Response;
  }) {
    const body = await request.body();
    const {
      title,
      description,
      done,
    }: { title: string; description: string; done: boolean } = body.value;

    try {
      const todo = await Todo.insertOne({
        title,
        description,
        done,
      });
      response.body = todo;
    } catch (e) {
      response.status = 500;
      response.body = {
        status: 'error',
        message: 'there was a error with the database connection',
      };
    }
  }

  public async update({
    params,
    request,
    response,
  }: {
    params: RouteParams;
    request: any;
    response: Response;
  }) {
    const body = await request.body();
    const {
      title,
      description,
      done,
    }: { title: string; description: string; done: boolean } = body.value;

    try {
      const { matchedCount } = await Todo.updateOne(
        {
          _id: { $oid: params.id },
        },
        {
          $set: {
            title,
            description,
            done,
          },
        }
      );
      if (matchedCount === 0) {
        response.status = 404;
        response.body = {
          status: 'error',
          message: 'Not found',
        };
        return;
      }
      response.status = 204;
    } catch (e) {
      response.status = 500;
      response.body = {
        status: 'error',
        message: 'there was a error with the database connection',
      };
    }
  }

  public async destroy({
    params,
    response,
  }: {
    params: RouteParams;
    request: any;
    response: Response;
  }) {
    try {
      const deleteCount = await Todo.deleteOne({
        _id: { $oid: params.id },
      });
      if (deleteCount === 0) {
        response.status = 404;
        response.body = {
          status: 'error',
          message: 'Not found',
        };
        return;
      }
      response.status = 204;
    } catch (e) {
      response.status = 500;
      response.body = {
        status: 'error',
        message: 'there was a error with the database connection',
      };
    }
  }
}

export default new TodoController();
