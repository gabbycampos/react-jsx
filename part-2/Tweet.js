const Tweet = (props) => {
    const { username, name, date, message } = props;
    return (
        <div>
            <h1>username: {username}</h1>
            <h2>name: {name}</h2>
            <h3>date: {date}</h3>
            <br/>
            <h4>message: {message}</h4>
        </div>
    )
}

