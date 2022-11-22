import './styles.css';

export default () => {
    return (
        <div className='content'>
            <h2>Suporte Remoto</h2>
            <h3>Como funciona?</h3>
            <p>
                O suporte remoto é uma forma de atendimento no qual o técnico acessa o computador do
                cliente remotamente, isso é, sem que o técnico precise estar fisicamente no local do
                cliente. Aqui na Consertech, o suporte remoto é feito através de uma ferramenta
                chamada <a href='https://rustdesk.com/'>RustDesk</a>, que é gratuita e de código
                aberto, o que fornece mais segurança e confiabilidade para o cliente.
            </p>

            <h3>Como posso fazer o suporte remoto?</h3>
            <p>Clique no botão abaixo para solicitar o suporte remoto</p>
            {/*  formulário para o cliente preencher */}
            <form id='suporte-remoto-form'>
                <label htmlFor='nome'>Nome</label>
                <input type='text' id='nome' name='nome' />
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' />
                <label htmlFor='telefone'>Telefone</label>
                <input type='tel' id='telefone' name='telefone' />
                <label htmlFor='mensagem'>Mensagem</label>
                <textarea id='mensagem' name='mensagem' />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};
