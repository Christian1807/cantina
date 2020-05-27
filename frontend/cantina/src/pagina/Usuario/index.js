import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { GiFactory } from "react-icons/gi";


function Usuario() {

    const [usuarios, setUsuarios] = useState([]);

    async function handleDeleteUsuario(id) {
        try {
            await api.delete(`usuario/${id}`, {});
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch (error) {
            alert('Erro ao deletar usuário');
        }
    }

    useEffect(() => {
        api.get('usuario', {}).then(response => {
            setUsuarios(response.data);
        });
    }, []);

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
                <h1>Usuarios</h1>
                <GiFactory name='GiNinjaHead' size={40} />
                <br></br>
                <p>Total de Usuario: {usuarios.length}</p>
                <ul>
                    {usuarios.map(usuario => (
                        <li>
                            <p>Usuario: {usuario.id}</p>
                            <p>Nome: {usuario.nome}</p>
                            <p>Telefone: {usuario.telefone}</p>
                            <button type='button' onClick={() => handleDeleteUsuario(usuario.id)}>Excluir</button>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>

    );
}

export default Usuario;