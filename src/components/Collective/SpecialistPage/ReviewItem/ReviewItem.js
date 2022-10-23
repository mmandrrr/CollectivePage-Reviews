

const ReviewItem = ({userName,profilePhoto,review,specPhoto}) => {
    return(
        <div className="specialist-page_overview-item">
            <img src={profilePhoto} alt="" className="specialist-page_overview-photo" />
            <div className="specialist-page_overview-information">
                <div className="specialist-page_overview-name">
                    <span>пользоваель</span>
                    {userName}
                </div>
                <div className="specialist-page_overview-text">
                    <span>отзыв</span>
                    {review}
                </div>
                <div className="specialist-page_overview-reply">
                    <img src={specPhoto} alt="" className="specialist-page_overview-reply-photo" />
                    <div className="specialist-page_overview-reply-text">
                        <span>ответ</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem