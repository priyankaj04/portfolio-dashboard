import { ResponsivePieCanvas } from '@nivo/pie'
import React, { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function Languages() {
    /* const [type, setType] = useState('backend')

    const data = [
        {
            "id": "Javascript",
            "label": "Javascript",
            "value": 35,
            "color": "hsl(302, 70%, 50%)"
        },
        {
            "id": "Python",
            "label": "Python",
            "value": 35,
            "color": "hsl(314, 70%, 50%)"
        },
        {
            "id": "Typescript",
            "label": "Typescript",
            "value": 7,
            "color": "hsl(290, 70%, 50%)"
        },
        {
            "id": "HTML",
            "label": "HTML",
            "value": 7,
            "color": "hsl(46, 70%, 50%)"
        },
        {
            "id": "CSS",
            "label": "CSS",
            "value": 5,
            "color": "hsl(28, 70%, 50%)"
        },
        {
            "id": "C++",
            "label": "C++",
            "value": 4,
            "color": "hsl(4, 70%, 50%)"
        },
        {
            "id": "C",
            "label": "C",
            "value": 4,
            "color": "hsl(330, 70%, 50%)"
        },
        {
            "id": "Dart",
            "label": "Dart",
            "value": 3,
            "color": "hsl(30, 70%, 50%)"
        },
    ]

    const Progress = ({ color, bgcolor, border, number }) => {
        return (
            <div className={`w-[100px] h-3 border rounded-lg`} style={{ backgroundColor: bgcolor, border: border }}>
                <div className={`rounded-lg`} style={{ width: number, height: '100%', backgroundColor: color }}></div>
            </div>
        )
    }
    return (
        <div className="flex flex-1 m-5 gap-10 flex-wrap justify-center">
            <div className='flex-1 rounded-lg h-[300px] bg-opacity-50 bg-[#162350] border border-[#263e8c]'>
                <ResponsivePieCanvas
                    data={data}
                    margin={{ top: 35, right: 200, bottom: 35, left: 35 }}
                    innerRadius={0.7}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    isInteractive={false}
                    colors={{ scheme: 'yellow_green_blue' }}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.6
                            ]
                        ]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#ffffff"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="#333333"
                    enableArcLabels={false}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(0, 0, 0, 0.9)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(0, 0, 0, 0.9)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'ruby'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'c'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'go'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'lisp'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'elixir'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'javascript'
                            },
                            id: 'lines'
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 140,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 60,
                            itemHeight: 14,
                            itemTextColor: 'whitesmoke',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 14,
                            symbolShape: 'circle',
                        }
                    ]}
                />
            </div>
            <div className='flex-1 rounded-lg h-[300px] bg-opacity-50 bg-[#162350] border border-[#263e8c]'>
                <div className='flex p-5 flex-1 justify-center'>
                    <div className='border rounded-md border-blue-800'>
                        <button onClick={() => setType('backend')}
                            className={` rounded-l-md px-10 border-r border-r-blue-800 ${type === 'backend' ? 'bg-sky-500' : ''}`}
                        >Backend</button>
                        <button onClick={() => setType('frontend')}
                            className={`border-r border-r-blue-800 px-10 ${type === 'frontend' ? 'bg-sky-500' : ''}`}
                        >Frontend</button>
                        <button onClick={() => setType('database')}
                            className={`px-10 border-r border-r-blue-800 ${type === 'database' ? 'bg-sky-500' : ''}`}
                        >Database</button>
                        <button onClick={() => setType('devops')}
                            className={`rounded-r-md px-10 ${type === 'devops' ? 'bg-sky-500' : ''}`}
                        >AWS</button>
                    </div>
                </div>
                <div className='flex justify-center p-5'>
                    {
                        type === 'frontend' ?
                            <div className='flex flex-1 justify-between gap-5'>
                                <div className='flex-1 border-r p-5'>
                                    <div className='flex gap-2 items-center justify-between'>React JS <Progress color={'rgb(34, 211, 238)'} bgcolor={'rgba(34, 211, 238, 0.5)'} border={'1px solid rgb(34, 211, 238)'} number={'95%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>React Native <Progress color={'rgb(14, 165, 233)'} bgcolor={'rgba(14, 165, 233, 0.5)'} border={'1px solid rgb(14, 165, 233)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Angular <Progress color={'rgb(244, 63, 94)'} bgcolor={'rgba(244, 63, 94, 0.5)'} border={'1px solid rgb(244, 63, 94)'} number={'60%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Next JS <Progress color={'rgb(139, 92, 246)'} bgcolor={'rgba(139, 92, 246, 0.5)'} border={'1px solid rgb(139, 92, 246)'} number={'80%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Flutter <Progress color={'rgb(59, 130, 246)'} bgcolor={'rgba(59, 130, 246, 0.5)'} border={'1px solid rgb(59, 130, 246)'} number={'50%'} /></div>
                                </div>
                                <div className='flex-1 pl-1  p-5'>
                                    <div className='flex gap-2 items-center justify-between'>Material UI <Progress color={'rgb(37, 99, 235)'} bgcolor={'rgba(37, 99, 235, 0.5)'} border={'1px solid rgb(37, 99, 235)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Tailwind CSS <Progress color={'rgb(51, 153, 255)'} bgcolor={'rgba(51, 153, 255, 0.5)'} border={'1px solid rgb(51, 153, 255)'} number={'85%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>ShadCN <Progress color={'rgb(102, 204, 255)'} bgcolor={'rgba(102, 204, 255, 0.5)'} border={'1px solid rgb(102, 204, 255)'} number={'80%'} /></div>
                                </div>
                            </div>
                            : ""
                    }
                    {
                        type === 'backend' ?
                            <div className='flex flex-1 justify-between gap-5'>
                                <div className='flex-1 border-r p-5'>
                                    <div className='flex gap-2 items-center justify-between'>Node JS <Progress color={'rgb(20, 184, 166)'} bgcolor={'rgba(20, 184, 166, 0.5)'} border={'1px solid rgb(20, 184, 166)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>FastAPI <Progress color={'rgb(0, 148, 133)'} bgcolor={'rgba(0, 148, 133, 0.5)'} border={'1px solid rgb(0, 148, 133)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Django <Progress color={'rgb(4, 120, 87)'} bgcolor={'rgba(4, 120, 87, 0.5)'} border={'1px solid rgb(4, 120, 87)'} number={'70%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Flask <Progress color={'rgb(29, 78, 216)'} bgcolor={'rgba(29, 78, 216, 0.5)'} border={'1px solid rgb(29, 78, 216)'} number={'85%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Uvicorn <Progress color={'rgb(14, 165, 233)'} bgcolor={'rgba(14, 165, 233, 0.5)'} border={'1px solid rgb(14, 165, 233)'} number={'80%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Redis <Progress color={'rgb(236, 72, 153)'} bgcolor={'rgba(236, 72, 153, 0.5)'} border={'1px solid rgb(236, 72, 153)'} number={'80%'} /></div>
                                </div>
                                <div className='flex-1 pl-1  p-5'>
                                    <div className='flex gap-2 items-center justify-between'>Knex JS <Progress color={'rgb(22, 163, 74)'} bgcolor={'rgba(22, 163, 74, 0.5)'} border={'1px solid rgb(22, 163, 74)'} number={'85%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Pydantic <Progress color={'rgb(255, 0, 102)'} bgcolor={'rgba(255, 0, 102, 0.5)'} border={'1px solid rgb(255, 0, 102)'} number={'80%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Gunicorn <Progress color={'rgb(153, 102, 255)'} bgcolor={'rgba(153, 102, 255, 0.5)'} border={'1px solid rgb(153, 102, 255)'} number={'85%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Nginx <Progress color={'rgb(101, 163, 13)'} bgcolor={'rgba(101, 163, 13, 0.5)'} border={'1px solid rgb(101, 163, 13)'} number={'80%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Docker <Progress color={'rgb(51, 102, 255)'} bgcolor={'rgba(51, 102, 255, 0.5)'} border={'1px solid rgb(51, 102, 255)'} number={'85%'} /></div>
                                </div>
                            </div>
                            : ""
                    }
                    {
                        type === 'database' ?
                            <div className='flex flex-1 justify-between gap-5'>
                                <div className='flex-1 p-5'>
                                    <div className='flex gap-2 items-center justify-between'>Postgres SQL <Progress color={'rgb(59, 130, 246)'} bgcolor={'rgba(59, 130, 246, 0.5)'} border={'1px solid rgb(59, 130, 246)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Supabase <Progress color={'rgb(0, 148, 133)'} bgcolor={'rgba(0, 148, 133, 0.5)'} border={'1px solid rgb(0, 148, 133)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Prisma <Progress color={'rgb(236, 72, 153)'} bgcolor={'rgba(236, 72, 153, 0.5)'} border={'1px solid rgb(236, 72, 153)'} number={'70%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>SQL Alchemy <Progress color={'rgb(51, 102, 255)'} bgcolor={'rgba(51, 102, 255, 0.5)'} border={'1px solid rgb(51, 102, 255)'} number={'80%'} /></div>
                                </div>
                                <div className='flex-1 pl-1  p-5'>
                                </div>
                            </div>
                            : ""
                    }
                    {
                        type === 'devops' ?
                            <div className='flex flex-1 justify-between gap-5'>
                                <div className='flex-1 border-r p-5'>
                                    <div className='flex gap-2 items-center justify-between'>CloudFlare <Progress color={'rgb(20, 184, 166)'} bgcolor={'rgba(20, 184, 166, 0.5)'} border={'1px solid rgb(20, 184, 166)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>EC2 <Progress color={'rgb(251, 191, 36)'} bgcolor={'rgba(251, 191, 36, 0.5)'} border={'1px solid rgb(251, 191, 36)'} number={'80%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>CloudWatch <Progress color={'rgb(34, 211, 238)'} bgcolor={'rgba(34, 211, 238, 0.5)'} border={'1px solid rgb(34, 211, 238)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Codepipeline <Progress color={'rgb(59, 130, 246)'} bgcolor={'rgba(59, 130, 246, 0.5)'} border={'1px solid rgb(59, 130, 246)'} number={'85%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>S3 bucket <Progress color={'rgb(99, 102, 241)'} bgcolor={'rgba(99, 102, 241, 0.5)'} border={'1px solid rgb(99, 102, 241)'} number={'98%'} /></div>
                                </div>
                                <div className='flex-1 pl-1  p-5'>
                                    <div className='flex gap-2 items-center justify-between'>Sesclient <Progress color={'rgb(139, 92, 246)'} bgcolor={'rgba(139, 92, 246, 0.5)'} border={'1px solid rgb(139, 92, 246)'} number={'95%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>SQS <Progress color={'rgb(217, 70, 239)'} bgcolor={'rgba(217, 70, 239, 0.5)'} border={'1px solid rgb(217, 70, 239)'} number={'80%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Lambda <Progress color={'rgb(132, 204, 22)'} bgcolor={'rgba(132, 204, 22, 0.5)'} border={'1px solid rgb(132, 204, 22)'} number={'90%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Scheduler <Progress color={'rgb(249, 115, 22)'} bgcolor={'rgba(249, 115, 22, 0.5)'} border={'1px solid rgb(249, 115, 22)'} number={'95%'} /></div>
                                    <div className='flex gap-2 items-center justify-between'>Route 53 <Progress color={'rgb(34, 197, 94)'} bgcolor={'rgba(34, 197, 94, 0.5)'} border={'1px solid rgb(34, 197, 94)'} number={'98%'} /></div>
                                </div>
                            </div>
                            : ""
                    }
                </div>
            </div>
        </div>
    ); */

    const data = [
        {
            "id": "Javascript",
            "label": "Javascript",
            "value": 35,
            "color": "hsl(302, 70%, 50%)"
        },
        {
            "id": "Python",
            "label": "Python",
            "value": 35,
            "color": "hsl(314, 70%, 50%)"
        },
        {
            "id": "Typescript",
            "label": "Typescript",
            "value": 7,
            "color": "hsl(290, 70%, 50%)"
        },
        {
            "id": "HTML",
            "label": "HTML",
            "value": 7,
            "color": "hsl(46, 70%, 50%)"
        },
        {
            "id": "CSS",
            "label": "CSS",
            "value": 5,
            "color": "hsl(28, 70%, 50%)"
        },
        {
            "id": "C++",
            "label": "C++",
            "value": 4,
            "color": "hsl(4, 70%, 50%)"
        },
        {
            "id": "C",
            "label": "C",
            "value": 4,
            "color": "hsl(330, 70%, 50%)"
        },
        {
            "id": "Dart",
            "label": "Dart",
            "value": 3,
            "color": "hsl(30, 70%, 50%)"
        },
    ]

    return (
        <div className='bg-[#ffffff] flex flex-1'>
            <div className='flex-1 flex flex-col gap-5'>
                <div className='flex gap-8'>
                    <div className='flex flex-col gap-3'>
                        <a id='github' className='flex-3 border-2 border-[#f8f8f8] rounded-full p-3 justify-center flex cursor-pointer'>
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
                        <a id='linkedin' className='flex-3 border-2 border-[#f8f8f8] rounded-full p-4 justify-center flex cursor-pointer'>
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
                        <div className='flex-3 border-2 border-[#f8f8f8] rounded-full p-4 justify-center flex cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className='flex-3 border-2 border-[#f8f8f8] rounded-full p-4 justify-center flex cursor-pointer'>
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
                        </div>
                    </div>
                    <div className='flex  w-[400px] bg-[#F8F8F8] rounded-[35px]'>
                        <div className='flex flex-col w-full'>
                            <div className='bg-[#ffffff] border-2 border-[#F8F8F8] rounded-[35px] w-full p-5 flex flex-col gap-3'>
                                <div className='flex flex-1 justify-between items-center text-sm'>
                                    <div className='font-extrabold'>Visa</div>
                                    <div className='p-2 px-4 rounded-full border-2 border-[#F8F8F8]'>Direct Debits</div>
                                </div>
                                <div>
                                    <div className='text-xs text-[#858484]'>Linked to main account</div>
                                    <div className='text-lg font-semibold'>**** 2987</div>
                                </div>
                                <div className='flex flex-1 gap-3 items-center text-sm'>
                                    <div className='w-1/3 text-center py-2 rounded-full bg-[#000000] text-[#F8F8F8]'>Recieve</div>
                                    <div className='w-1/3 text-center py-2 rounded-full bg-[#F8F8F8]'>Send</div>
                                </div>
                            </div>
                            <div className='flex-1 p-5 flex justify-between items-center'>
                                <div>
                                    <div className='text-xs text-[#858484]'>Monthly Regular Fee</div>
                                    <div className='text-lg font-semibold'><span className='text-[#E16349]'>$</span>25.00</div>
                                </div>
                                <div className='text-[#E16349] text-sm'>Edit</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  w-[400px] bg-[#F8F8F8] rounded-[35px]'>
                        <div className='flex flex-col w-full'>
                            <div className='bg-[#ffffff] border-2 border-[#F8F8F8] rounded-[35px] w-full p-5 flex flex-col gap-3'>
                                <div className='flex flex-1 justify-between items-center text-sm'>
                                    <div className='p-3 bg-[#f8f8f8] rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                                        </svg>
                                    </div>
                                    <div className='p-2 px-4 rounded-full border-2 border-[#F8F8F8]'>Weekly</div>
                                </div>

                                <div>
                                    <div className='text-xs text-[#858484]'>Total Income</div>
                                    <div className='text-lg font-semibold'><span className='text-[#E16349]'>$</span>23,197.80</div>
                                </div>
                            </div>
                            <div className='w-full p-5 flex flex-col gap-3'>
                                <div className='flex flex-1 justify-between items-center text-sm'>
                                    <div className='p-3 bg-[#ffffff] rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                        </svg>

                                    </div>
                                    <div className='p-2 px-4 rounded-full border border-[#D0D0D0]'>Weekly</div>
                                </div>
                                <div className='flex flex-1 justify-between items-center'>
                                    <div>
                                        <div className='text-xs text-[#858484]'>Total Paid</div>
                                        <div className='text-lg font-semibold'><span className='text-[#E16349]'>$</span>8,425.80</div>
                                    </div>
                                    <div className='text-[#E16349] text-sm'>View Chart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className="w-32 h-32 bg-[#f8f8f8] rounded-full flex flex-col justify-center items-center text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            OWASP
                        </div>
                        <div className="w-32 h-32 bg-[#000000] rounded-full flex flex-col justify-center items-center text-sm text-[#D0D0D0]">
                            <div className='text-[#ffffff] font-semibold text-lg'>36%</div>
                            <div>Growth Rate</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex h-[350px]  w-[350px] bg-[#F8F8F8] rounded-[35px] p-5'>
                        <div className='flex flex-col gap-5 w-full'>
                            <div className='flex justify-between items-center text-sm'>
                                <div className='font-bold'>Annual Profits</div>
                                <div className='p-2 px-4 rounded-full border border-[#D0D0D0]'>Direct Debits</div>
                            </div>
                            <div className='flex-1 flex justify-center rounded-lg'>
                                <ResponsivePieCanvas
                                    data={data}
                                    innerRadius={0.7}
                                    padAngle={0.7}
                                    cornerRadius={3}
                                    activeOuterRadiusOffset={8}
                                    isInteractive={false}
                                    colors={{ scheme: 'oranges' }}
                                    borderColor={{
                                        from: 'color',
                                        modifiers: [
                                            [
                                                'darker',
                                                0.6
                                            ]
                                        ]
                                    }}
                                    enableArcLinkLabels={false}
                                    arcLinkLabelsSkipAngle={10}
                                    arcLinkLabelsTextColor="#ffffff"
                                    arcLinkLabelsThickness={2}
                                    arcLinkLabelsColor={{ from: 'color' }}
                                    arcLabelsSkipAngle={10}
                                    arcLabelsTextColor="#333333"
                                    enableArcLabels={false}
                                    defs={[
                                        {
                                            id: 'dots',
                                            type: 'patternDots',
                                            background: 'inherit',
                                            color: 'rgba(0, 0, 0, 0.9)',
                                            size: 4,
                                            padding: 1,
                                            stagger: true
                                        },
                                        {
                                            id: 'lines',
                                            type: 'patternLines',
                                            background: 'inherit',
                                            color: 'rgba(0, 0, 0, 0.9)',
                                            rotation: -45,
                                            lineWidth: 6,
                                            spacing: 10
                                        }
                                    ]}
                                    fill={[
                                        {
                                            match: {
                                                id: 'ruby'
                                            },
                                            id: 'dots'
                                        },
                                        {
                                            match: {
                                                id: 'c'
                                            },
                                            id: 'dots'
                                        },
                                        {
                                            match: {
                                                id: 'go'
                                            },
                                            id: 'dots'
                                        },
                                        {
                                            match: {
                                                id: 'python'
                                            },
                                            id: 'lines'
                                        },
                                        {
                                            match: {
                                                id: 'scala'
                                            },
                                            id: 'lines'
                                        },
                                        {
                                            match: {
                                                id: 'lisp'
                                            },
                                            id: 'lines'
                                        },
                                        {
                                            match: {
                                                id: 'elixir'
                                            },
                                            id: 'lines'
                                        },
                                        {
                                            match: {
                                                id: 'javascript'
                                            },
                                            id: 'lines'
                                        }
                                    ]}
                                    legends={[]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-xl font-bold">Activity Manager</h1>
                            <div className="flex space-x-2">
                                <button className="bg-gray-200 p-2 rounded-full">
                                    <i className="fas fa-filter"></i> {/* Placeholder for the filter icon */}
                                </button>
                                <button className="bg-gray-200 p-2 rounded-full">
                                    <i className="fas fa-sliders-h"></i> {/* Placeholder for the settings icon */}
                                </button>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Search in activities ..."
                                className="w-full p-2 rounded-lg border border-gray-300"
                            />
                            <i className="fas fa-search absolute top-3 right-3 text-gray-400"></i> {/* Placeholder for search icon */}
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-gray-200 px-4 py-2 rounded-full">Team</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-full">Insights</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-full">Today</button>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <div className="text-2xl font-bold text-orange-500">$43.20 <span className="text-sm text-gray-500">USD</span></div>
                                <div className="mt-2">
                                    <div className="h-16 bg-gray-100 rounded-lg relative">
                                        {/* Add your bar chart visualization here */}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="font-bold">Business plans</h2>
                                <div className="mt-2">
                                    <select className="w-full p-2 bg-gray-100 rounded-lg border border-gray-300">
                                        <option>Bank loans</option>
                                        <option>Accounting</option>
                                        <option>HR management</option>
                                    </select>
                                </div>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="font-bold">Wallet Verification</h2>
                                <p className="text-gray-500 text-sm mt-2">Enable 2-step verification to secure your wallet.</p>
                                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">Enable</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-3'>

            </div>
        </div>
    )
}

export default Languages;
