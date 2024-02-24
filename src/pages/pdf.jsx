import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { FilePdfOutlined } from '@ant-design/icons';
import axiosInstance from '../components/config/axiosInstance';

// Create styles
const styles = StyleSheet.create({
  /* page: {
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
  }, */

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

const MyDocument = ({ data }) => {
  return (
    <Document>
      {Object.keys(data).map((semestreKey, semestreIndex) => (
        <Page size="A4" style={styles.page} key={semestreIndex}>
          <View style={styles.section}>
            <Text style={{ marginBottom: 10 }}>Semestre {semestreIndex + 1}</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, styles.headerCell]}></View>
                {data[semestreKey].map((dia, index) => (
                  <View key={index} style={[styles.tableCell, styles.headerCell]}>
                    <Text>{dia.dia}</Text>
                  </View>
                ))}
              </View>
              {data[semestreKey][0]?.aulas.map((aula, aulaIndex) => (
                <View key={aulaIndex} style={styles.tableRow}>
                  <View style={[styles.tableCell, styles.headerCell]}>
                    <Text>{aula.horario}</Text>
                  </View>
                  {data[semestreKey].map((dia, diaIndex) => (
                    <View key={diaIndex} style={styles.tableCell}>
                      {dia.aulas[aulaIndex] &&
                        <>
                          <Text>{dia.aulas[aulaIndex].name}</Text>
                          <Text style={styles.disciplina}>{dia.aulas[aulaIndex].disciplina}</Text>
                        </>
                      }
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </Page>
      ))}
    </Document>
  )
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

  const generatePdf = async () => {
    const semestresData = data.reduce((acc, semestre) => {
      const semestreKey = Object.keys(semestre)[0];
      acc[semestreKey] = semestre[semestreKey];
      return acc;
    }, {});

    const blob = await pdf(<MyDocument data={semestresData} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <button onClick={generatePdf}>
        <FilePdfOutlined className='text-red-600' style={{ fontSize: '26px' }} />
      </button>
    </div>
  );
}

export default Pdf;
