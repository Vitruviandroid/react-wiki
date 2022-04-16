import styles from './Search.module.scss';

const Search = ({ setSearch, setPageNumber }) => {

    return (
        <form className='d-flex justify-content-center gap-4  mb-5'>
            <input
                onChange={e => {
                    setPageNumber(1)
                    setSearch(e.target.value)
                }}
                className={styles.input}
                type="text"
                placeholder='Search for Characters' />
            <button onClick={(e) => {
                e.preventDefault();
            }} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
        </form>
    )
};

export default Search;