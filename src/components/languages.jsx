import React, { useState, useEffect, useRef } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Mongodb from '../assets/mongodb.svg';
import Sqllite from '../assets/sqllite.svg';
import Supabase from '../assets/supabase.svg';
import Postgres from '../assets/postgres.svg';
import Nodejs from '../assets/node.svg'
import Fastapi from '../assets/fastapi.svg'
import Django from '../assets/django.svg'
import Flask from '../assets/flask.svg'
import Uvicorn from '../assets/unicorn.svg'
import Redis from '../assets/redis.svg'
import knex from '../assets/knex.svg'
import Pydantic from '../assets/pydantic.svg'
import Gunicorn from '../assets/gunicorn.svg'
import Nginx from '../assets/nginx.svg'
import Docker from '../assets/docker.svg'
import react from '../assets/react.svg'
import angualr from '../assets/angular.svg'
import next from '../assets/next.svg'
import flutter from '../assets/flutter.svg'
import mui from '../assets/mui.svg'
import tailwind from '../assets/tailwind.svg'
import shadcn from '../assets/shadcn.svg'
import cloudflare from '../assets/cloudflare.svg'
import ec2 from '../assets/ec2.svg'
import cloudwatch from '../assets/cloudwatch.svg'
import Codepipeline from '../assets/codepipeline.svg'
import s3 from '../assets/s3.svg'
import lambda from '../assets/lambda.svg'
import ses from '../assets/ses.svg'
import sqs from '../assets/sqs.svg'
import route53 from '../assets/route53.svg'
import quote from '../assets/quote.svg'
import { Player } from '@lordicon/react';

const CHART = require('../assets/barchart.json');
const CODE = require('../assets/code.json');
const GYM = require('../assets/gym.json');
const COFFEE = require('../assets/coffee.json');
const BRIEFCASE = require('../assets/brifecase.json');
const WACOMM = require('../assets/wacomm.json');
const BLOG = require('../assets/blog.json');
const GROWTH = require('../assets/growth.json');
const MOBILE = require('../assets/mobile.json');

