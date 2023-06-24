import './index.css'

const BlogItem = props => {
  const {blogInfo} = props
  const {title, description, publishedDate} = blogInfo
  return (
    <li className="list-card">
      <div className="blog-card">
        <h1 className="profile-heading">{title}</h1>
        <p className="list-para">{publishedDate}</p>
      </div>
      <p className="list-para">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
