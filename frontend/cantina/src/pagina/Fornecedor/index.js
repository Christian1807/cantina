import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import { GiHolyOak } from "react-icons/gi";

function Fornecedor() {

    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const history = useHistory();

    async function handelFornecedor(e) {
        e.preventDefault();

        const dados = {
            nome,
            cpf,
            email,
            telefone
        };

        try {
            const response = await api.post('fornecedor', dados);
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
                <h1>Cadastro de fornecedores</h1>
                <GiHolyOak name='GiNinjaHead' size={40} />
                <br></br>
                <form onSubmit={handelFornecedor}>
                    <input
                        placeholder="Seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                    <br></br>

                    <input
                        placeholder="Seu CPF"
                        value={cpf}
                        onChange={e => setCPF(e.target.value)} />
                    <br></br>

                    <input
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />


                    <br></br>
                    <input
                        placeholder="telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)} />
                    <br></br>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>


    )
}

export default Fornecedor;