export function Post({ title, description, children }) {
  // console.log(props)
  return (
    <div className="post">
      <h1>{title}</h1>
      <h2>{description}</h2>
      {children}
    </div>
  )
}