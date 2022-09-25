import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

export default function ViewCliente() {

  const{id} = useParams();

  const[nome, setNome] = useState("");
  const[nomeSocial, setNomeSocial] = useState("");
  const[dataNascimento, setDataNascimento] = useState("");
  const[identidade, setIdentidade] = useState("");
  const[cpf, setCpf] = useState("");
  const[celular, setCelular] = useState("");
  const[endereco, setEndereco] = useState("");
  const[estado, setEstado] = useState("");
  const[cidade, setCidade] = useState("");
  const[cep, setCep] = useState("");
  const[email, setEmail] = useState("");

  useEffect(() => {
    carregarCliente();
  }, []);

  const carregarCliente = async () => {
    const result = await axios.get(`http://localhost:8080/marcondes/cliente/${id}`)
    console.log(result.data)
    setNome(result.data.nome)
    setNomeSocial(result.data.nomeSocial)
    setDataNascimento(result.data.dataNascimento)
    setIdentidade(result.data.identidade)
    setCpf(result.data.cpf)
    setCelular(result.data.celular)
    setEndereco(result.data.endereco)
    setEstado(result.data.estado)
    setCidade(result.data.cidade)
    setCep(result.data.cep)
    setEmail(result.data.email)
  }

  return (
    <div>
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rouded p-4 mt-2 shadow'>
            <h2 className="text center m-4">Atualizar Clientes</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID: {id}</div>
                <div className="card-body">
                  <p className="card-title">
                    <b>Nome: </b> {nome}
                  </p>
                  <p className="card-title">
                    <b>Nome Social: </b> {nomeSocial}
                  </p>
                  <p className="card-title">
                    <b>Data de Nascimento: </b> {dataNascimento}
                  </p>
                  <p className="card-title">
                    <b>Identidade: </b> {identidade}
                  </p>
                  <p className="card-title">
                    <b>Cpf: </b> {cpf}
                  </p>
                  <p className="card-title">
                    <b>Celular: </b> {celular}
                  </p>
                  <p className="card-title">
                    <b>Endereço: </b> {endereco}
                  </p>
                  <p className="card-title">
                    <b>Cidade: </b> {cidade}
                  </p>
                  <p className="card-title">
                    <b>Estado </b> {estado}
                  </p>
                  <p className="card-title">
                    <b>Cep: </b> {cep}
                  </p>
                  <p className="card-title">
                    <b>E-mail: </b> {email}
                  </p>
                  <Link
                    to="/home"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
