import React, { useEffect, useState } from 'react';
import { DatePicker, Space } from 'antd';
import Layouts from '../layouts/layouts';
import ptBR from 'antd/lib/locale/pt_BR';
import 'moment/locale/pt-br';
import moment from 'moment';

moment.locale('pt-br');

const { RangePicker } = DatePicker;

const CalendarPage = () => {
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

    // Função para salvar os valores no localStorage
    const handleRangeChange = (dates) => {
        const [start, end] = dates;
        if (start && end) {
            localStorage.setItem('semestreduracao_start', start.format('DD/MM/YYYY'));
            localStorage.setItem('semestreduracao_end', end.format('DD/MM/YYYY'));
            setDateRange({ start, end });
        }
    };

    return (
        <Layouts>
            <div className='flex flex-col gap-2'>
                <div className=''>
                    <span>Período do semestre BSI</span>
                    <div>
                    {dateRange.start && dateRange.end && (
                        <p>
                            Período selecionado: {dateRange.start.format('DD/MM/YYYY')} - {dateRange.end.format('DD/MM/YYYY')}
                        </p>
                    )}
                </div>
                </div>
                <Space className='p-8 bottom-4' direction="horizontal" size={28}>
                    <RangePicker
                        locale={ptBR}
                        format="DD/MM/YYYY"
                        open
                        onChange={handleRangeChange}
                    />
                </Space>
              
            </div>
        </Layouts>
    );
};

export default CalendarPage;
