import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { PageTeacherForm, Main, Footer, ScheduleItem } from './styles';
import api from '../../services/api';


function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');



    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function AddNewSchedule() {
        setScheduleItems([...scheduleItems,
        { week_day: 0, from: '', to: '' },
        ]);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        console.log({
            name, scheduleItems
        })

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastrado com sucesso');
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro');
        })


    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const array = scheduleItems.map((item, index) => {
            if (index === position) {
                return { ...item, [field]: value }
            }

            return item;
        });

        setScheduleItems(array)
    }
    return (

        <PageTeacherForm >

            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulario de inscrição:"
            />

            <Main onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        Seus dados
                    </legend>

                    <Input
                        label="Nome Completo"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        label="Avatar"
                        name="avatar"
                        type="text"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />

                    <Input
                        label="WhatsApp"
                        name="whatsapp"
                        type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />

                    <Textarea
                        name="bio"
                        label="Biografia"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}

                    />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
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
                    <Input
                        label="Custo da sua hora por aula"
                        name="cost" type="text"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponiveis
                    <button type="button" onClick={AddNewSchedule}>+ Novo Horário</button>
                    </legend>

                    {scheduleItems.map((item, index) => (

                        <ScheduleItem key={item.week_day}>
                            <Select
                                label="Dia da semana"
                                name="subject"
                                value={item.week_day}
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                name="from"
                                label="Das"
                                type="time"
                                value={item.from}
                                onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input
                                name="to"
                                label="Até"
                                type="time"
                                value={item.to}
                                onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                            />

                        </ScheduleItem>
                    ))}




                </fieldset>

                <Footer>
                    <p>
                        <img src={warningIcon} alt="Warning" />
                        Importante! <br />
                        Preencha todos os dados.
                    </p>

                    <button type="submit">Salvar cadastro</button>
                </Footer>
            </Main>
        </PageTeacherForm>
    )
}

export default TeacherForm
