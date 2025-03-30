import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Player } from '@lordicon/react';
import Xletter from '../assets/x-letter.svg'

Modal.setAppElement("#root"); // To avoid accessibility warning
const BRIEFCASE = require('../assets/brifecase.json');

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [openWork, setOpenWork] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const briefRef = useRef(null);

    useEffect(() => {
        briefRef.current?.playFromBeginning();
    }, [])

    const work = {
        type: "work",
        title: "Circle Health",
        description: "Software Engineer",
        tooltip: "Software Engineer",
        date: '09-2023 - Present, Intership: 10-2022 - 07-2023',
        description1: <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            {/* Summary Section */}
            <section className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Key Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                    <li>
                        As the <span className="font-semibold">Go-To Engineer</span>, my top priority is resolving critical bugs that impact user experience
                        or lead to inefficient resource utilization. Once stabilized, I focus on building optimized, future-proof features
                        with best coding practices.
                    </li>
                    <li>
                        Working on <span className="font-semibold">Scalability</span> has been a major growth area for me—
                        from optimizing databases and implementing caching, strategies to setting up monitoring, logging, and tracking tools.
                        Constantly learning and experimenting to improve system performance.
                    </li>
                    <li>
                        Ensuring <span className="font-semibold">System Security</span> by implementing WAF, GuardDuty, following <span className="font-semibold">OWASP</span> secure coding guidelines, and actively monitoring for vulnerabilities or attacks.
                    </li>
                    <li>
                        Developing critical features like the <span className="font-semibold">communication system</span>,
                        enabling seamless WhatsApp, SMS, email, and call-based interactions. Ensuring efficiency and reliability in messaging workflows.
                    </li>
                    <li>
                        Reviewing PRs for key features, collaborating closely with the team to ensure smooth deployments
                        with minimal friction.
                    </li>
                </ul>
            </section>

            {/* Key Projects Section */}
            <section>
                <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Key Projects</h2>
                <ul className="space-y-6">
                    {/* Project 1 */}
                    <li>
                        <h3 className="font-semibold text-gray-800">Circle Health Customer App</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mt-1">
                            Contributed equally to both frontend and backend development. A key learning experience was handling
                            <span className="font-semibold"> app releases</span>—managing code pushes, deployments to the Google Play Store and App Store,
                            and ensuring a seamless user experience. Monitoring errors, preventing crashes, and debugging issues in production
                            provided invaluable insights. Late-night production deployments to avoid disrupting users became part of the process.
                        </p>
                        <p className="mt-1 text-xs">
                            Open on mobile to view the app on the App Store.
                            {" "}
                            <a
                                href="https://onelink.to/j8wnu8"
                                className="text-[#E16349] underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Customer App
                            </a>
                        </p>
                    </li>
                    {/* Project 2 */}
                    <li>
                        <h3 className="font-semibold text-gray-800">WhatsApp Communication System</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mt-1">
                            Built an in-house <span className="font-semibold">full-stack SaaS solution</span> to replace a paid service,
                            integrating Meta's WhatsApp API for automation. Developed key features like WhatsApp bot flows,
                            interactive messaging, and additional tools for internal and external clients.
                            Handling <span className="font-semibold">real-time messaging</span>, managing queue systems,
                            and implementing <span className="font-semibold">load balancing</span> under tight deadlines
                            was a major learning experience.
                        </p>
                        <p className="mt-1 text-xs">
                            <a
                                href="https://wacom.circle.care"
                                className="text-[#E16349] underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WACOM
                            </a>
                        </p>
                    </li>
                    {/* Project 3 */}
                    <li>
                        <h3 className="font-semibold text-gray-800">Hoops App (Philippines App)</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mt-1">
                            Independently built the entire system, including the <span className="font-semibold">admin dashboard</span>{" "}
                            and <span className="font-semibold">mobile application</span>, based on client requirements. Managing multiple iterations and ensuring
                            a seamless experience for the client was both a challenge and an achievement.
                            Previous learnings helped in delivering a high-quality product efficiently.
                        </p>
                        <p className="mt-1 text-xs">
                            Open on mobile to view the app on the App Store.
                            {" "}
                            <a
                                href="https://wearables-assets.s3.ap-south-1.amazonaws.com/hoops-wearableresponse.html"
                                className="text-[#E16349] underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                HOOPS APP
                            </a>
                        </p>
                    </li>
                    {/* Project 4 */}
                    <li>
                        <h3 className="font-semibold text-gray-800">System Integrations with Partners</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mt-1">
                            Integrated our system with partner platforms to extend our services to their clients.
                            Focused on <span className="font-semibold">secure API design</span>, protected endpoints,
                            data wrapping, and preventing data leaks to ensure smooth and hassle-free integration.
                        </p>
                    </li>
                </ul>
            </section>
        </div>,
        icon: "breifcase",
        year: '10-2022 - Present'
    }

    const projects = [
        {
            id: 2,
            title: "Campus Recruitment Management System",
            type: "project",
            description1: <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                {/* Intro Section */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                        Overview
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        The Campus Recruitment Management System (CRMS) is a specialized job
                        portal designed specifically for colleges. It facilitates smooth and
                        efficient campus recruitment processes by connecting recruiters with
                        campus talent. The platform enables students to seamlessly apply for job
                        opportunities available on their campus while ensuring recruiters and
                        college administrators can manage and streamline the recruitment process
                        effectively.
                    </p>
                </section>

                {/* Users and Roles Section */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Users and Roles</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        The CRMS platform caters to four main types of users, each with distinct
                        roles and access levels:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                        <li>
                            <span className="font-semibold">Students</span>: Students can view and
                            apply for job opportunities posted by recruiters on the platform.
                        </li>
                        <li>
                            <span className="font-semibold">Recruiters</span>: Recruiters can post
                            job openings, review applications, and manage the recruitment process.
                        </li>
                        <li>
                            <span className="font-semibold">Admin</span>: Admins oversee the
                            platform's operations, verify job postings, and ensure smooth
                            functionality of the system.
                        </li>
                        <li>
                            <span className="font-semibold">HOD (Head of Department)</span>: HODs
                            can update department-specific information, such as syllabi, which helps
                            recruiters better understand students' qualifications.
                        </li>
                    </ol>
                </section>

                {/* Features Section */}
                <section>
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Features</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        The CRMS offers a robust set of features designed to make the recruitment
                        process efficient and user-friendly:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                        <li>
                            <span className="font-semibold">Student Profiles</span>: Students can
                            create detailed profiles that include resumes, mark sheets, syllabi,
                            and other academic records.
                        </li>
                        <li>
                            <span className="font-semibold">Resume Builder</span>: Students will build their
                            resume and apply for jobs. This is to maintain uniform view of porfolio for recruiters.
                        </li>
                        <li>
                            <span className="font-semibold">Recruiter Profiles</span>: Recruiters
                            can maintain profiles with company details, enabling a transparent and
                            professional interaction.
                        </li>
                        <li>
                            <span className="font-semibold">Job Details</span>: Recruiters can post
                            job or internship opportunities with detailed job descriptions to
                            attract suitable candidates.
                        </li>
                        <li>
                            <span className="font-semibold">Job Validation</span>: College
                            administrators verify job postings to ensure they are legitimate and
                            relevant before making them available to students.
                        </li>
                        <li>
                            <span className="font-semibold">Easy Job Application</span>: Students
                            can apply for jobs with a single click, without the need for additional
                            forms or questionnaires.
                        </li>
                        <li>
                            <span className="font-semibold">Applicant Filtering</span>: Recruiters
                            can review student resumes and filter applicants based on criteria such
                            as marks, course, and relevant skills.
                        </li>
                        <li>
                            <span className="font-semibold">Interview Notifications</span>: Once
                            shortlisted, students receive notifications with interview details.
                            Successful candidates are informed about their selection for the
                            opportunity.
                        </li>
                    </ul>
                </section>
            </div>
            ,
            tooltip: "Campus Recruitment Management System",
            githubLink: "https://github.com/priyankaj04/CampusRecruitmentApp",
            techStack: ['Node.js', 'Express.js', 'React Native', 'PostgreSQL']
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="h-full w-full lg:w-[70%] my-1">
            <div className="flex flex-col gap-4 h-full xl:flex-row 2xl:flex-row lg:flex-row">
                {/* Work Experience Card */}
                <div className="flex flex-1 bg-white p-5 rounded-[25px] border border-[#eaeaea] hover:scale-105 shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
                    <div className="flex flex-col h-full justify-between">
                        {/* Title & Icon */}
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-[#eaeaea] rounded-full w-12 h-12 flex items-center justify-center">
                                <Player
                                    ref={briefRef}
                                    size={24}
                                    icon={BRIEFCASE}
                                    onComplete={() => briefRef.current?.playFromBeginning()}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#333]">
                                    {work.title}
                                </h3>
                                <p className="text-sm text-[#666]">{work.tooltip}</p>
                            </div>
                        </div>

                        {/* Role Info */}
                        <div className="mt-2 text-sm text-[#444]">
                            <span className="font-semibold">{work.year}</span>
                            <br />
                            Backend Engineer | Go-To Engineer | Security | Scalability | App
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setOpenWork(true)}
                                className="px-4 py-2 text-sm font-medium text-white bg-[#E16349] rounded-full hover:bg-[#f56950] transition-colors duration-300"
                            >
                                Dive In
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-1 bg-white p-5 rounded-[25px] border border-[#eaeaea] hover:scale-105 shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out"
                    >
                        <div className="flex flex-col h-full justify-between">
                            {/* Project Title */}
                            <div className="flex gap-3 items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#333]">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-2 text-sm text-[#444]">
                                <span className="font-semibold">Full Stack - React Native Application</span>
                                <br />
                                College Project | Expo Go
                            </div>

                            {/* Button */}
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => openModal(project)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-[#E16349] rounded-full hover:bg-[#f56950] transition-colors duration-300"
                                >
                                    Dive In
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={openWork}
                onRequestClose={() => setOpenWork(false)}
                contentLabel="Project Details"
                className="bg-white border-2 border-[#eaeaea] p-6 rounded-[25px] mx-auto my-10 h-[90%] w-[90%] shadow-lg z-50 overflow-y-scroll"
                overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll"
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="mb-20">
                            <div className="flex flex-1 justify-between mb-5 items-center">
                                <div>
                                    <h2 className="text-black font-semibold text-2xl">
                                        {work.tooltip} <span className="text-[#E16349] text-normal">@</span> <span className="underline cursor-pointer" onClick={() => window.open('https://circlehealth.in')}>{work.title}</span>
                                    </h2>
                                    {work.date && <p className="text-[#555] text-sm">{work.date}</p>}
                                </div>
                                <div onClick={() => setOpenWork(false)} className="cursor-pointer">
                                    <img src={Xletter} width={25} height={25} />
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {work.description1}
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="bg-white border-2 border-[#eaeaea] p-6 rounded-[25px] mx-auto my-10 h-[90%] w-[90%] shadow-lg z-50 overflow-y-scroll"
                overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll"
            >
                {selectedProject && (
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-4 flex-1">
                            {/* Title */}
                            <div className="flex flex-1 justify-between mb-2 items-center">
                                <div>
                                    <h2 className="text-black font-semibold text-2xl">
                                        {selectedProject.tooltip}
                                    </h2>
                                    {/* Tech Stack */}
                                    <div className="flex gap-2 flex-wrap mt-2">
                                        {selectedProject?.techStack?.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm font-semibold bg-[#FFF5F3] text-[#E16349] rounded-full border border-[#E16349]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div onClick={closeModal} className="cursor-pointer">
                                    <img src={Xletter} width={25} height={25} />
                                </div>
                            </div>
                            {selectedProject.githubLink && <div className="mt-2">
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#E16349] rounded-lg shadow hover:bg-[#c5523d] transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 1.5a9 9 0 00-2.85 17.51c.45.08.62-.19.62-.43v-1.52c-2.52.54-3.05-1.08-3.05-1.08a2.38 2.38 0 00-1-1.31c-.84-.57.06-.56.06-.56a1.88 1.88 0 011.38.93 1.91 1.91 0 002.61.75 1.9 1.9 0 01.57-1.2c-2.01-.23-4.13-1-4.13-4.39a3.4 3.4 0 01.9-2.36 3.14 3.14 0 01.09-2.33s.76-.24 2.51.93a8.53 8.53 0 014.57 0c1.74-1.17 2.5-.93 2.5-.93a3.14 3.14 0 01.1 2.33 3.4 3.4 0 01.9 2.36c0 3.41-2.12 4.16-4.14 4.39a2.14 2.14 0 01.61 1.67v2.47c0 .24.17.51.63.42A9 9 0 0012 1.5z"
                                        />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>}
                            {/* Description */}
                            <p className="text-sm leading-relaxed mb-20">
                                {selectedProject.description1}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </div >
    );
};

export default Projects;
