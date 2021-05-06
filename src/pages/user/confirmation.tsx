import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

export default function Confirmation() {
    const router = useRouter();
    //example
    const data = {
        ano: "1990",
        exercicios: "1 a 3 vezes por semana",
        objetivo: "competições Master nas provas Nata1 e Nata2",
        objetivoQuaisProvas: "Regional, Candanga",
        objetivoMetros: "",
        estilo: "Craw, Costas e Peito",
        equipamento: "prancha e pull buoy",
        metros: "2.000 e 2.500"
    };

    function save() {
        console.log('save!', data);

        router.push('/training');
    }

    return (
        <div className={styles.contentContainer}>
            <h1 className="heading1">Para começar</h1>

            <div className={styles.dataContainer}>

                <div className={styles.containerProfile}>
                    <p className={styles.labelData}>Sou Fulano</p>
                    <p className={styles.labelData}>Meu email é <span>fulanodetal@meuemail.com</span></p>
                    <p className={styles.labelData}>Minha senha secreta é <span>*******</span></p>
                </div>

                <div className={styles.containerData}>
                    <p className="heading3">Você nasceu em <span>{data.ano}</span>.</p>
                    <p className="heading3">Faz exercícios <span>{data.exercicios}</span>.</p>
                    <p className="heading3">Seu objetivo é <span>{data.objetivo}</span>.</p>
                    <p className="heading3">Você nada <span>{data.estilo}</span>.</p>
                    <p className="heading3">Nos treinos, pretende nadar entre <span>{data.metros}</span>m.</p>
                    <p className="heading3">e usar <span>{data.equipamento}</span>.</p>
                </div>

                <div className="containerButton">
                    <button
                        type="button"
                        onClick={save}>
                        É isso mesmo! Pode gerar meus treinos
                    </button>
                </div>

                <Link href="/user/new">
                    <a className={styles.link}>Quero rever minhas informações</a>
                </Link>
            </div>
        </div>
    )
}
