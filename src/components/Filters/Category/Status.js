// import styles from './Status.module.css';
import FilterBTN from "../FilterBTN";

const Status = ({ setStatus, setPageNumber }) => {

    let status = ["Dead", "Alive", "unknown"]



    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Status
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body d-flex flex-wrap">
                    {status.map((items, index) => (
                        <FilterBTN task={setStatus} setPageNumber={setPageNumber} key={index} items={items} name={status} index={index} />
                    )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Status;