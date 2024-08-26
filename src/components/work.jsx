function Work() {
    return (
        <div className="flex flex-1 justify-around scroll-auto m-10 ml-5 rounded-lg border border-[#263e8c]">
            <table class="w-full text-sm text-left rtl:text-right bg-opacity-50 bg-[#162350] rounded-lg">
                <thead class="text-gray-700">
                    <tr className="border-b border-gray-700">
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            Tech Stack
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            Company
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            Year
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b  border-gray-700 hover:bg-[#1b2c64]">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                            Software Developer Engineer - 1
                        </th>
                        <td class="px-6 py-4">
                            PERN Stack, Supabase, Docker, FastAPI, AWS, Nginx, Gunicorn
                        </td>
                        <td class="px-6 py-4">
                            Circle Health
                        </td>
                        <td class="px-6 py-4">
                            09-2023 - Present
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-sky-600 hover:underline">View Details</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-700 hover:bg-[#1b2c64]">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                            Software Developer Engineer Intern
                        </th>
                        <td class="px-6 py-4">
                            PERN Stack, AWS
                        </td>
                        <td class="px-6 py-4">
                            Circle Health
                        </td>
                        <td class="px-6 py-4">
                            10-2022 - 07-2023
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-sky-600 hover:underline">View Details</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Work;