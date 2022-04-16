// import styles from './Gender.module.css';

import FilterBTN from "../FilterBTN";

const Gender = ({ setGender, setPageNumber }) => {

    let gender = ['female', 'male', 'genderless', 'unknown']
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Gender
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body d-flex flex-wrap ">
                    {gender.map((items, index) =>
                    (
                        <FilterBTN task={setGender} key={index} items={items} name="gender" index={index} setPageNumber={setPageNumber} />
                    )
                    )}
                </div>
            </div>
        </div>)
};

export default Gender;