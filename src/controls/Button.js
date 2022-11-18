
export default function Button({ type, lable, disable = false, className, onClick }) {
    return (
        <button onClick={onClick} className={`btn btn-primary ${className}`} type={type} disabled={disable}>{lable}</button>
    );
}

