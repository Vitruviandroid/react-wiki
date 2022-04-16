import styles from './Card.module.scss';

const Card = ({ results }) => {

    let display;

    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            return (  
                <div key={id} className="col-4 position-relative mb-4">
                    <div className={styles.cards}>
                        <img className={`${styles.img} img-fluid`} src={image} alt="" />
                        <div className="content m-1">
                            <div className="fs-4 fw-bold">{name}</div>
                            <div className="fs-6">Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                                    {status}
                                </div>
                            )
                        } else if (status === "Alive") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-success`}>
                                    {status}
                                </div>
                            )
                        } else {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                                    {status}
                                </div>
                            )
                        }
                    })()}
                </div >)
        })
    } else {
        display = "No Characters Found :/"
    }

    return <>{display} </>;
};

export default Card;