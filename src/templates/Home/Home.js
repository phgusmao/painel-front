import './Home.css';
import { Component } from 'react';

class Home extends Component {
  state = {
    datas: []
  };

  componentDidMount() {
    fetch('http://localhost:3333/painel')
    .then(res => res.json())
    .then(res => {
      this.setState({
        datas: res
      })
    })
  }

  render() {

    // console.log(this.state.datas[1])

    this.state.datas.map(data => {
      console.log(data)
    })

    return (
      <main>
        <table>
          <thead>
            <tr>
              <th>FORNECEDORES</th>
              <th>ENVIO</th>
              <th>FATURAMENTO DIÁRIO</th>
              <th>FATURAMENTO MENSAL</th>
              <th>ROTINA</th>
            </tr>
          </thead>
          <tbody>
            {this.state.datas.map((data, index) => (
              <tr key={index}>
                <td>{data.fornecedor}</td>
                <td> {data.enviado}</td>
                <td>{data.valor_liquido}</td>
                <td>{data.valor_mensal}</td>
                <td>{data.rotina}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>  
    )
  };
}



export default Home;


