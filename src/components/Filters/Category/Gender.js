// import styles from './Gender.module.css';

import FilterBTN from "../FilterBTN";

const Gender = () => {

    let status = ["Dead", "Alive", "unknown"]

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Gender
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    {status.map((item, index) => 
                        ( 
                            <FilterBTN key={index}/>
                        )
                    )}
                </div>
            </div>
        </div>)
};

export default Gender;