import './styles.css';

export default () => {
    return (
        <div className='content'>
            <h2>Orçamento</h2>
            <p>
                Para solicitar um orçamento, preencha o formulário abaixo e entraremos em contato o
                mais breve possível.
            </p>
            <form id='orcamento-form'>
                <div className='form-group'>
                    <label htmlFor='nome'>Nome</label>
                    <input type='text' id='nome' className='form-input' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' className='form-input' />
                </div>
                <div className='form-group'>
                    <label htmlFor='telefone'>Telefone</label>
                    <input type='text' id='telefone' className='form-input' />
                </div>
                <div className='form-group'>
                    <label htmlFor='mensagem'>Mensagem</label>
                    <textarea id='mensagem' className='form-input' />
                </div>

                <button type='submit' className='form-submit'>
                    Enviar
                </button>
            </form>
        </div>
    );
};
