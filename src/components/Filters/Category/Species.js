// import styles from './Species.module.css';

const Species = () => {
    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
               Species
            </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
                .
            </div>
        </div>
    </div>
    );
};

export default Species;