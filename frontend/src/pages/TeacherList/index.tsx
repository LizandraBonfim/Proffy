import React from 'react';
import PageHeader from '../../components/PageHeader'

import TeacherItem from '../../components/TeacherItem';
import { PageTeacherList, FormSearchTeachers, InputBlock, Main } from './styles';

function TeacherList() {
    return (

        <PageTeacherList >

            <PageHeader title="Esses são os Proffys disponiveis:" >

                <FormSearchTeachers >

                    <InputBlock>
                        <label htmlFor="subject"> Matéria </label>
                        <input type="text" id="subject" />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="week_day"> Dia da Semana  </label>
                        <input type="text" id="week_day" />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="time"> Hora </label>
                        <input type="text" id="time" />
                    </InputBlock>


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
