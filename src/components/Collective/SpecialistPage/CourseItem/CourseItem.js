

const CourseItem = ({year,coursesName}) => {
    return(
        <div className="specialist-page_courses-item">
            <span>{year}</span>
            {coursesName}
        </div>
    )
}

export default CourseItem