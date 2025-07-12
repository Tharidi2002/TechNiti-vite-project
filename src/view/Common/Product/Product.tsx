
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootStore} from "../../../store/store.ts";
import {addItemTOCart} from "../../../slices/cartSlice.ts";

type ProductProps = {
    data: ProductData
}

const images : Record<string, string> = import.meta.glob('../../../assets/products/*',
    {eager: true, import: 'default'});


export function Product({data}: ProductProps) {
    const image:string = images[`../../../assets/products/${data.image}`]

    const dispatch = useDispatch<AppDispatch>();

   const item = useSelector((state : RootStore) => state.cart.items.find(
        cartItem => cartItem.product.id === data.id
    ));

    // const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        dispatch(addItemTOCart(data));
        // setIsActive(true);
    }

    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col relative">
            <div className="h-40 bg-gray-100 rounded-md mb-4 overflow-hidden flex items-center justify-center">
                <img src={image} alt="ASUS Laptop" className="h-full w-full object-contain p-2"/>
            </div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">{data.name}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">Powerful laptop with OLED display, AMD Ryzen
                7 processor, and 16GB RAM for professional work.</p>
            <div className="flex items-center mb-4">
                <span className="text-lg font-bold text-gray-900">{data.currency}{data.price}</span>
            </div>


            {
                item ? (<ModifyCart data={{product: data}}/>) : (
                    <button onClick={addToCart} className="mt-auto w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center justify-center">
                        Add To Cart
                    </button>
                )
            }
        </div>
    );
}

// in this case i cannot resol them