interface Props {
    name: string;
    link: string;
    img: string;
}

export default ({ name, link, img }: Props) => {
    return (
        <a className='footerLink' href={link} target='_blank'>
            <img src={img} alt={name} height='30px' />
            <p className='footerLinkText'>{name}</p>
        </a>
    );
};