import React, {useState}  from 'react';

import { useNavigate, Link, useParams} from 'react-router-dom';

import axios from 'axios';

import { useEffect } from 'react';

export default function EditarCliente() {

  const {id} = useParams

  const navigate = useNavigate();


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
  

    const editar = async(e) => {
      e.preventDefault();
      
      await
      axios.put(`http://localhost:8080/marcondes/cliente/${id}`, {
        nome: nome,
        nomeSocial: nomeSocial,
        dataNascimento: dataNascimento,
        identidade: identidade,
        cpf: cpf,
        celular: celular,
        endereco: endereco,
        estado: estado,
        cidade: cidade,
        cep: cep,
        email: email,
      
      })
      .then((result) => {
        console.log("cliente atualizado:" + result.data)
        navigate("/home")
      }).catch((erro) => {
        console.log(erro);
    });
    
  };

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
    <div className='contaner'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rouded p-4 mt-2 shadow'>
          <h2 className="text center m-4">Atualizar Clientes</h2>

          <form>
            <div class="mb-3">
              <label for="exampleInputNome1" class="form-label">
                Nome
              </label>
              <input 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputNome1" 
              aria-describedby="nomeHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputNomeSocial1" class="form-label">
                Nome Social
              </label>
              <input
              value={nomeSocial}
              onChange={(e) => setNomeSocial(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputNomeSocial1" 
              aria-describedby="nomesocialHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputDataNascimento1" class="form-label">
                Data de nascimento
              </label>
              <input
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputDataNascimento1" 
              aria-describedby="datanascimentoHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputIdentidade1" class="form-label">
                Identidade 
              </label>
              <input 
              value={identidade}
              onChange={(e) => setIdentidade(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputEIdentidade1" 
              aria-describedby="identidade1lHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputCpf1" class="form-label">
                Cpf
              </label>
              <input 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputCPF1" 
              aria-describedby="cpfHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputCelular1" class="form-label">
                Celular 
              </label>
              <input 
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputCelular1" 
              aria-describedby="celularHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputEndereco1" class="form-label">
                Endereço
              </label>
              <input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputEndereco1" 
              aria-describedby="enderecoHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputCidade1" class="form-label">
                Cidade
              </label>
              <input
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputCidade1" 
              aria-describedby="cidadeHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputEstado1" class="form-label">
                Estado 
              </label>
              <input 
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputEstado1" 
              aria-describedby="estadolHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputCep1" class="form-label">
                Cep
              </label>
              <input 
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              type="text" 
              class="form-control" 
              id="exampleInputCep1" 
              aria-describedby="cepHelp"
               />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                E-mail
              </label>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              class="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
               />
            </div>
            
            <button type="submit" class="btn btn-outline-success" onClick={editar}>Salvar</button>

            <Link to="/home" type="submit" class="btn btn-outline-danger mx-2">Cancelar</Link>

          </form>

        </div>
      </div>
    </div>
  )
}

