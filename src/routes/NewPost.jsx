// IMPORTAÇÃO DOS HOOKS
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES DOS CUSTOM HOOKS
import { useCreatePost } from "../hook/useCreatePost";
import { useGetPosts } from "../hook/useGetPosts";

// IMPORTAÇÃO DOS ESTILOS CSS (STYLED-COMPONENTS)
import { NewPostCSS } from "../css/NewPostCSS";
import { ConfirmPost } from "../components/ConfirmPost";

// CRIANDO O COMPONENTE NEWPOST
export function NewPost() {

    // ESTADOS
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [visibility, setVisibility] = useState('hidden')
    const [categories, setCategories] = useState([])

    // REFS
    const formRefs = {
        title: useRef(),
        content: useRef(),
        author: useRef()
    }
    const refTitle = useRef()
    const refContent = useRef()
    const refAuthor = useRef()

    // HOOK DE NAVEGAÇÃO
    const navigate = useNavigate()

    // HOOK DE GETPOSTS
    const {data} = useGetPosts()
    

    // FUNÇÃO QUE SET OS VALORES NOS STATES DO COMPONENTE
    function setStates(array){

        // CONSTANTE QUE ARMAZENA AS CATEGORIAS SELECIONADAS NO FORMULÁRIO
        const categoryList = []

        array.map((input, index)=>{

            // ADICIONA AS CATEGORIAS SELECIONANDAS NO FORMULÁRIO NA LISTA DE CATEGORIAS
            if (array[index].type === 'checkbox'){
                if (input.checked === true){
                    categoryList.push(input.name)
                }
            }

            // VERIFICA OS IDS DOS INPUTS E ARMAZENA NOS RESPECTIVOS STATES DE MESMO NOME
            switch (input.id) {
                case 'title':
                    setTitle(input.value)
                case 'content':
                    setContent(input.value)
                case 'author':
                    setAuthor(input.value)
            }
        })

        setVisibility('visible')

        // setTimeout(()=>{
        //     setVisibility('hidden')
        // },2000)

        // ADICIONA OS VALORES DA LISTA DE CATEGORIAS NO STATE CATEGORY
        setCategories(categoryList)
    }

    function createPost(post){
        data.push(post)
        localStorage.setItem('posts', JSON.stringify(data))
        setTimeout(()=>{
            navigate('/blog/new-post')
        }, 2000)
    }

    // FUNÇÃO QUE É EXECUTADO QUANDO O FORMULÁRIO É SUBMETIDO.
    function handleSubmit(e){

        // ALTERA O ESTADO PADRÃO DOS FORMULÁRIOS
        e.preventDefault()

        // TRANSFORMA O RESULTADO DO EVENTO EM UM ARRAY.
        const element = Array.from(e.target)
        
        // CHAMA A FUNÇÃO QUE ADICIONA OS VALORES NOS STATES
        setStates(element)
        
        formRefs.title.current.value = ""
        formRefs.content.current.value = ""
        formRefs.author.current.value = ""
        console.log(formRefs.title)
    }

    useEffect(()=>{
        
        // CRIA A CLASSE DE NEWPOST PASSANDO OS PARAMETROS DOS STATES PARA A CLASSE.
        const post = useCreatePost(title, content, author, categories)
        if (post.title !== ''){
            createPost(post)
        }

    },[title, content, author, categories]) //CHAMA O USEEFFECT TODA VEZ QUE ALGUM DOS STATES É ALTERADO

    return (
        <NewPostCSS>
            <ConfirmPost visibility={visibility} />
            <h2>Novo Post</h2>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="input-fields">
                    <div className="form-control">
                        <label htmlFor="title">Título: </label>
                        <input type="text" placeholder="" id="title" name="title" ref={formRefs.title} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="content">Conteúdo: </label>
                        <textarea name="content" id="content"  ref={formRefs.content} required></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="author">autor: </label>
                        <input type="text" placeholder="" id="author" name="author" ref={formRefs.author} required />
                    </div>
                </div>
                <div className="checkbox-items">
                    <fieldset id='fieldset' required>
                        <legend>Categorias</legend>
                        <div className="item-check">
                            <input type="checkbox" name="Cosmologia" id="cosmology" />
                            <label htmlFor="cosmology"> Cosmologia</label>
                        </div>
                        <div className="item-check">
                            <input
                            type="checkbox"
                            name="Formação de Estrelas"
                            id="stellar-formation"
                            />
                            <label htmlFor="stellar-formation"> Formação de Estrelas</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Historia da Ciência" id="hystory-science" />
                            <label htmlFor="hystory-science"> Historia da Ciência</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Cultura" id="culture" />
                            <label htmlFor="culture"> Cultura</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Astrobiologia" id="astrobiology" /> 
                            <label htmlFor="astrobiology"> Astrobiologia</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Buraco Negro" id="black-hole" />
                            <label htmlFor="black-hole"> Buraco Negro</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Exploração Espacial" id="space-exploration" />
                            <label htmlFor="space-exploration"> Exploração Espacial</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Astrofísica" id="strophysics" />
                            <label htmlFor="astrophysics"> Astrofísica</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Estrelas" id="stars" /> 
                            <label htmlFor="stars"> Estrelas</label>
                        </div>
                        <div className="item-check">
                            <input type="checkbox" name="Marte" id="mars" /> 
                            <label htmlFor="mars"> Marte</label>
                        </div>
                    </fieldset>
                </div>
                <button id='btn'>Postar</button>
            </form>
        </NewPostCSS>
    );
}
