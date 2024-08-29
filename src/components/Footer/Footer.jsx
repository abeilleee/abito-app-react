import './Footer.css'

export const Footer = () => {
    return (
        <div className="content__side-footer">
            <p className="content__side-footer--item">
                © ООО «Абито», 2011–2021
            </p>
            <a href="#!" className="content__side-footer--item">
                Политика конфиденциальности
            </a>
            <a href="#!" className="content__side-footer--item">
                Обработка данных
            </a>
        </div>
    )
}