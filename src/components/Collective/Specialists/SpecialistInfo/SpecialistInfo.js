

const SpecialistInfo = ({photo,experience,name,specialization}) => {
    return(
        <div className="collective_specialists-item">
            <div className="collective_specialists-img"><img src={photo} alt="Specialist" /><span>стаж {experience}</span></div>
            <div className="collective_specialists-info">
                <div className="collective_specialists-name"><span>врач</span> {name} </div>
                <div className="collective_specialists-specialization"><span>специализация</span> {specialization}</div>
            </div>
        </div>
    )
}

export default SpecialistInfo