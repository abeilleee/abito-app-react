import './Sidebar.css'

export const Sidebar = () => {
    return (
        <div className="content-side__list">
            <div className="content-side__list-item">
                <img className="content-side__list-item--img" src="/images/side-info-1.svg"
                    alt="side-info" />
                <h5 className="content-side__list-item--title">Доставка</h5>
                <p className="content-side__list-item--text">Проверка при получении и возможность
                    бесплатно вернуть товар</p>
            </div>
            <div className="content-side__list-item">
                <img className="content-side__list-item--img" src="/images/side-info-2.svg"
                    alt="side-info" />
                <h5 className="content-side__list-item--title">Автотека</h5>
                <p className="content-side__list-item--text">Отчёт с историей авто: пробег, владельцы,
                    сведения о залоге, ДТП и ремонтах</p>
            </div>
            <div className="content-side__list-item">
                <img className="content-side__list-item--img" src="/images/side-info-3.svg"
                    alt="side-info" />
                <h5 className="content-side__list-item--title">Онлайн-бронирование жилья</h5>
                <p className="content-side__list-item--text">Посуточная аренда квартир и домов: большой
                    выбор вариантов для поездок по России</p>
            </div>
        </div>
    )
}