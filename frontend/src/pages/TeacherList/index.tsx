import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import { PageTeacherList, FormSearchTeachers, Main } from './styles';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

    const [teacher, setTeacher] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeacher(response.data);


    }

    return (

        <PageTeacherList >

            <PageHeader title="Esses são os Proffys disponiveis:" >

                <FormSearchTeachers onSubmit={handleSubmit}>

                    <Select
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes ' },
                            { value: 'Biologia', label: 'Biologia ' },
                            { value: 'Geografia', label: 'Geografia ' },
                            { value: 'Ingles', label: 'Ingles ' },
                            { value: 'Historia', label: 'Historia ' },
                            { value: 'Fisica', label: 'Fisica ' },
                            { value: 'Portugues', label: 'Portugues ' },
                            { value: 'Quimica', label: 'Quimica ' },
                        ]}
                    />

                    <Select
                        label="Dia da semana"
                        name="subject"
                        value={week_day}
                        onChange={(e) => setWeekday(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira ' },
                            { value: '2', label: 'Terça-feira ' },
                            { value: '3', label: 'Quarta-feira ' },
                            { value: '4', label: 'Quinta-feira ' },
                            { value: '5', label: 'Sexta-feira ' },
                            { value: '6', label: 'Sábado ' },

                        ]}
                    />


                    <Input
                        label="Hora"
                        name="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>


                </FormSearchTeachers>
            </PageHeader>

            <Main>

                {teacher.map((item, index) => (
                    <TeacherItem key={index} teacher={item} />
                ))}

            </Main>
        </PageTeacherList>
    )
}

export default TeacherList
