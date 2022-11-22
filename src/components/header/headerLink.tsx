import './styles.css';

interface HeaderLinkProps {
    name: string;
    link: string;
    img?: string;
    newPage?: boolean | undefined;
}

export default (props: HeaderLinkProps) => {
    return (
        <a className='header-link' target={props.newPage ? '_blank' : ''} href={props.link}>
            {props.img && <img src={props.img} alt={props.name} />}
            {props.name}
        </a>
    );
};
