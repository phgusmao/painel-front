import { DataRow } from "../DataRow";
import './style.css'

export const Datas = ({datas}) => {
        {datas.map((data, index) => (
            <DataRow key={index} fornecedores={data['FORNECEDOR']} empresa={data['EMPRESA']} filial={data['FILIAL']} envio={data['ENVIADO']} faturamento_diario={data['VALOR_LIQUIDO']} data={data['DATA_ARQUIVO']} rotina={data['ROTINA']}/>
        ))}
}