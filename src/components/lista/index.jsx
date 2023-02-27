
import React from "react";
import api from "../../service/api";
import Card from "../card";


import { Button, Container, Header, Section } from "./styles";

const Lista = () => {

    const [tasks, setTasks] = React.useState([]) 

    React.useEffect(() => {
        api.get('/cards').then(res => setTasks(res.data))
    }, [])

    function adicionarTask(){}


    return(
        <Section>

            <Header>
                <Button onClick={() => adicionarTask()}>Adicionar</Button>
            </Header>

            <Container>
                <h2>To Do</h2>

                <ul>
                    {
                        tasks.map(task => (
                            <Card key={task.id} data={task}/>
                        ))
                    }
                </ul>
            </Container>
         

        </Section>

    )
}

export default Lista;