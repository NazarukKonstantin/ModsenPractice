import ListElement from "./ListElement";
import { photos } from "./photos";

const Task1 = () => {
  return (
    <div>
      {photos.map(e=><ListElement element={e} key={e.id}/>)}
    </div>
  )
};

export default Task1;
