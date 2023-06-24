import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="list-container">
      {blogDetails.map(each => (
        <BlogItem blogInfo={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
