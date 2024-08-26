import React, { useState, useEffect } from "react";
import wacomm from '../assets/whatsapp-hero.webp'
import crms from '../assets/crms.png'
import brainwave from '../assets/brainwave.png'

function Project() {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState();

    const Data = [
        {
            id: 1,
            projectname: 'WACOMM (Whatsapp Communication System)',
            techstack: "FASTAPI, Pydantic, SQL Alchemy, Gunicorn, Nginx, Docker, Uvicorn, AWS SQS, EC2, Codepipeline, AWS RDS, AWS CloudWatch, React JS, TailwindCSS, ShadCN",
            description: [
                'It is a Whatsapp communication system built for organizations to ease the communication with their customers.',
                "🌟 Data is given."
            ],
            frontendlink: "",
            backendlink: "",
            projectlink: "",
            photourl: wacomm
        },
        {
            id: 2,
            projectname: 'CRMS (Campus Recruitment Management System)',
            techstack: "PERN Stack, AWS",
            description: [],
            frontendlink: "",
            backendlink: "",
            projectlink: "",
            photourl: crms
        },
        {
            id: 3,
            projectname: 'Brainwave',
            techstack: "PERN Stack, Supabase, Docker, FastAPI, AWS, Nginx, Gunicorn",
            description: [],
            frontendlink: "",
            backendlink: "",
            projectlink: "",
            photourl: brainwave
        }
    ]

    const Dailoguebox = ({ data }) => {
        const [item, setItem] = useState({})

        useEffect(() => {
            if (data) {
                const value = Data.filter((it) => it.id == data)
                setItem(value[0])
            }
        }, [data])

        const toggleDialog = () => {
            setIsOpen(!isOpen);
        };


        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 overflow-scroll">
                <div className="flex flex-col bg-opacity-50 bg-[#162350] inset-y-20 border border-[#263e8c] rounded-lg shadow-lg p-6 w-1/2 h-5/6 overflow-y-scroll">
                    <h2 className="text-xl text-sky-500 font-semibold text-center">
                        {item.projectname}
                    </h2>
                    <div className="m-5 items-center flex flex-1 justify-center">
                        <img src={item.photourl} width={500} />
                    </div>
                    <div className="m-5">
                        <p className="text-gray-500 text-sm">Tech Stack</p>
                        <div className="text-sm flex flex-wrap gap-1">
                            {item?.techstack?.split(',').map((it) => <div className=" px-2 py-1 rounded-full border border-blue-800 bg-blue-800 bg-opacity-30 mx-2">{it}</div>)}
                        </div>
                    </div>
                    <div className="m-5">
                        <p className="text-gray-500 text-sm">Description</p>
                        <div className="text-md">{item?.description?.map((it) =>
                            <div className="py-1">{it}</div>
                        )}</div>
                    </div>
                    <button
                        onClick={toggleDialog}
                        className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg self-center justify-self-center w-1/3">
                        Got it! 👍🏻
                    </button>
                </div>
            </div>
        )
    }

    const handleViewDetails = (projectId) => {
        setId(projectId);
        setIsOpen(true);
    };



    return (
        <div className="flex flex-1 justify-around scroll-auto m-10 ml-5 rounded-lg border border-[#263e8c]">
            <table class="w-full text-sm text-left bg-opacity-50 rtl:text-right bg-[#162350] rounded-lg">
                <thead class="text-gray-700">
                    <tr className="border-b border-gray-700">
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            Project Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            Tech Stack
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-400 font-medium">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((project) => (
                        <tr key={project.id} className="border-b border-gray-700 hover:bg-[#1b2c64]">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                {project.projectname}
                            </th>
                            <td className="px-6 py-4">{project.techstack}</td>
                            <td className="px-6 py-4 text-right">
                                <button
                                    onClick={() => handleViewDetails(project.id)}
                                    className="font-medium text-sky-600 hover:underline">
                                    View&nbsp;Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isOpen && <Dailoguebox data={id} />}
        </div>
    );
}

export default Project;