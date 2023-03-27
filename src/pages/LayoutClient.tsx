import { Outlet } from "react-router-dom";
import DashboardLayout from "src/components/organisms/MenuLayout/MenuLayout";

function LayoutClient() {
  // const languages = useSelector(useLanguage);
  // const dispatch = useDispatch();
  // const [input, setInput] = useState("");

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
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
