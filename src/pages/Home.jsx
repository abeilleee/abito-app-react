import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constants"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Footer } from "../components/Footer/Footer"

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn__icon" src="/images/search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>

                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>

                                <div className="content-side__box">
                                    <Sidebar />
                                    
                                    <Footer />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}