
import CartImages from "../../cartimages";
import './article.css'

const Article = ()=>{
    let Store = [...CartImages];
    console.log(Store);
    return(
        <div className="article-container">
            {Store.map(({title,price,brand,imageurl})=>{
                return(
                    <div className="article-image">
                        <img src={imageurl} alt="{picture}"  className="articleImage"/>
                        <h2>{title}</h2>
                        <p><b>{price}</b></p>
                        <span>{brand}</span>
                    </div>
                )
            })}
        </div>
    )
};
export default Article;