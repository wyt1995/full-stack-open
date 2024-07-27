import '../App.css';

function Message({msg, success}) {
    if (msg === '') {
        return null;
    } else if (success) {
        return (
            <div className="success">
                {msg}
            </div>
        );
    } else {
        return (
            <div className="error">
                {msg}
            </div>
        )
    };
}

export default Message;
