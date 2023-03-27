import { Outlet } from "react-router-dom";
import MenuLayout from "src/components/organisms/Menu/Menu";
import IClientLayout from "./IClientLayout";

function LayoutClient(props: IClientLayout) {
  // const languages = useSelector(useLanguage);
  // const dispatch = useDispatch();
  // const [input, setInput] = useState("");

  return (
    <>
      <MenuLayout />
      <Outlet />
    </>
    // <div>
    //   <ul>
    //     {languages.map((x) => (
    //       <div>
    //         <span>{x.name}</span>
    //         <button onClick={() => dispatch(changeLanguage(x.name))}>
    //           favoritar
    //         </button>
    //         {x.favorite && <span>gostei</span>}
    //       </div>
    //     ))}
    //   </ul>
    //   <div>
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //     />
    //     <button onClick={() => dispatch(addLanguage(input))}>Adicionar</button>
    //   </div>
    // </div>
  );
}

export default LayoutClient;
