import preLoader from "../../../assets/images/loader.svg";
import s from"./Preloader.module.css"

// {
//     this.props.isFetching ? <img src={preLoader}/> : null
// }

let Preloader = (props) => {
    return <div className={s.blockWithPreloader}>
        <img className={s.preloader} src={preLoader}/>
    </div>
};

export default Preloader;