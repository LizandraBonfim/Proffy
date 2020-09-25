import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';
import { TeacherItemContent } from './styles';

interface Props {
    teacher: {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
    }
}

const TeacherItem: React.FC<Props> = ({ teacher }) => {

    async function saveNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <TeacherItemContent>
            <header>
                <img src={teacher.avatar} alt={teacher.name} />

                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p> {teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                </p>

                <a target="_blank" onClick={saveNewConnection} href={`https://wa.me/${teacher.whatsapp}`} type="button">
                    <img src={whatsappIcon} alt="Entre em contato" />
                            Entrar em contato
                        </a>
            </footer>
        </TeacherItemContent>
    )
}

export default TeacherItem
