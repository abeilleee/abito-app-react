export const NoMatch = () => {
    return (
        <section className="content">
            <div className="container">
        <div className="wrapper_error">
            <h2>Такой страницы не существует!</h2>            
            <img className='image-error' src="/images/404.jpg" alt="Error 404" />
            <div className="button-box">
            <a href="/"><button className="btn-primary btn">Вернуться на главную страницу</button></a>
            </div>
        </div>
        </div>
        </section>
        
    )
}