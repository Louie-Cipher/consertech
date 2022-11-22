import HeaderLink from './headerLink';
import './styles.css';

export default () => {
    return (
        <>
            <header id='header'>
                <div id='title-subtitle'>
                    <a href='/' id='home-link'>
                        <h1 id='header-title'>Consertech</h1>
                    </a>
                    <p id='header-subtitle'>
                        “Não é apenas seu problema, mas nossa responsabilidade”
                    </p>
                </div>
                <div id='header-links'>
                    <HeaderLink
                        name='Missão, Visão e Valores'
                        link='/missao-visao-valores'
                    />
                    
                    <HeaderLink
                        name='Suporte Remoto'
                        link='/suporte-remoto'
                    />

                </div>
            </header>

            <main className='main'></main>
        </>
    );
};
