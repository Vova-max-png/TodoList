import './index.css'
import Header from '../Header'
import Element from '../Element'

export default function App() {
    const tasks = [
        {
            "title": "Сделать дз",
            "desc": "Сделать дз по литре"
        },
        {
            "title": "Убраться",
            "desc": "Вынести мусор и тд"
        },
    ]

    return (
        <div className="wrapper">
            <Header />
            {tasks.map((elem: any, index: number) => <Element title={elem.title} desc={elem.desc}/>)}
        </div>
    )
}