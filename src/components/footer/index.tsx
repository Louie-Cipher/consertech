import FooterLink from './footerLink';
import './styles.css';

export default () => {
    return <footer id='footer'>
        <FooterLink
            name='Facebook'
            link='https://www.facebook.com/consertechoficial/'
            img='https://img.icons8.com/FFFFFF/facebook-new'
        />
        <FooterLink
            name='Instagram'
            link='https://www.instagram.com/consertech.oficial/'
            img='https://img.icons8.com/FFFFFF/instagram-new'
        />
        <FooterLink
            name='WhatsApp'
            link='https://api.whatsapp.com/send?phone=551140028922'
            img='https://img.icons8.com/FFFFFF/whatsapp'
        />
        <FooterLink
            name='Telegram'
            link='https://t.me/consertech'
            img='https://img.icons8.com/FFFFFF/telegram-app'
        />

        <FooterLink
            name='Código fonte'
            link='https://github.com/louie-cipher/consertech'
            img='https://img.icons8.com/FFFFFF/github'
        />
    </footer>;
};
