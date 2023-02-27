import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("tasks")
class TaskEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    titulo: string;

    @Column()
    conteudo: string;

    @Column({
        default: "novo",
    })
    lista: string;

    @Column({
        default: true,
    })
    ativo: boolean;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_atualizacao: Date;
}

export default TaskEntity;
