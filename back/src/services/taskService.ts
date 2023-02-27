import TaskEntity from "@database/entities/taskEntity";
import { ITaskDTO } from "../database/dto/ITaskDTO";
import TaskRepository from "../database/repositories/taskRepository";

import AppError from "./AppError";

class TaskService {
    constructor(private taskRepository = new TaskRepository()) {}

    public async create(data: ITaskDTO) {
        return await this.taskRepository.create(data);
    }

    public async delete(id: string) {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError("Task não existe!", 404);

        await this.taskRepository.delete(id);

        return await this.findAllTasks();
    }

    public async update(id: string, data: ITaskDTO) {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError("Task não existe", 404);

        task.titulo = data.titulo;
        task.conteudo = data.conteudo;
        task.lista = data.lista;

        return await this.taskRepository.save(task);
    }

    public async findById(id: string) {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError("Task não existe", 404);

        return task;
    }

    public async findAllTasks(): Promise<TaskEntity[]> {
        return await this.taskRepository.findAllTasks();
    }
}

export default TaskService;
