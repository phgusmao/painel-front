import './Home.css';
import { Component } from 'react';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Buttom';

class Home extends Component {
  state = {
    datas: [],
    allDatas: [],
    searchValue: '',
    dataPerPage: 15,
    page: 0
  };

  componentDidMount() {
    this.loadDatas()
  }

  loadDatas () {
    const {page, dataPerPage} = this.state
    fetch('http://localhost:3333/painel')
    .then(res => res.json())
    .then(res => {
        this.setState({ datas: res.slice(page, dataPerPage), allDatas: res })
    })
  }

  loadMoreDatas = async () => {
    const { page, dataPerPage, allDatas, datas } = this.state;

    const nextPage = page + dataPerPage;
    const nextDatas = allDatas.slice(nextPage, nextPage + dataPerPage)
    datas.push(...nextDatas)

    this.setState({datas, page: nextPage})
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {

    const {searchValue, datas, page, datasPerPage, allDatas} = this.state;

    const noMoreDatas = page + datasPerPage >= allDatas.length;

    const filteredDatas = allDatas.filter(d => {
      return d['FORNECEDOR'].toLowerCase().includes(searchValue) 
    })

    return (
      <main>
        {!!searchValue && (
          <h1>Fornecedor: {searchValue}</h1>
        )}
        <TextInput searchValue={searchValue} handleChange={this.handleChange} />

        <table>
          <thead>
            <tr>
              <th>FORNECEDORES</th>
              <th>EMPRESA</th>
              <th>FILIAL</th>
              <th>ENVIO</th>
              <th>FATURAMENTO DIÁRIO</th>
              <th>DATA DO ARQUIVO</th>
              <th>ROTINA</th>
            </tr>
          </thead>
          {searchValue.length === 0 && (
          <tbody>
            {this.state.datas.map((data, index) => (
              <tr key={index}>
                <td>{data['FORNECEDOR'].toUpperCase()}</td>
                <td>{data['EMPRESA']}</td>
                <td>{data['FILIAL']}</td>
                {data['ENVIADO'] === null && (
                  <td> SEM DADOS</td>
                )}
                {data['ENVIADO'] === 1 && (
                  <td> ENVIADO </td>
                )}
                {data['ENVIADO'] === 2 && (
                  <td>NÃO ENVIADO </td>
                )}
                <td>{data['VALOR_LIQUIDO']}</td>
                <td>{data['DATA_ARQUIVO']}</td>
                <td>{data['ROTINA']}</td>
              </tr>
            ))}
          </tbody>
          )}
          {searchValue.length > 0 && (
            <tbody>
              {filteredDatas.map((data, index) => (
                <tr key={index}>
                  <td>{data['FORNECEDOR'].toUpperCase()}</td>
                  <td>{data['EMPRESA']}</td>
                  <td>{data['FILIAL']}</td>
                  {data['ENVIADO'] === null && (
                    <td> SEM DADOS</td>
                  )}
                  {data['ENVIADO'] === 1 && (
                    <td> ENVIADO </td>
                  )}
                  {data['ENVIADO'] === 2 && (
                    <td>NÃO ENVIADO </td>
                  )}
                  <td>{data['VALOR_LIQUIDO']}</td>
                  <td>{data['DATA_ARQUIVO']}</td>
                  <td>{data['ROTINA']}</td>
                </tr>
              ))}
            </tbody>
          )}

          {filteredDatas.length === 0 && (
            <tbody>
            <tr>
              <td>Fornecedor não encontrado</td>
            </tr>
          </tbody>
          )}
        </table>

        <div className='button-container'>
          {!searchValue && (
            <Button disables={noMoreDatas} text="Carregar mais dados" onClick={this.loadMoreDatas}/>
          )}
        </div>
      </main>  
    )
  };
}

export default Home;


