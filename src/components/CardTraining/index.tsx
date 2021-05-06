import styles from './styles.module.scss';

interface TrainingProps {
    treino: string;
    nome: string;
    repeticao: number;
    metros: number;
    tarefa: string;
    esforco?: string;
    batimentos?: number;
    observacao?: string;
}

interface CardTrainingProps {
    training: TrainingProps;
}

export function CardTraining({ training }: CardTrainingProps) {
    console.log(training);
    const { treino } = training
    console.log(treino);

    return (
        <div className={`${styles.containerCard} ${treino}`}>
            <div className={styles.text1}>{training.nome}</div>

            <div className={styles.containerInfo}>
                <div className={styles.repeat}>
                    <div className={styles.text1}>{training.repeticao} x</div>
                    <div className={styles.text1}>{training.metros}m</div>
                </div>
                <div className={styles.trainingInfo}>
                    {training.tarefa}
                </div>
            </div>
        </div>
    )
}