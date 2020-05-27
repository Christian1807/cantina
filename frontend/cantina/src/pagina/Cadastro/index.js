import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import { GiNinjaHeroicStance } from "react-icons/gi";


function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            email,
            telefone
        };

        try {
            const response = await api.post('usuario', dados);
            const id = response.data.id;
            alert("Seu id de acesso: " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro no Cadastro");
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
                <h1>Cadastro de usuarios</h1>
                <GiNinjaHeroicStance size={40} />
                <form onSubmit={handleCadastro}>
                    <br></br>

                    <input
                        placeholder="Seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
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



    );
}

export default Cadastro;