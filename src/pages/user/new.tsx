import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

export default function New() {
  const router = useRouter();
  const [info, setInfo] = useState('');


  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('teste');


    router.push('/user/confirmation');
  }

  return (
    <div className={styles.contentContainer}>
      <h1 className="heading1">Para começar</h1>

      <form onSubmit={handleSubmit} className={styles.formContainer}>

        <div className={styles.containerProfile}>
          <input
            type="text"
            placeholder="Seu nome - ou como você gostaria de ser chamado"
            className="containerInput"
          />

          <input
            className="containerInput"
            type="email"
            placeholder="Seu melhor email"
          />

          <input
            className="containerInput"
            type="password"
            placeholder="Uma senha bem legal"
          />
        </div>

        <div className={styles.containerQuestions}>

          <div className="heading2">Agora, precisamos de outras informações</div>

          <div className={styles.info}>
            Mensagem sobre as informações necessárias blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
          </div>

          <div>

            <div className={styles.question1}>
              <span className="heading3">Em que ano você nasceu?</span>

              <input
                className="containerInput"
                type="number"
                name="ano"
                placeholder="1990"
              />
            </div>

            <div className={styles.question2}>
              <span className="heading3">Você já faz algum exercício físico?</span>

              <div><input type="radio" value="1" name="fezExercicio" /> 1 a 3 vezes por semana</div>
              <div><input type="radio" value="2" name="fezExercicio" /> Mais de 3 vezes por semana</div>
              <div><input type="radio" value="3" name="fezExercicio" /> Não pratico nenhum tipo de atividade física</div>
            </div>

            <div className={styles.question2}>
              <span className="heading3">Qual seu objetivo</span>

              <div><input type="checkbox" name="objetivo" value="1" />Condicionamento Físico</div>

              <div>
                <input type="checkbox" name="objetivo" value="2" />
                Participar de competições Master
                <input
                  className="containerInput"
                  type="text"
                  name="objetivoQuaisProvas"
                  placeholder="quais provas?"
                />
              </div>

              <div>
                <input type="checkbox" name="objetivo" value="3" />
                Participar de Travessias
                <input
                  className="containerInput"
                  type="number"
                  name="objetivoMetros"
                  placeholder="quantos metros?"
                />
              </div>
              <div><input type="checkbox" name="objetivo" value="4" />Borboleta</div>
            </div>

            <div className={styles.question2}>
              <span className="heading3">Quais estilos você sabe nadar?</span>

              <div><input type="checkbox" name="estilo" value="1" />Crawl</div>
              <div><input type="checkbox" name="estilo" value="2" />Costas</div>
              <div><input type="checkbox" name="estilo" value="3" />Peito</div>
              <div><input type="checkbox" name="estilo" value="4" />Borboleta</div>
            </div>

            <div className={styles.question2}>
              <span className="heading3">Você tem (ou pretende usar) algum desses equipamentos</span>

              <div><input type="checkbox" name="equipamento" value="1" />Prancha</div>
              <div><input type="checkbox" name="equipamento" value="2" />Pull buoy</div>
              <div><input type="checkbox" name="equipamento" value="3" />Palmar</div>
              <div><input type="checkbox" name="equipamento" value="4" />Pé de pato</div>
            </div>

            <div className={styles.question2}>
              <span className="heading3">Quanto metros você pretende nadar, em cada treino?</span>
              <div>Entre <input
                className="containerInput"
                type="number"
                name="metros"
                placeholder="1.000 e 1.500m"
              />
              </div>
            </div>

          </div>

          <div className="containerButton">
            <button type="submit">Tudo preenchido!</button>
          </div>


        </div>

      </form>

    </div >
  )
}
