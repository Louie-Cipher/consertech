import FooterLink from './footerLink';
import './styles.css';

export default () => {
    return <footer id='footer'>
        <FooterLink
            name='Facebook'
            link='https://www.facebook.com/consertechoficial/'
            img='https://img.icons8.com/color/48/000000/facebook-new.png'
        />
        <FooterLink
            name='Instagram'
            link='https://www.instagram.com/consertech.oficial/'
            img='https://img.icons8.com/color/48/000000/instagram-new.png'
        />
        <FooterLink
            name='WhatsApp'
            link='https://api.whatsapp.com/send?phone=551140028922'
            img='https://img.icons8.com/color/48/000000/whatsapp.png'
        />
        <FooterLink
            name='Telegram'
            link='https://t.me/consertech'
            img='https://img.icons8.com/color/48/000000/telegram-app.png'
        />
    </footer>;
};
