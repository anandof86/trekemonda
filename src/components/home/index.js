import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../state/index";
const HomeComponent = () => {

  const collection = useSelector((state) => state.collection);
  const dispatch = useDispatch()
  const {depositCollection, withdrawCollection} = bindActionCreators(actions, dispatch);

  return(
        <div className="wrapper">
         <h1>{collection}</h1>
         <button onClick={() => depositCollection(1000)}>Add Collection</button>
         <button onClick={() => withdrawCollection(1000)}>Remove Collection</button>
      </div>
    )
}

export default HomeComponent;