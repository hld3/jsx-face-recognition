export default function imageContainer({ faceUrl }) {

    return (
        <div className="image-container">
            <img src={faceUrl} alt="" className="image" width='500px' height='auto' />
            {/* TODO bounding-box */}
        </div>
    )
}