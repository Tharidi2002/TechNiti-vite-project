import laptop from '../../../assets/products/ASUS.jpg';
import {useEffect} from "react";
import {Product} from "../../Common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootStore} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productsSlice.ts";


export function Home() {
    const dispatch = useDispatch<AppDispatch>();
    // eslint-disable-next-line no-empty-pattern
    const {list} = useSelector((state: RootStore) => state.products);

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    return (
        <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">Welcome to Our Platform</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover amazing features and services tailored just for you.
                Join our community and experience the difference.
            </p>
            <div className="mt-8">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                    Get Started
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }

            </div>

            {/* Product Grid */}
            <div className="flex flex-wrap gap-4 p-5 justify-center items-center mx-auto max-w-6xl mt-12">
                <div
                    className="w-28 h-32 bg-blue-300 rounded-lg shadow-md flex justify-center items-center text-xl font-medium transition-all hover:bg-blue-400 hover:scale-105">
                    <div className="p-2">
                        <img
                            src={laptop}
                            alt="Product"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
                <div
                    className="w-28 h-32 bg-blue-300 rounded-lg shadow-md flex justify-center items-center text-xl font-medium transition-all hover:bg-blue-400 hover:scale-105">
                    02
                </div>
                <div
                    className="w-28 h-32 bg-blue-300 rounded-lg shadow-md flex justify-center items-center text-xl font-medium transition-all hover:bg-blue-400 hover:scale-105">
                    03
                </div>
            </div>
        </div>
    );
}