import './Home.css';
import api from "../../services/api";

function Home() {
  return (
      <table className=''>
      <tr>
        <th>FORNECEDORES</th>
        <th>ENVIO</th>
        <th>FATURAMENTO DIÁRIO</th>
        <th>FATURAMENTO MENSAL</th>
        <th>ROTINA</th>
      </tr>
      <tr>
        <td>Nissin 01/00</td>
        <td> ENVIADO </td>
        <td>100k</td>
        <td>1M</td>
        <td>S_ArqGenexis</td>
      </tr>
    </table>
  );
}

export default Home;
