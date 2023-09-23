import React from 'react'

const Timeline = () => {
    return (
        <div>
            {/* <div className='border-b border-white/5'>
                <div className='text-center text-white mx-auto max-w-[1255px] py-10 px-12'>
                    <h1 className='text-4xl font-bold'>TimeLine</h1>
                    <p className='w-full md:w-[346px] mx-auto pt-3'>Here is the breakdown of the time we anticipate
                        using for the upcoming event.</p>
                    <div className='flex flex-col items-start md:items-center mt-[56px] md:mt-[91px]'>
                        <div className='flex flex-col items-center mt-7 relative'>
                            <div className='w-[2px] md:w-[4px] h-[77px] md:h-[137px] bg-[#D434FE]'></div>
                            <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                1
                            </div>
                            <div className='text-left absolute left-[36px] md:left-auto md:right-[98px] w-[390px]  md:w-[30vw] md:bottom-[4px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px]  md:text-right'>Hackathon Announcement</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] mt-3 md:text-right'>
                                    The getlinked tech hackathon 1.0 is formally announced
                                    to the general public and teams begin to get ready to register
                                </p>
                            </div>


                            <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-[98px] bottom-0'>November 18, 2023</h2>
                        </div>

                        <div className='flex flex-col items-center mt-7 relative'>
                            <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                            <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                2
                            </div>

                            <div className='text-left absolute left-[36px]  md:left-[98px] w-[390px]  md:w-[30vw] md:bottom-[-20px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px] '>Teams Registration begins</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] mt-3'>
                                    Interested teams can now show their interest in the
                                    getlinked tech hackathon 1.0 2023 by proceeding to register
                                </p>
                            </div>


                            <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-auto md:right-[98px] bottom-0'>November 18, 2023</h2>
                        </div>

                        <div className='flex flex-col items-center mt-7 relative'>
                            <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                            <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                3
                            </div>
                            <div className='text-left absolute left-[36px] md:left-auto md:right-[98px] w-[390px]  md:w-[30vw] md:bottom-[4px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px]  md:text-right'>Teams Registration ends</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] mt-3 md:text-right'>
                                    Interested Participants are no longer Allowed to
                                    register
                                </p>
                            </div>


                            <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-[98px] bottom-0'>November 18, 2023</h2>
                        </div>

                        <div className='flex flex-col items-center mt-7 relative'>
                            <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                            <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                4
                            </div>
                            <div className='text-left absolute left-[36px]  md:left-[98px] w-[390px]  md:w-[30vw] md:bottom-[-20px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px] '>Announcement of the accepted teams
                                    and ideas</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] mt-3'>
                                    All teams whom idea has been accepted into getlinked tech
                                    hackathon 1.0 2023 are formally announced
                                </p>
                            </div>


                            <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-auto md:right-[98px] bottom-0'>November 18, 2023</h2>
                        </div>

                        <div className='flex flex-col items-center mt-7 relative'>
                            <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                            <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                5
                            </div>
                            <div className='text-left absolute left-[36px] md:left-auto md:right-[98px] w-[390px] md:w-[30vw] md:bottom-[4px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px]  md:text-right'>Getlinked Hackathon 1.0 Offically Begins</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] mt-3 md:text-right'>
                                    Accepted teams can now proceed to build their
                                    ground breaking skill driven solutions
                                </p>
                            </div>


                            <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-[98px] bottom-0'>November 18, 2023</h2>
                        </div>

                        <div className='flex flex-col items-center mt-7 relative'>
                            <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                            <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                6
                            </div>
                            <div className='text-left absolute left-[36px]  md:left-[98px] w-[390px]  md:w-[30vw] md:bottom-[-20px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px] '>Demo Day</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] mt-3'>
                                    Teams get the opportunity to pitch their projects to judges.
                                    The winner of the hackathon will also be announced on
                                    this day
                                </p>
                            </div>


                            <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-auto md:right-[98px] bottom-0'>November 18, 2023</h2>
                        </div>



                    </div>
                </div>

            </div>


 */}











            <div className='border-b border-white/5'>
                <div className='text-center text-white mx-auto max-w-[1255px] py-10 px-12'>
                    <h1 className='text-4xl font-bold'>TimeLine</h1>
                    <p className='w-full md:w-[346px] mx-auto pt-3'>Here is the breakdown of the time we anticipate
                        using for the upcoming event.</p>
                    <div className='flex flex-col items-start md:items-center mt-[56px] md:mt-[91px]'>
                        <div className='flex w-full justify-start md:justify-center relative mt-7'>
                            <div className='flex flex-col items-center relative'>
                                <div className='w-[2px] md:w-[4px] h-[77px] md:h-[137px] bg-[#D434FE]'></div>
                                <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                    1
                                </div>


                                <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-[123px] bottom-0'>November 18, 2023</h2>
                            </div>
                            <div className='text-left absolute left-[36px] right-0 md:left-auto md:right-[calc(50%+86px)] md:w-[calc(50%-86px)] md:bottom-[4px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px]  md:text-right'>Hackathon Announcement</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] md:text-right'>
                                    The getlinked tech hackathon 1.0 is formally announced
                                    to the general public and teams begin to get ready to register
                                </p>
                            </div>

                        </div>

                        <div className='flex w-full justify-start md:justify-center relative mt-7'>
                            <div className='flex flex-col items-center relative'>
                                <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                                <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                    2
                                </div>
                                <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-auto md:right-[98px] bottom-0'>November 18, 2023</h2>
                            </div>
                            <div className='text-left absolute left-[36px]  md:left-[calc(50%+98px)] right-0 md:w-[calc(50%-98px)] md:bottom-[-20px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px] '>Teams Registration begins</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%]'>
                                    Interested teams can now show their interest in the
                                    getlinked tech hackathon 1.0 2023 by proceeding to register
                                </p>
                            </div>
                        </div>

                        <div className='flex w-full justify-start md:justify-center relative mt-7'>
                            <div className='flex flex-col items-center relative'>
                                <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                                <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                    3
                                </div>



                                <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-[123px] bottom-0'>November 18, 2023</h2>
                            </div>
                            <div className='text-left absolute left-[36px] md:left-auto right-0 md:right-[calc(50%+86px)] md:w-[calc(50%-86px)] md:bottom-[4px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px]  md:text-right'>Teams Registration ends</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] md:text-right'>
                                    Interested Participants are no longer Allowed to
                                    register
                                </p>
                            </div>
                        </div>

                        <div className='flex w-full justify-start md:justify-center relative mt-7'>
                            <div className='flex flex-col items-center relative'>
                                <div className='w-[2px] md:w-[4px] h-[90px] md:h-[86px] bg-[#D434FE]'></div>
                                <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                    4
                                </div>



                                <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-auto md:right-[98px] bottom-0'>November 18, 2023</h2>
                            </div>
                            <div className='text-left absolute left-[36px]  md:left-[calc(50%+98px)] right-0 md:w-[calc(50%-98px)] md:bottom-[-20px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px] '>Announcement of the accepted teams
                                    and ideas</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%]'>
                                    All teams whom idea has been accepted into getlinked tech
                                    hackathon 1.0 2023 are formally announced
                                </p>
                            </div>
                        </div>

                        <div className='flex w-full justify-start md:justify-center relative mt-7'>
                            <div className='flex flex-col items-center relative'>
                                <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                                <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                    5
                                </div>



                                <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-[123px] bottom-0'>November 18, 2023</h2>
                            </div>
                            <div className='text-left absolute left-[36px] md:left-auto right-0 md:right-[calc(50%+86px)] md:w-[calc(50%-86px)] md:bottom-[4px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px]  md:text-right'>Getlinked Hackathon 1.0 Offically Begins</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%] md:text-right'>
                                    Accepted teams can now proceed to build their
                                    ground breaking skill driven solutions
                                </p>
                            </div>
                        </div>


                        <div className='flex w-full justify-start md:justify-center relative mt-7'>
                            <div className='flex flex-col items-center relative'>
                                <div className='w-[2px] md:w-[4px] h-[77px] md:h-[86px] bg-[#D434FE]'></div>
                                <div className='w-[19.32px] md:w-[53px] h-[19.32px] md:h-[53px] rounded-full bg-circular-gradient mt-[4.6px] md:mt-[11px] flex items-center justify-center text-[12px] md:text-[24px] font-bold '>
                                    6
                                </div>



                                <h2 className='text-left text-[#D434FE] text-[12px] md:text-[24px] absolute  w-[159px] md:w-[236px] left-[36px] md:left-auto md:right-[98px] bottom-0'>November 18, 2023</h2>
                            </div>
                            <div className='text-left absolute left-[36px] md:left-[calc(50%+98px)] right-0 md:w-[calc(50%-98px)] md:bottom-[-20px]'>
                                <h2 className='text-[#D434FE] text-[12px] md:text-[24px] '>Demo Day</h2>
                                <p className='text-[12px] md:text-[14px] font-normal leading-[159.9%] md:leading-[170.9%]'>
                                    Teams get the opportunity to pitch their projects to judges.
                                    The winner of the hackathon will also be announced on
                                    this day
                                </p>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </div>

    )
}

export default Timeline