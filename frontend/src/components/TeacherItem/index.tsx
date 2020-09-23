import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { TeacherItemContent } from './styles';


function TeacherItem() {
    return (
        <TeacherItemContent>
            <header>
                <img src="https://avatars0.githubusercontent.com/u/45130727?s=460&u=1a8757066cf8b44b333d025094dfbef543b21b43&v=4" alt="Liz" />

                <div>
                    <strong>Lizandra Bonfim</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Aulas de Matemática bem estruturadas e expositiva.
                        <br />
                <br />
                        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço. Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$ 15 reais
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00 </strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Entre em contato" />
                            Entrar em contato
                        </button>
            </footer>
        </TeacherItemContent>
    )
}

export default TeacherItem
