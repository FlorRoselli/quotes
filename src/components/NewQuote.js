import '../style.css'

const NewQuote = ({ colors, handleClick }) => {
    return (
        <div >
        <button className="btn" style={{ background: colors}} onClick={handleClick} >
            New Quote
        </button>
        </div>
    )
}

export default NewQuote