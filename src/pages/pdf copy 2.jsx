import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { FilePdfOutlined } from '@ant-design/icons';
import axiosInstance from '../components/config/axiosInstance';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: '100%',
    fontSize: '12px',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCell: {
    backgroundColor: '#ccc',
    fontWeight: 'bold',
  },
  disciplina: {
    fontSize: '8px'
  }
});

// Create Document Component
const MyDocument = ({ data }) => {
  const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  return (
    <Document>
      {diasSemana.map((dia, index) => {
        const aulasDia = data.filter(item => item.dia.toLowerCase() === dia.toLowerCase())[0]?.aulas || [];
        
        return (
          <Page key={index} size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={{ marginBottom: 10 }}>{dia}</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={[styles.tableCell, styles.headerCell]}></View>
                  <View style={[styles.tableCell, styles.headerCell]}>
                    <Text>Horário</Text>
                  </View>
                  <View style={[styles.tableCell, styles.headerCell]}>
                    <Text>Nome</Text>
                  </View>
                  <View style={[styles.tableCell, styles.headerCell]}>
                    <Text>Disciplina</Text>
                  </View>
                </View>
                {aulasDia.map((aula, aulaIndex) => (
                  <View key={aulaIndex} style={styles.tableRow}>
                    <View style={[styles.tableCell, styles.headerCell]}>
                      <Text>{aula.horario}</Text>
                    </View>
                    <View style={[styles.tableCell]}>
                      <Text>{aula.name}</Text>
                    </View>
                    <View style={[styles.tableCell]}>
                      <Text>{aula.disciplina}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </Page>
        );
      })}
    </Document>
  );
};

function Pdf() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/show-all-schedules');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.length > 0 && <MyDocument data={data} />}
    </div>
  );
}

export default Pdf;
