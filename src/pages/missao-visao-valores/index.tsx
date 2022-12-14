import podcast from '../../assets/podcast.mp3';
import './styles.css';

export default () => {
    return (
        <div className='content'>
            <div className='mvv-item'>
                <h2>Nossa Missão</h2>
                <p>Realizar com máxima excelência manutenções de computadores e notebooks</p>
            </div>

            <div className='mvv-item'>
                <h2>Nossa Visão</h2>
                <p>
                    Ser referência em manutenções corretivas e preventivas de computadores e
                    periféricos
                </p>
            </div>

            <div className='mvv-item'>
                <h2>Nossos Valores</h2>
                <p>
                    Idoneidade em avaliações. Honestidade em orçamentos. Transparência em
                    relatórios. Respeito ao cliente.
                </p>
            </div>

            <div className='podcast-container'>
                <p>Ouça aqui nosso podcast sobre nossa missão, visão e valores</p>

                <audio className='audio-player' src={podcast} controls />
            </div>
        </div>
    );
};
