import './CardComponent.css'

const IdCard = props => {

    return (
        <article className="id-card">

            <img src={props.picture} alt={props.firstName} />
            <div>
                <p><strong>First name:</strong> {props.firstName} </p>
                <p><strong>Last name:</strong>{props.lastName}</p>
                <p><strong>Gender:</strong>{props.gender}</p>
                <p><strong>Height:</strong>{props.height}</p>
                <p><strong>Birth:</strong>{props.birth.toLocaleString()}</p>
            </div>
        </article>
    )

}

export default IdCard