import React, { useState, useRef } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // To avoid accessibility warning

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const scrollRef = useRef(null);
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };


    const projects = [
        {
            id: 0,
            type: "work",
            title: "Circle Health",
            description: "Software Engineer",
            tooltip: "Software Engineer",
            techStack: ["MERN Stack", "PostgreSQL", "AWS", "FastAPI", "GeminiAPI", "React Native", "MUI", "Tailwind CSS", "ShadCN"],
            description1: <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                {/* Summary Section */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Work Experience</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        As one of the <span className="font-semibold">Senior Developers</span> at
                        Circle Health, I have worked extensively on multiple products, primarily
                        focusing on backend development, AWS integration, and implementing secure
                        coding best practices. My role has involved everything from building
                        standalone applications to implementing critical features with a{" "}
                        <span className="font-semibold">0% error rate</span>. I have also followed
                        <span className="font-semibold"> OWASP coding practices</span>, ensuring
                        system security and robustness.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mt-3">
                        Starting my journey as the company's first full-stack intern, I have
                        grown exponentially to become a Senior Developer, contributing to Circle
                        Health's success through consistent technical innovation and leadership.
                    </p>
                </section>

                {/* Skills and Practices Section */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Skills and Practices</h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                        <li>
                            Expertise in <span className="font-semibold">backend development</span>{" "}
                            and system integration using tools like <span className="font-semibold">Node.js</span>,{" "}
                            <span className="font-semibold">FastAPI</span>, and <span className="font-semibold">PostgreSQL</span>.
                        </li>
                        <li>
                            Extensive experience in <span className="font-semibold">AWS</span> services, including hosting solutions such as
                            <span className="font-semibold">S3</span>, <span className="font-semibold">Cloudflare</span>, and <span className="font-semibold">Route53</span>;
                            managing secure web applications with tools like <span className="font-semibold">WAF</span> and <span className="font-semibold">CodeGuru</span>;
                            and implementing scalable infrastructure using <span className="font-semibold">Load Balancers</span>, <span className="font-semibold">ElasticCache</span>,
                            <span className="font-semibold">Lambda functions</span>, and setting up and maintaining <span className="font-semibold">RDS</span>.
                        </li>
                        <li>
                            Adherence to <span className="font-semibold">OWASP coding standards</span> for secure development.
                        </li>
                        <li>
                            Contributed to both <span className="font-semibold">frontend</span> and{" "}
                            <span className="font-semibold">backend</span> systems for a seamless
                            customer experience.
                        </li>
                        <li>
                            Built <span className="font-semibold">Non-Login Applications (NLA)</span>
                            for enhanced customer usability, including features such as booking and
                            address updates.
                        </li>
                    </ul>
                </section>

                {/* Key Projects Section */}
                <section>
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Key Projects</h2>
                    <ul className="space-y-6">
                        {/* Project 1 */}
                        <li>
                            <h3 className="font-semibold text-gray-800">CHAMS - Circle Health Admin Management System</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mt-1">
                                A centralized backend system built using <span className="font-semibold">Node.js</span>.
                                My responsibilities included building APIs, integrating with client systems to sync employee records, automating WhatsApp messages and emails,
                                and setting up schedulers for automatic synchronization and messaging.
                            </p>
                        </li>
                        {/* Project 2 */}
                        <li>
                            <h3 className="font-semibold text-gray-800">WACOMM - WhatsApp Communication System</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mt-1">
                                Developed a full-stack SaaS application using <span className="font-semibold">FastAPI</span>,{" "}
                                <span className="font-semibold">React</span>, <span className="font-semibold">ShadCN</span>,
                                and <span className="font-semibold">PostgreSQL</span>. The platform integrates with WhatsApp's META APIs to enable users to send template-based WhatsApp messages, flows, and notifications.
                                Key features include message tracking (e.g.,sent time, delivered time, read time in UTC) and a robust backend architecture.
                            </p>
                        </li>
                        {/* Project 3 */}
                        <li>
                            <h3 className="font-semibold text-gray-800">Circle Health Customer App</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mt-1">
                                Contributed to both frontend and backend development using <span className="font-semibold">React Native (Expo)</span>.
                                Key responsibilities included ensuring APIs were securely authenticated and validated, maintaining a low error rate, optimizing response times,
                                and successfully passing <span className="font-semibold">Vulnerability Assessment and Penetration Testing (VAPT)</span>.
                            </p>
                        </li>
                        {/* Project 4 */}
                        <li>
                            <h3 className="font-semibold text-gray-800">Non-Login Applications (NLA)</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mt-1">
                                Developed non-login web applications for customers, including booking systems and address updates. Managed the entire development lifecycle,
                                including building secure backend systems, designing intuitive frontends, and hosting on AWS.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        },
        {
            id: 1,
            type: "project",
            title: "WACOMM",
            description1:
                <>
                    <div className="text-sm leading-relaxed">
                        <p>
                            <strong className="font-semibold">
                                WACOMM is a SaaS product designed to serve as an endpoint for
                                organizations to send WhatsApp messages to their customers through
                                the WhatsApp Meta API.
                            </strong>{" "}
                            This application enables a single organization with multiple customer
                            support members, using a single business account number, to manage
                            and send various types of messages, including:
                        </p>
                        <ul className="list-disc pl-5 mt-3">
                            <li>Individual messages</li>
                            <li>Bulk messages</li>
                            <li>Template messages</li>
                            <li>Photos</li>
                            <li>Videos</li>
                            <li>Webflows</li>
                            <li>Documents</li>
                        </ul>
                        <p className="mt-3">
                            Additionally, the system allows to raise ticket (Incident Management), generate summary of audio using <span className="italic font-semibold">GEMINI AI</span> and allows to integrate with customers table and sync users list.
                        </p>
                    </div>
                </>
            ,
            tooltip: "Whatsapp Communication System",
            githubLink: "https://github.com/priyankaj04/WACOMM",
            techStack: ["FAST API",
                "Uvicorn",
                "Pydantic",
                "SQLAlchemy",
                "PostgreSQL",
                "AWS SQS",
                "SES Client",
                "META WA API"]
        },
        {
            id: 2,
            title: "CRMS",
            type: "project",
            description1: <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                {/* Intro Section */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">
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
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Users and Roles</h2>
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
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Features</h2>
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
        <div className="h-full w-full lg:w-[70%] bg-[#eaeaea] border-2 border-[#eaeaea] rounded-[25px] relative">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button
                    onClick={scrollLeft}
                    className="p-2 px-4 rounded-full bg-[#E16349] text-white shadow hover:bg-[#f56950] transition duration-300"
                >
                    &lt;
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                <button
                    onClick={scrollRight}
                    className="p-2 px-4 rounded-full bg-[#E16349] text-white shadow hover:bg-[#f56950] transition duration-300"
                >
                    &gt;
                </button>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide mx-5"
                style={{ scrollBehavior: "smooth" }}
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="min-w-[230px] max-w-[230px] my-5 bg-white p-4 rounded-[25px] border border-[#eaeaea] hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="flex justify-end mb-3">
                                    <p className="px-3 py-1 text-xs font-semibold rounded-full bg-[#FFF5F3] text-[#E16349] border border-[#E16349]">
                                        {project.type}
                                    </p>
                                </div>
                                <h3 className="text-lg font-semibold text-[#333] mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#666]">{project.tooltip}</p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button onClick={() => openModal(project)} className="px-4 py-2 text-sm font-medium text-white bg-[#E16349] rounded-full hover:bg-[#f56950] transition-colors duration-300">
                                    Dive In
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="bg-white border-2 border-[#eaeaea] p-6 rounded-[25px] mx-auto my-10 h-3/4 w-3/4 shadow-lg z-50 overflow-y-scroll"
                overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll"
            >
                {selectedProject && (
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-4 flex-1">
                            {/* Title */}
                            <h2 className="text-black font-semibold text-2xl">
                                {selectedProject.tooltip}
                            </h2>
                            {/* Tech Stack */}
                            <div className="flex gap-2 flex-wrap">
                                {selectedProject.techStack?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm font-semibold bg-[#FFF5F3] text-[#E16349] rounded-full border border-[#E16349]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {/* Description */}
                            <p className="text-sm leading-relaxed">
                                {selectedProject.description1}
                            </p>
                            {/* GitHub Link */}
                            {selectedProject.githubLink && <div className="mt-4">
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
                        </div>
                        {/* Close Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-sm font-medium text-white bg-[#E16349] rounded-full hover:bg-[#c5523d] transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>

        </div >
    );
};

export default Projects;
