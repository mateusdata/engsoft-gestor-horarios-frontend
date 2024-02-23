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
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 12,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '20%',
    padding: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCell: {
    backgroundColor: '#ccc',
    fontWeight: 'bold',
  },
  disciplina: {
    fontSize: 8,
  },
});

// Create Document Component
const MyDocument = ({ data }) => {
  const horarios = data[0].aulas.map(aula => aula.horario);
  const diasSemana = data.map(item => item.dia);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCell, styles.headerCell]}></View>
              {diasSemana.map((dia, index) => (
                <View key={index} style={[styles.tableCell, styles.headerCell]}>
                  <Text>{dia}</Text>
                </View>
              ))}
            </View>
            {horarios.map((hora, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={[styles.tableCell, styles.headerCell]}>
                  <Text>{hora}</Text>
                </View>
                {data.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.tableCell}>
                    {item.aulas[index] &&
                      <>
                        <Text>{item.aulas[index].name}</Text>
                        <Text style={styles.disciplina}>{item.aulas[index].disciplina}</Text>
                      </>
                    }
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </Page>
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

  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<MyDocument data={data} />).toBlob();
      setFileUrl(URL.createObjectURL(blob));
    };
    generatePdf();
  }, [data]);

  return (
    <div className="App">
      {fileUrl && <a href={fileUrl} download="BSI_primeiro_2°_semestre.pdf"><FilePdfOutlined className='text-red-600' style={{ fontSize: '26px' }} /></a>}
    </div>
  );
}

export default Pdf;
