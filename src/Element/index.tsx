import './index.css';

export default function Element(props: any) {
    return (
        <div className="elem">
            <h1 className='title'>{props.title}</h1>
            <p className='desc'>{props.desc}</p>
            <div className="container">
                <p className="line"></p>
                <p className="line"></p>
                <p className="line"></p>
            </div>
        </div>
    )
}