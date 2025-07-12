/*export function About() {
    return (
        <nav className="flex justify-center space-x-4">
            <a href="/dashboard"
               className="font-bo rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Home
            </a>
            <a href="/team"
               className="font-bo rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Team
            </a>
            <a href="/projects"
               className="font-bo rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Projects
            </a>
            <a href="/reports"
               className="font-bo rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Reports
            </a>
        </nav>
    );
}*/



export function About() {
    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">About Us</h1>
            <p className="text-gray-700 mb-8">
                We are a passionate team dedicated to creating innovative solutions that make a difference.
            </p>

            <nav className="flex justify-center space-x-4 mb-8">
                <a href="/dashboard" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                    Home
                </a>
                <a href="/team" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                    Team
                </a>
                <a href="/projects" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                    Projects
                </a>
                <a href="/reports" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                    Reports
                </a>
            </nav>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-purple-600 mb-3">Our Mission</h3>
                    <p className="text-gray-600">To empower businesses through innovative technology solutions.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-purple-600 mb-3">Our Vision</h3>
                    <p className="text-gray-600">A world where technology enhances every aspect of life.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-purple-600 mb-3">Our Values</h3>
                    <p className="text-gray-600">Innovation, Integrity, and Customer Focus.</p>
                </div>
            </div>
        </div>
    );
}