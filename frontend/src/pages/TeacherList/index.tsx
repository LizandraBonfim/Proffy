import React from 'react';
import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import { PageTeacherList, FormSearchTeachers, Main } from './styles';
import Select from '../../components/Select';

function TeacherList() {
    return (

        <PageTeacherList >

            <PageHeader title="Esses são os Proffys disponiveis:" >

                <FormSearchTeachers >

                    <Select
                        label="Matéria"
                        name="subject"
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


                    <Input label="Hora" name="time" type="time" />


                </FormSearchTeachers>
            </PageHeader>

            <Main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </Main>
        </PageTeacherList>
    )
}

export default TeacherList
