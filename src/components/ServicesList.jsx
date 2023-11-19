export default function ServicesList({
    title = null,
    description = null,
    thumbnail = null,
}) {
    return (
        <div className="services-box services-left">
            <div className="box-img">
                <div className="img" style={{ backgroundImage: `url("${thumbnail}")`}}></div>
            </div>
            <div className="box-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>        
        </div>
    )
}