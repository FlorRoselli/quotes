import "../style.css"

const QuoteBox = ({ colors, quote, author}) => {
    return (
        <div>
            <h1 style={{ color: colors }}>{quote}</h1>
            <h3 style={{ color: colors }}>{author}</h3>
        </div>
    ) 
}

export default QuoteBox