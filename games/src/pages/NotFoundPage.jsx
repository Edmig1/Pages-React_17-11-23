import s from './NotFoundPage.module.css'
function NotFoundPage () {
    return (
        <div className={s.page}>
            <div className={s.title}>
                <h1>Ops, parece que essa página não existe :(</h1>
            </div>
            <div className={s.img}>
                <img src='./snorlax.gif'/>
            </div>
        </div>
    )
}

export default NotFoundPage