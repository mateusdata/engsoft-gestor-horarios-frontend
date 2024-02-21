import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { FilePdfOutlined } from '@ant-design/icons';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid black',
  },
  day: {
    fontSize: 20,
    marginBottom: 10,
  },
  lesson: {
    fontSize: 14,
    marginBottom: 5,
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {data.map((item, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.day}>{item.dia}</Text>
          {item.aulas.map((aula, aulaIndex) => (
            <Text key={aulaIndex} style={styles.lesson}>
              {`${aula.hora} - ${aula.name} - ${aula.disciplina}`}
            </Text>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

function Pdf() {
    const data = [
        { dia: 'Segunda', aulas: [{ name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Moises", disciplina: "Programação Web", hora: "14:30 - 13:50" }] },
        { dia: 'Terça', aulas: [{ name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Jonas", disciplina: "Inteligência Artificial", hora: "11:30 -20:00" }] },
        { dia: 'Quarta', aulas: [{ name: "Pedro", disciplina: "Banco de Dados", hora: "15:40 - 15:50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Paulo", disciplina: "Estrutura de Dados", hora: "16:50 -50" }] },
        { dia: 'Quinta', aulas: [{ name: "Lucas", disciplina: "Redes de Computadores", hora: "09:10 - 15:50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "João", disciplina: "Sistemas Operacionais", hora: "10:20 -50" }] },
        { dia: 'Sexta', aulas: [{ name: "Patricia", disciplina: "Engenharia de Software", hora: "14:00 - 15:50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Mateus", disciplina: "Compiladores", hora: "15:10 -50 " }] },
      ];

  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<MyDocument data={data} />).toBlob();
      setFileUrl(URL.createObjectURL(blob));
    };
    generatePdf();
  }, []);

  return (
    <div className="App">
    {fileUrl && <a href={fileUrl} download="BSI primeiro 2° semestre.pdf"> <FilePdfOutlined className='text-red-600'  style={{ fontSize: '26px',  }}   /></a>}
  </div>
  );
}

export default Pdf;
