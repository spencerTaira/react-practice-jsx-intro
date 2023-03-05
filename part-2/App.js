function App() {
  return (
    <div>
      <Tweet
        user="User 1"
        username="username 1"
        date={new Date().toDateString()}
        message="Tweet 1"
      />
      <Tweet
        user="User 2"
        username="username 2"
        date={new Date().toDateString()}
        message="Tweet 2"
      />
      <Tweet
        user="User 3"
        username="username 3"
        date={new Date().toDateString()}
        message="Tweet 3"
      />
    </div>
  )
}