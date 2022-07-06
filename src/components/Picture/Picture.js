import logo from "./logo.png";
import pictureOne from "./pictureOne";
import pictureTwo from "./pictureTwo";

const Picture=()=>{
    return(
     <div>
        
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="pictureOne">
         <img src={pictureOne} alt="PictureOne"/>
        </div>
        <div className="pictureTwo">
         <img src={pictureTwo} alt="PictureTwo"/>
        </div>
     </div>
    )
}
export default Picture;