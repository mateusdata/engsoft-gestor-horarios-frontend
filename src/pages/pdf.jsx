import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { FilePdfOutlined } from '@ant-design/icons';
import axiosInstance from '../components/config/axiosInstance';
import 'moment/locale/pt-br';
import moment from 'moment';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 30,
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
  },
  nome: {
    fontSize: '8px',
    color:"blue"
  }
});

const MyDocument = ({ data }) => {
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  useEffect(() => {
    const storedStartDate = localStorage.getItem('semestreduracao_start');
    const storedEndDate = localStorage.getItem('semestreduracao_end');

    if (storedStartDate && storedEndDate) {
      setDateRange({
        start: moment(storedStartDate, 'DD/MM/YYYY'),
        end: moment(storedEndDate, 'DD/MM/YYYY')
      });
    }
  }, []);
  return (
    <Document>
      {Object.keys(data).map((semestreKey, semestreIndex) => (
        <Page size={{ width: 760, height: 400 }} style={styles.page} key={semestreIndex}>
          <View style={styles.section}>
            <Text style={{ marginBottom: 5 }}> BSI Sistema de Informação -  {semestreIndex + 1}° Semestre</Text>
            {dateRange.start && dateRange.end && (
              <Text style={{ marginBottom: 10 }}>
                <Text>
                  {" "}Período letivo: {dateRange.start.format('DD/MM/YYYY')} - {dateRange.end.format('DD/MM/YYYY')}
                </Text>
              </Text>
            )}

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
                    <View key={diaIndex} style={[styles.tableCell, { backgroundColor: diaIndex % 2 === 0 && "#87c677" }]}>
                      {dia.aulas[aulaIndex] &&
                        <View>
                          <Text style={styles.nome} >{dia.aulas[aulaIndex].name}</Text>
                          <Text style={styles.disciplina}>{dia.aulas[aulaIndex].disciplina}</Text>
                        </View>
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