function Languages() {
    const [type, setType] = useState('backend')
    const [work, setWork] = useState('experience')
    const playerRef = useRef(null);
    const codeRef = useRef(null);
    const gymRef = useRef(null);
    const coffeeRef = useRef(null);
    const briefRef = useRef(null);
    const wacommRef = useRef(null);
    const blogRef = useRef(null);
    const growthRef = useRef(null);
    const mobileRef = useRef(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
        codeRef.current?.playFromBeginning();
        gymRef.current?.playFromBeginning();
        coffeeRef.current?.playFromBeginning();
        briefRef.current?.playFromBeginning();
        wacommRef.current?.playFromBeginning();
        blogRef.current?.playFromBeginning();
        growthRef.current?.playFromBeginning();
        mobileRef.current?.playFromBeginning();
    }, [])

    const Skills = {
        backend: {
            icons: [
                {
                    icon: Nodejs,
                    name: 'NodeJS'
                },
                {
                    icon: Fastapi,
                    name: 'FASTAPI'
                },
                {
                    icon: Django,
                    name: 'Django'
                },
                {
                    icon: Flask,
                    name: 'Flask'
                },
                {
                    icon: Uvicorn,
                    name: 'Uvicorn'
                },
                {
                    icon: Redis,
                    name: 'Redis'
                },
                {
                    icon: knex,
                    name: 'KnexJS'
                },
                {
                    icon: Pydantic,
                    name: 'Pydantic'
                },
                {
                    icon: Gunicorn,
                    name: 'Gunicorn'
                },
                {
                    icon: Nginx,
                    name: 'Nginx'
                },
                {
                    icon: Docker,
                    name: 'Docker'
                }
            ],
            rating: 'I can build secure and effecient backend by following OWASP coding practices and also by writing neat, clean and maintainable code.'
        },
        frontend: {
            icons: [
                {
                    icon: react,
                    name: 'ReactJS'
                },
                {
                    icon: react,
                    name: 'ReactNative'
                },
                {
                    icon: angualr,
                    name: 'Angular'
                },
                {
                    icon: next,
                    name: 'NextJS'
                },
                {
                    icon: flutter,
                    name: 'Flutter'
                },
                {
                    icon: mui,
                    name: 'MaterialUI'
                },
                {
                    icon: tailwind,
                    name: 'TailwindCSS'
                },
                {
                    icon: shadcn,
                    name: 'ShadCN'
                }
            ],
            rating: 'I can build clean, neat and decent looking frontend with good ux! "UX > UI"'
        },
        database: {
            icons: [
                {
                    icon: Postgres,
                    name: 'PostgreSQL'
                },
                {
                    icon: Supabase,
                    name: 'Supabase'
                },
                {
                    icon: Sqllite,
                    name: 'SQLLite'
                },
                {
                    icon: Mongodb,
                    name: 'MongoDB'
                }
            ],
            rating: 'I can design - secure and scalable database architecture with correct relationships and types!'
        },
        aws: {
            icons: [
                {
                    icon: cloudflare,
                    name: 'CloudFlare'
                },
                {
                    icon: ec2,
                    name: 'EC2'
                },
                {
                    icon: cloudwatch,
                    name: 'CloudWatch'
                },
                {
                    icon: Codepipeline,
                    name: 'CodePipeline'
                },
                {
                    icon: s3,
                    name: 'S3Bucket'
                },
                {
                    icon: lambda,
                    name: 'Lambda'
                },
                {
                    icon: ses,
                    name: 'Sesclient'
                },
                {
                    icon: sqs,
                    name: 'SQS'
                },
                {
                    icon: route53,
                    name: 'Route53'
                }
            ],
            rating: 'I can deploy and maintain a full-stack application in the AWS!'
        },
    }

    return (
        <div className='bg-[#ffffff] flex justify-between gap-5 flex-col md:flex-row lg:flex-row h-full'>
            <div className='w-full flex flex-col lg:w-3/4 gap-2'>
                <div className="w-full py-1 flex flex-col md:flex-row lg:flex-row h-1/2 gap-5">
                    <div className='flex flex-row md:flex-col lg:flex-col gap-2 lg:w-[5.5%]'>
                        <a onClick={() => window.open('https://github.com/priyankaj04', '_blank')} id='github' className='border-2 border-[#f2f2f2] p-[13px] flex-1 flex-shrink flex items-center justify-center rounded-full cursor-pointer hover:bg-[#f2f2f2] hover:scale-105'>
                            <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 48 48"
                                id="Layer_2"
                                data-name="Layer 2"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <style>
                                        {
                                            ".cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;stroke-width:2;}"
                                        }
                                    </style>
                                </defs>
                                <path
                                    className="cls-1"
                                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                                />
                            </svg>

                        </a>
                        <Tooltip anchorSelect="#github" place="right">
                            Github
                        </Tooltip>
                        <a id='linkedin' onClick={() => window.open('https://www.linkedin.com/in/priyanka-j-687572213', '_blank')} className='border-2 border-[#f2f2f2] flex-1 p-[13px] flex-shrink flex items-center justify-center rounded-full cursor-pointer hover:bg-[#f2f2f2] hover:scale-105'>
                            <svg
                                fill="#000000"
                                width="20px"
                                height="20px"
                                viewBox="0 0 1920 1920"
                                xmlns="http://www.w3.org/2000/svg"
                                strokeWidth={0}
                            >
                                <path
                                    d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                                    fillRule="evenodd"
                                />
                            </svg>

                        </a>
                        <Tooltip anchorSelect="#linkedin" place="right">
                            LinkedIn
                        </Tooltip>
                        <a onClick={() => window.open("mailto:priyankajagadeesha10@gmail.com", "_blank")} id='mail' className='border-2 border-[#f2f2f2] flex-1 p-[13px] flex-shrink flex items-center justify-center rounded-full cursor-pointer hover:bg-[#f2f2f2] hover:scale-105'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </a>
                        <Tooltip anchorSelect="#mail" place="right">
                            priyankajagadeesha10@gmail.com
                        </Tooltip>
                        <a onClick={() => window.open("https://www.instagram.com/techtangoo/", "_blank")} id='instagram' className='border-2 border-[#f2f2f2] flex-1 p-[13px] flex-shrink flex items-center justify-center rounded-full cursor-pointer hover:bg-[#f2f2f2] hover:scale-105'>
                            <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    stroke="#000000"
                                    strokeWidth={1.2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle
                                    cx={12}
                                    cy={12}
                                    r={4}
                                    stroke="#000000"
                                    strokeWidth={1.2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 6L18 6.01"
                                    stroke="#000000"
                                    strokeWidth={1.2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <Tooltip anchorSelect="#instagram" place="right" className="z-40">
                            Techtangoo
                        </Tooltip>
                    </div>
                    <div className='h-full w-full lg:w-[70%] bg-[#f2f2f2] rounded-[35px]'>
                        <div className='flex flex-col w-full h-full'>
                            <div className='bg-[#ffffff] border-2 border-[#f2f2f2] rounded-[35px] w-full h-[70%] p-5 flex flex-col gap-3'>
                                <div>
                                    <div className='flex flex-1 gap-2 items-center text-sm flex-wrap'>
                                        <div onClick={() => setType('backend')} className={`p-2 px-4 rounded-full border-2 text-xs border-[#f2f2f2] cursor-pointer hover:font-semibold hover:scale-105 ${type === 'backend' ? 'bg-[#000000] hover:bg-[#000000] text-white font-semibold' : 'hover:bg-[#f2f2f2]'}`}>Backend</div>
                                        <div onClick={() => setType('frontend')} className={`p-2 px-4 rounded-full border-2 text-xs border-[#f2f2f2] cursor-pointer hover:font-semibold hover:scale-105 ${type === 'frontend' ? 'bg-[#000000] hover:bg-[#000000] text-white font-semibold' : 'hover:bg-[#f2f2f2]'}`}>Frontend</div>
                                        <div onClick={() => setType('database')} className={`p-2 px-4 rounded-full border-2 text-xs border-[#f2f2f2] cursor-pointer hover:font-semibold hover:scale-105 ${type === 'database' ? 'bg-[#000000] hover:bg-[#000000] text-white font-semibold' : 'hover:bg-[#f2f2f2]'}`}>Database</div>
                                        <div onClick={() => setType('aws')} className={`p-2 px-4 rounded-full border-2 text-xs border-[#f2f2f2] cursor-pointer hover:font-semibold hover:scale-105 ${type === 'aws' ? 'bg-[#000000] hover:bg-[#000000] text-white font-semibold' : 'hover:bg-[#f2f2f2]'}`}>AWS</div>
                                    </div>
                                </div>
                                <div className='flex justify-center py-5'>
                                    <div className='flex flex-1'>
                                        <div className='flex-1 w-full flex gap-3 flex-wrap items-center'>
                                            {Skills[type].icons.map((item) => (
                                                <div>
                                                    <a id={item.name} className='bg-[#E16349] flex justify-center cursor-pointer rounded-full p-2'>
                                                        <img src={item.icon} width="30px" height="30px" />
                                                    </a>
                                                    <Tooltip anchorSelect={`#${item.name}`} place="top">{item.name}</Tooltip>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full px-5 py-2 flex flex-col'>
                                <div className='flex flex-1 gap-1 items-center'>
                                    <div className='p-3 bg-[#ffffff] rounded-full shake-animation'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                                        </svg>
                                    </div>
                                    <div className='p-2 px-4'>{Skills[type]?.rating}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full gap-5 w-full lg:w-[25%] flex flex-row lg:flex-col'>
                        <div className='flex-1 h-1/2 hover:scale-105 cursor-pointer p-5 lg:p-0 rounded-[35px] bg-[#f2f2f2] flex flex-col justify-center text-center items-center text-sm'>
                            <Player
                                ref={playerRef}
                                size={28}
                                icon={CHART}
                                onComplete={() => playerRef.current?.playFromBeginning()}
                            />
                            <span className='text-[#E16349] font-semibold mt-1'>RESULTS {'>>'} EFFORTS</span>I believe in
                        </div>
                        <div className='flex-1 h-1/2 p-5 hover:scale-105 cursor-pointer lg:p-0 rounded-[35px] bg-[#000000] flex flex-col justify-center items-center text-center text-sm text-[#E16349]'>
                            <Player
                                ref={growthRef}
                                size={28}
                                icon={GROWTH}
                                onComplete={() => growthRef.current?.playFromBeginning()}
                            />
                            <div className='text-[#ffffff] font-semibold text-lg'>0.1% GROWTH</div>
                            each & everyday
                        </div>
                    </div>
                </div>
                <div className="w-full py-1 flex flex-col md:flex-row lg:flex-row h-1/2 gap-5">
                    <div className='h-full hover:scale-105 cursor-pointer gap-5 w-full lg:w-[30%] bg-[#f2f2f2] rounded-[35px] flex flex-col'>
                        <div className='flex-1 h-1/2 p-5 lg:p-0 rounded-[35px] bg-[#f2f2f2] flex flex-col text-sm'>
                            <div className='p-5 flex flex-col justify-between  h-full'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-[#ffffff] p-2 rounded-full shake-animation hover:scale-105 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </div>
                                    Education
                                </div>
                                <div className='flex flex-col h-full justify-evenly'>
                                    <div>
                                        <p className='font-semibold text-sm'>BCA<span className='text-xs font-light'>(9.1/10)</span></p>
                                        <div className='flex flex-1 justify-between text-xs text-[#808080]'>
                                            <p>BMS College for women</p>
                                            <p>2020-2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>12th std</p>
                                        <div className='flex flex-1 justify-between text-xs text-[#808080]'>
                                            <p>MES Kishore Kendra</p>
                                            <p>2018-2020</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>10th std</p>
                                        <div className='flex flex-1 justify-between text-xs text-[#808080]'>
                                            <p>Pt. J N M School</p>
                                            <p>2018</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full lg:w-[70%] bg-[#ffffff] border-2 border-[#f2f2f2] rounded-[35px]'>
                        <div className='flex flex-col w-full h-full'>
                            <div className=' rounded-[35px] w-full h-full p-5 flex flex-col'>
                                <div className='flex flex-1 justify-end'>
                                    <div className='gap-2 items-center flex text-sm flex-wrap'>
                                        <div onClick={() => setWork('experience')} className={`p-2 px-4 rounded-full border-2 text-xs border-[#f2f2f2] hover:font-semibold hover:scale-105 cursor-pointer ${work === 'experience' ? 'bg-[#000000] hover:bg-[#000000] text-white font-semibold' : 'hover:bg-[#f2f2f2]'}`}>Experience</div>
                                        <div onClick={() => setWork('projects')} className={`p-2 px-4 rounded-full border-2 text-xs border-[#f2f2f2] hover:font-semibold hover:scale-105 cursor-pointer ${work === 'projects' ? 'bg-[#000000] text-white hover:bg-[#000000] font-semibold' : 'hover:bg-[#f2f2f2]'}`}>Projects</div>
                                    </div>
                                </div>
                                {
                                    work === 'experience' ?
                                        <div className='flex flex-col gap-2 h-full justify-evenly'>
                                            <div>
                                                <div className='flex flex-1 items-center gap-3 text-[#E16349] font-semibold text-xl'>
                                                    <div className="p-2 bg-[#f2f2f2] rounded-full">
                                                        <Player
                                                            ref={briefRef}
                                                            size={22}
                                                            icon={BRIEFCASE}
                                                            onComplete={() => briefRef.current?.playFromBeginning()}
                                                        />
                                                    </div>
                                                    Circle Health
                                                </div>
                                                <p className='text-sm'>Software Engineer - Bengaluru</p>
                                                <p className='text-xs font-normal text-[#808080]'>Sept-2023 - Present | Intern: Oct-2022 - Jul-2023</p>
                                            </div>
                                            <p className='text-sm font-semibold'>FASTAPI, PERN stack, AWS, Docker, React Native, Sentry, Cypress, OpenAI, META API</p>
                                            <p className='text-sm'>As a lead developer at Circle Health, I oversee the architecture and development of top-tier SaaS products, managing databases, deploying to CICD, and ensuring the security and scalability of our offerings.</p>
                                        </div> : work === 'projects' ?
                                            <div className='flex flex-col md:flex-row lg:flex-row gap-5 mt-5 h-full'>
                                                <a id='wacommtitle' className='flex-1 hover:scale-105 cursor-pointer  flex flex-col gap-3 bg-[#f2f2f2] p-5 h-full rounded-[35px]'>
                                                    <div className='flex flex-1 justify-between items-center'>
                                                        <div className='flex flex-1 items-center gap-1 text-[#E16349] font-bold'>
                                                            <Player
                                                                ref={wacommRef}
                                                                size={30}
                                                                icon={WACOMM}
                                                                onComplete={() => wacommRef.current?.playFromBeginning()}
                                                            />
                                                            WACOMM
                                                        </div>
                                                        <a onClick={() => window.open('https://github.com/priyankaj04/WACOMM', '_blank')} id='githubproj1' className='cursor-pointer p-2 bg-white rounded-full flex justify-center items-center'>
                                                            <svg
                                                                width="25px"
                                                                height="25px"
                                                                viewBox="0 0 48 48"
                                                                id="Layer_2"
                                                                data-name="Layer 2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <defs>
                                                                    <style>
                                                                        {
                                                                            ".cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;stroke-width:2;}"
                                                                        }
                                                                    </style>
                                                                </defs>
                                                                <path
                                                                    className="cls-1"
                                                                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <p className='text-xs'>FAST API, PostgreSQL, AWS, META WA API, React JS</p>
                                                    </div>
                                                </a>
                                                <Tooltip anchorSelect="#wacommtitle" place="top">
                                                    Whatsapp Communication System
                                                </Tooltip>
                                                <div id="crmstitle" className='flex-1 hover:scale-105 cursor-pointer flex flex-col gap-3 border-2 border-[#f2f2f2] p-5 h-full rounded-[35px]'>
                                                    <div className='flex flex-1 justify-between items-center'>
                                                        <div className='flex flex-1 items-center gap-1 text-[#E16349] font-bold'>
                                                            <Player
                                                                ref={mobileRef}
                                                                size={30}
                                                                icon={MOBILE}
                                                                onComplete={() => mobileRef.current?.playFromBeginning()}
                                                            />
                                                            CRMS
                                                        </div>
                                                        <a onClick={() => window.open('https://github.com/priyankaj04/CampusRecruitmentApp', '_blank')} id='crmsgithub' className='cursor-pointer p-2 bg-[#f2f2f2] rounded-full flex justify-center items-center'>
                                                            <svg
                                                                width="25px"
                                                                height="25px"
                                                                viewBox="0 0 48 48"
                                                                id="Layer_2"
                                                                data-name="Layer 2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <defs>
                                                                    <style>
                                                                        {
                                                                            ".cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;stroke-width:2;}"
                                                                        }
                                                                    </style>
                                                                </defs>
                                                                <path
                                                                    className="cls-1"
                                                                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <p className='text-xs'>Node JS, Express JS, PostgreSQL, React Native</p>
                                                    </div>
                                                </div>
                                                <Tooltip anchorSelect="#crmstitle" place="top">
                                                    Campus Recruitment Management System
                                                </Tooltip>
                                                <div id="blogtitle" className='flex-1 hover:scale-105 cursor-pointer flex flex-col gap-3 bg-[#f2f2f2] p-5 h-full rounded-[35px]'>
                                                    <div className='flex flex-1 justify-between items-center'>
                                                        <div className='flex flex-1 items-center gap-1 text-[#E16349] font-bold'>
                                                            <Player
                                                                ref={blogRef}
                                                                size={30}
                                                                icon={BLOG}
                                                                onComplete={() => blogRef.current?.playFromBeginning()}
                                                            />
                                                            BaLanced-Blog
                                                        </div>
                                                        <a onClick={() => window.open('https://github.com/priyankaj04/Graph-CMS-Blog', '_blank')} id='bloggithub' className='cursor-pointer p-2 bg-white rounded-full flex justify-center items-center'>
                                                            <svg
                                                                width="25px"
                                                                height="25px"
                                                                viewBox="0 0 48 48"
                                                                id="Layer_2"
                                                                data-name="Layer 2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <defs>
                                                                    <style>
                                                                        {
                                                                            ".cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;stroke-width:2;}"
                                                                        }
                                                                    </style>
                                                                </defs>
                                                                <path
                                                                    className="cls-1"
                                                                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <p className='text-xs'>NextJS, GraphQl, GraphCMS</p>
                                                    </div>
                                                </div>
                                                <Tooltip anchorSelect="#blogtitle" place="top">
                                                    CRUD Web Blog
                                                </Tooltip>
                                            </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-shrink w-full lg:w-1/4 flex flex-col gap-3">
                <div className='w-full hover:scale-105 cursor-pointer p-5 h-1/4 rounded-[35px] bg-[#E16349] text-white flex flex-col justify-center text-center items-center text-md font-bold italic'>
                    <img src={quote} className='w-10 h-10' />
                    A good programmer is someone who always looks both ways before crossing a one-way street.
                </div>
                <div className='h-1/4  flex gap-5'>
                    <div className='flex flex-1 hover:scale-105 cursor-pointer justify-center flex-col rounded-[35px] text-xl font-black italic bg-[#ffffff] border-2 border-[#f2f2f2] p-5'>
                        <span className='text-[#E16349]'>CREATIVITY</span>
                        ADAPTABILITY<br></br>
                        <span className='text-[#808080]'>PATIENCE</span>
                    </div>
                    <div className='flex flex-1 hover:scale-105 cursor-pointer flex-col justify-center rounded-[35px] text-md font-semibold bg-[#f2f2f2] p-5'>
                        <div className='flex flex-1 items-center gap-3'>
                            <div>
                                <Player
                                    ref={codeRef}
                                    size={30}
                                    icon={CODE}
                                    onComplete={() => codeRef.current?.playFromBeginning()}
                                />
                            </div>
                            CODE
                        </div>
                        <div className='flex flex-1 items-center gap-3 text-[#808080]'>
                            <div>
                                <Player
                                    ref={gymRef}
                                    size={30}
                                    icon={GYM}
                                    onComplete={() => gymRef.current?.playFromBeginning()}
                                />
                            </div>
                            GYM
                        </div>
                        <div className='flex flex-1 items-center gap-3 text-[#E16349]'>
                            <div>
                                <Player
                                    ref={coffeeRef}
                                    size={30}
                                    icon={COFFEE}
                                    onComplete={() => coffeeRef.current?.playFromBeginning()}
                                />
                            </div>
                            COFFEE
                        </div>
                    </div>
                </div>
                <div className='p-5 hover:scale-105 cursor-pointer h-2/4 rounded-[35px] bg-[#f2f2f2] flex flex-col justify-evenly'>
                    <span className='text-sm'>That's it!!!</span>
                    <span className='text-lg'>I love experimenting! letting my curiosity lead the way to create something extraordinary.</span>
                    <span className='text-[#E16349] font-bold text-xl'>Thankyou! Hoping this was worth your time :)</span>
                </div>
            </div>
        </div>
    )
}

export default Languages;
