import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import { GiChickenOven } from "react-icons/gi";


function Produto() {

    const [nome, setNome] = useState('');
    const [codigo_barra, setCodigoBarra] = useState('');
    const [valor, setValor] = useState('');
    const [unidade, setUnidade] = useState('');

    const history = useHistory();

    async function handelProduto(e) {
        e.preventDefault();

        const dados = {
            nome,
            codigo_barra,
            valor,
            unidade
        };

        try {
            const response = await api.post('produto', dados);
            const id = response.data.id;
            alert("Seu id de acesso é: " + id);
        } catch (error) {
            alert("Erro no cadastro");
        }
    }

    return (

        <div className='menu'>
            <ul>
                <li>
                    <a href='./cliente'>Cliente</a>
                    <a href='./cadastro'>Usuario</a>
                    <a href='./fornecedor'>fornecedor</a>
                    <a href='./produto'>Produto</a>
                    <a href='./usuario'>Relatório</a>
                </li>
            </ul>


            <div className='cadastro'>
                <h1>Cadastro de produtos</h1>
                <GiChickenOven name='GiNinjaHead' size={40} />
                <br></br>
                <form onSubmit={handelProduto}>
                    <input
                        placeholder="Nome do produto"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                    <br></br>

                    <input
                        placeholder="Informe o código de barra"
                        value={codigo_barra}
                        onChange={e => setCodigoBarra(e.target.value)} />
                    <br></br>

                    <input
                        placeholder="Informe o valor do produto"
                        value={valor}
                        onChange={e => setValor(e.target.value)} />
                    <br></br>

                    <input
                        placeholder="Unidade de medida"
                        value={unidade}
                        onChange={e => setUnidade(e.target.value)} />
                    <br></br>
                    <button className="button" type="submit">Cadastrar</button>
                    <br></br>


                </form>

            </div>
        </div>


    )
}

export default Produto;

// idea para inserir em cada pagina para voltar ao inicio<Link to="/">Voltar ao ínicio</Link>