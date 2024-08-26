import { ResponsivePieCanvas } from '@nivo/pie'
import React, { useState } from "react";

function Languages() {
    const [type, setType] = useState('backend')

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
    );
}

export default Languages;
