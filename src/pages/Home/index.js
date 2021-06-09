import { Container, Header, Content } from './styles'
import { RiGitRepositoryFill, RiStarLine } from 'react-icons/ri'
import  debounce  from 'lodash.debounce'
import {useCallback, useState} from 'react'
import axios from 'axios'
import {format} from 'date-fns'
import {AiFillGithub} from 'react-icons/ai'


export default function Home(){
    
    const [repositoriesFound, setRepositoriesFound] = useState({})

    async function loadRepositories(search){
        try{
           const response = await axios.get(`https://api.github.com/search/repositories?q=${search}&page=1`)
           setRepositoriesFound(response.data)
        }catch(error){
            console.log(error)
        }
    }

    const search = useCallback(
        debounce((e) => loadRepositories(e.target.value),350), []
    )

    return (
        <Container>
            <div>
                <div id='ContainerSearch'> 
                    <AiFillGithub/>
                    <input type="text" onChange={search} placeholder="Digite sua pesquisa.. "/>
                </div>
            <Header>
                <h1>{repositoriesFound.total_count} Repositórios encontrados</h1>
            </Header>
                {repositoriesFound.items && repositoriesFound.items.map(item => (
                    <Content key={item.id}>
                        <div>
                            <RiGitRepositoryFill/>
                        </div>
                        <div>
                            <p>{item.full_name}</p>
                            <p>{item.description}</p>
                            <div>
                                <span>
                                    <RiStarLine/>
                                    <p>{item.stargazers_count}</p>
                                
                                </span>
                                <span>
                                    <p>{item.language}</p>
                                </span>
                                <span>
                                    <p>
                                        {item.license && item.license.name}
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        Atualizado em: {item.updated_at && format(new Date(item.updated_at),'dd/MM/yyyy HH:mm')}
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        {item.open_issues} issues
                                    </p>
                                </span>
                            </div>
                        </div>
                    </Content>

                ))}
            
            </div>
        </Container>
    )    
    
}