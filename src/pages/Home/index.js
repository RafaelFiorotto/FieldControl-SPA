import { Container, Header, Content } from './styles'
import { RiGitRepositoryFill, RiStarLine } from 'react-icons/ri'
import  debounce  from 'lodash.debounce'
import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {format} from 'date-fns'
import {AiFillGithub} from 'react-icons/ai'


export default function Home(){
    
    const [repositoriesFound, setRepositoriesFound] = useState({})
    const [params, setParams] = useState({
        search: '',
        page: 1,
    })
    const [loading, setLoading] = useState(false);

    async function loadRepositories(){
        try{
            setLoading(true);
           const response = await axios.get(`https://api.github.com/search/repositories?q=${params.search}&page=${params.page}`)
           if(params.page === 1){
               setRepositoriesFound(response.data)
           }else{
               setRepositoriesFound({...repositoriesFound, items: [...repositoriesFound.items, ...response.data.items]})
           }
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    const search = useCallback(
        debounce((e) => setParams({page: 1, search: e.target.value}),350), []
    )

    useEffect(() => {
        loadRepositories();
    },[params])

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
               {repositoriesFound?.items?.length > 0 && (
                    <div id="nextPage">
                        <button type="button" onClick={() => loading ? null : setParams({...params, page: params.page + 1})} style={{cursor: loading ? "not-allowed" : "pointer"}}>{ loading ? "Carregando..." : "Carregar mais"}</button>
                    </div>
                )}
            </div>
        </Container>
    )    
    
}