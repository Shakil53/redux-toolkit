import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


const App = () => {
  const {count} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch();


  return (
      <div className="flex h-screen w-full justify-center items-center">
        <div className="flex border border-purple-300 rounded-md bg-stone-50 p-4">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded bg-green-500 text-xl font-semibold text-white">Increment By 5</button>
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