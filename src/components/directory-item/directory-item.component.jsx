import './directory-item.styles.scss'
import { Link } from 'react-router-dom';
const DirectoryItem = ({category}) => {
    return (
        <Link to={`shop/${category.title}`} className="directory-item-container">
          <div className="background-image" style = {
            {
              backgroundImage: `url(${category.imageUrl})`
            }
          }/>
          <div className="directory-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </Link>
    )
}

export default DirectoryItem;