import React, { useState } from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { PageTeacherForm, Main, Footer, ScheduleItem } from './styles';


function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function AddNewSchedule() {
        setScheduleItems([...scheduleItems, {
            week_day: 0,
            from: '',
            to: ''
        }])
    }
    return (

        <PageTeacherForm >

            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulario de inscrição:"
            />

            <Main>
                <fieldset>
                    <legend>
                        Seus dados
                    </legend>

                    <Input label="Nome Completo" name="name" type="text" />
                    <Input label="Avatar" name="avatar" type="text" />
                    <Input label="WhatsApp" name="whatsapp" type="text" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

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
                    <Input label="Custo da sua hora por aula"
                        name="cost" type="text" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponiveis
                    <button onClick={AddNewSchedule}>+ Novo Horário</button>
                    </legend>

                    {scheduleItems.map(item => (

                        <ScheduleItem key={item.week_day}>
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
                            <Input name="from" label="Das" type="time" />
                            <Input name="to" label="Até" type="time" />
                        </ScheduleItem>
                    ))}




                </fieldset>

                <Footer>
                    <p>
                        <img src={warningIcon} alt="Warning" />
                        Importante! <br />
                        Preencha todos os dados.
                    </p>

                    <button>Salvar cadastro</button>
                </Footer>

            </Main>
        </PageTeacherForm>
    )
}

export default TeacherForm
