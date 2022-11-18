
export default function ErrorMessage({ errorMessage }) {
    return (errorMessage &&
        <div className="flex items-center text-red-500  ml-3  text-xs smallcase">
            <i className="material-icons-outlined text-xs mr-1">error_outline</i>
            {errorMessage}
        </div>);
}

