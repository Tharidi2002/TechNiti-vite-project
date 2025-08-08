export function AdminPanel() {
    // Mock data for demonstration
    const stats = [
        { name: 'Total Products', value: '142', change: '+12%', changeType: 'positive' },
        { name: 'Monthly Orders', value: '1,248', change: '+24%', changeType: 'positive' },
        { name: 'Pending Orders', value: '28', change: '-5%', changeType: 'negative' },
        { name: 'Customer Satisfaction', value: '94%', change: '+3%', changeType: 'positive' },
    ];

    const recentOrders = [
        { id: '#ORD-001', customer: 'John Doe', date: '15 Oct, 2023', amount: 'LKR 25,999', status: 'Completed' },
        { id: '#ORD-002', customer: 'Jane Smith', date: '14 Oct, 2023', amount: 'LKR 42,500', status: 'Processing' },
        { id: '#ORD-003', customer: 'Robert Johnson', date: '14 Oct, 2023', amount: 'LKR 89,750', status: 'Completed' },
        { id: '#ORD-004', customer: 'Emily Davis', date: '13 Oct, 2023', amount: 'LKR 32,499', status: 'Pending' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                + Add Product
                            </button>
                            <div className="relative">
                                <button className="bg-gray-200 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                    </svg>
                                </button>
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="h-8 w-8 rounded-full object-cover"
                                    src="https://ui-avatars.com/api/?name=Admin&background=7e22ce&color=fff"
                                    alt="Admin"
                                />
                                <span className="ml-2 text-gray-700 font-medium">Admin User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6">
                            <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                            <div className="mt-2 flex items-baseline">
                                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                <p
                                    className={`ml-2 text-sm font-medium ${
                                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                    }`}
                                >
                                    {stat.change}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Order ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Customer
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                                {order.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {order.customer}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {order.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {order.amount}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.status === 'Completed'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'Processing'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-red-100 text-red-800'
                          }`}>
                            {order.status}
                          </span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                                <button className="text-sm font-medium text-purple-600 hover:text-purple-500">
                                    View all orders
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
                            </div>
                            <div className="p-6 grid grid-cols-2 gap-4">
                                <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 py-3 px-4 rounded-lg flex flex-col items-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <span>All Product</span>
                                </button>
                                <button className="bg-green-100 hover:bg-green-200 text-green-700 py-3 px-4 rounded-lg flex flex-col items-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    <span>Manage Orders</span>
                                </button>
                                <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 px-4 rounded-lg flex flex-col items-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>Customers</span>
                                </button>
                                <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 py-3 px-4 rounded-lg flex flex-col items-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <span>Reports</span>
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-purple-100 p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">Added new product</p>
                                            <p className="text-sm text-gray-500">ASUS ROG Strix Laptop</p>
                                            <p className="text-xs text-gray-400">2 hours ago</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">Order completed</p>
                                            <p className="text-sm text-gray-500">#ORD-0023</p>
                                            <p className="text-xs text-gray-400">5 hours ago</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">New customer registered</p>
                                            <p className="text-sm text-gray-500">Robert Johnson</p>
                                            <p className="text-xs text-gray-400">1 day ago</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}