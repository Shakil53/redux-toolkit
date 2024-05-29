import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

const App = () => {
  const {count} = useSelector((state)=> state.counter)
  const dispatch = useDispatch();


  return (
      <div className="flex h-screen w-full justify-center items-center">
        <div className="flex border border-purple-300 rounded-md bg-stone-50 p-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded bg-green-500 text-xl font-semibold text-white">Increment</button>
        <h1 className="text-3xl ml-4 mr-4">{count}</h1>
        <button
          onClick={()=> dispatch(decrement())}
          className="px-3 py-2 rounded bg-red-500 text-xl font-semibold text-white">Decrement</button>
    </div>
      </div>
  );
};

export default App;