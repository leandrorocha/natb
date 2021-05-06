import { CardTraining } from '../../components/CardTraining';

import { useRouter } from 'next/router';

import styles from './styles.module.scss';

export default function Training() {
    const router = useRouter();

    let trainings = [
        {
            treino: 'aquecimento',
            nome: 'Aquecimento',
            repeticao: 1,
            metros: 700,
            tarefa: '300m crawl/estilo, 100m pernada crawl sem prancha, volta crawl, 100m (estilo/volta crawl), 200m crawl.'
        },
        {
            treino: 'velpal',
            nome: 'Velocidade Palmateio',
            repeticao: 2,
            metros: 50,
            tarefa: '50m (12,5m crawl a 100% - estante crawl recuperativo (37,5m).'
        },
        {
            treino: 'educativo',
            nome: 'Educativo',
            repeticao: 1,
            metros: 300,
            tarefa: 'CRAWL - tocar o de polegar na coxa a cada braçada, volta crawl completo.'
        },
        {
            treino: 'serie',
            nome: 'Série',
            repeticao: 1,
            metros: 600,
            tarefa: '200m crawl ritmo 20", 150m (50 crawl, 50 estilo, 50 crawl), 50m pernada livre, 200m crawl.',
            esforco: '80%',
            batimentos: 140
        },
        {
            treino: 'rml',
            nome: 'Recuperação',
            repeticao: 3,
            metros: 150,
            tarefa: 'PERNADA: vai pernada borboleta lateral ou estilo, volta pernada de crawl, finaliza nadando crawl.',
            observacao: 'Prancha'
        }
    ];

    function finishTraining() {
        console.log('save!');
        //router.push('/training');
    }

    return (
        <div className={styles.contentContainer}>
            <h1 className="heading1">MEUS TREINOS</h1>

            <div className={styles.containerTraining}>
                {trainings.map((training) =>
                    <CardTraining
                        key={training.treino}
                        training={training}
                    />
                )}
            </div>

            <div className={styles.contaierText1}><input type="checkbox" name="finish" value="true" /><span>Terminei meu treino de hoje</span></div>

            <p className={styles.text2}>Você nadou 2150 metros</p>
        </div>
    )
}
