import { Repository } from "typeorm";

import connectDB from "../ormconfig";

import TaskEntity from "../entities/taskEntity";
import { ITaskDTO } from "@database/dto/ITaskDTO";

class TaskRepository {
    repository: Repository<TaskEntity>;

    constructor() {
        this.repository = connectDB.getRepository(TaskEntity);
    }

    public async save(taskData: ITaskDTO): Promise<TaskEntity> {
        return await this.repository.save(taskData);
    }

    public async create(taskData: ITaskDTO): Promise<TaskEntity> {
        const task = this.repository.create(taskData);
        await this.repository.save(task);

        return task;
    }

    public async delete(id: string): Promise<TaskEntity | null> {
        await this.repository.delete(id);
        return null;
    }

    public async findById(id: string): Promise<TaskEntity | null> {
        const task = await this.repository.findOne({
            where: { id },
        });

        return task;
    }

    public async findAllTasks(): Promise<TaskEntity[]> {
        const tasks = await this.repository.find();
        return tasks;
    }
}

export default TaskRepository;
