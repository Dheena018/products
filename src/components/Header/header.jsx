
import Images from "../../section";
import './header.css'

const Header = ()=>{
    let data=[...Images];
    return(
        <div className="header-container">
            {data.map(({title,productImage})=>{
                return(
                    <div className="heading">
                        <img src={productImage} alt="images"></img>
                        <p><b>{title}</b></p>
                    </div>
                )
            })}
        </div>
    )
};
export default Header;