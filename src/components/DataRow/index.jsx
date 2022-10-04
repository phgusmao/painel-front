import './style.css'

export const DataRow = ({fornecedores, empresa,	filial,	envio,	faturamento_diario,	data, rotina}) => {
    <tbody>
       <tr>
        <td>{fornecedores}</td>
        <td>{empresa}</td>
        <td>{filial}</td>
        <td>{envio}</td>
        <td>{faturamento_diario}</td>
        <td>{data}</td>
        <td>{rotina}</td>
       </tr>
    </tbody>
}