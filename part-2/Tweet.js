function Tweet({ username, user, date, message }) {
  return (
    <div className="Tweet">
      <span>{user}</span>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p>{message}</p>
    </div>
  )
}