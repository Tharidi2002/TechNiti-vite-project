
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootStore} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";

interface ModifyCartProps {
    data: any;
}

// export const itemsList:CartItem[] = [];
export function ModifyCart({ data }: ModifyCartProps) {

    const dispatch = useDispatch<AppDispatch>();

    /*const [itemCount, setItemCount]
        = useState(1);*/

    /*useEffect(() => {

        const existingItem = itemsList
            .find(item =>
                item.product.id === data.product.id);
        if (existingItem) {
            existingItem.itemCount = itemCount;
        } else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount
            });
        }
        console.log(itemsList);
    }, [itemCount, data])*/

    const item = useSelector((state : RootStore) => state.cart.items. find(
        cartItem => cartItem.product.id === data.id
    ));

    const decreaseItemCount = () => {
        /*setItemCount(prevValue =>
            prevValue > 1
                ? prevValue - 1
                : (alert("Item count can't " +
                        "be less than 1"),
                        prevValue
                )
        )*/

        if(item && item.itemCount > 1){
            // setItemCount((prevCount) => prevCount - 1);
            dispatch(decreaseQuantity(data.id));
        } else {
            alert("Item count can't be less than 1");
        }

    }
    const increaseItemCount = () => {
        // setItemCount(prvCount => prvCount + 1)
        // setItemCount((prevCount) => prevCount + 1);
        dispatch(increaseQuantity(data.id));
    }

    return (
        <div className="flex items-center justify-between w-full max-w-[120px] border border-gray-300 rounded-md overflow-hidden">
            <button
                onClick={decreaseItemCount}
                className={`flex-1 py-1 transition-colors duration-200 flex items-center justify-center ${
                    item && item.itemCount <= 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
                }`}
                disabled={item && item.itemCount <= 1}
                aria-label="Decrease quantity"
            >
                -
            </button>

            <span className="flex-1 text-center text-sm font-medium text-gray-700 py-1 border-x border-gray-300">
                {item && item.itemCount}
            </span>

            <button
                onClick={increaseItemCount}
                className="flex-1 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center justify-center"
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    );
}