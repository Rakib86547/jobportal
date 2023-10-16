import { Box, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';

const About = () => {

    return (
        <div className='py-[50px]'>

            <Box sx={{
                maxWidth: '70%',
                margin: 'auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '30px'
                }}>
                    <Box>
                        <CountUp
                            start={0}
                            end={4}
                            delay={1}
                            suffix='M'
                        >
                            {({ countUpRef }) => (
                                <div className='text-[45px] font-medium'>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <span>4 million daily active users</span>
                    </Box>

                    <Box>
                        <CountUp
                            start={0}
                            end={12}
                            delay={1}
                            suffix='K'
                        >
                            {({ countUpRef }) => (
                                <div className='text-[45px] font-medium'>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <span>Over 12k open job positions</span>
                    </Box>
                    <Box>
                        <CountUp
                            start={0}
                            end={20}
                            delay={1}
                            suffix='M'
                        >
                            {({ countUpRef }) => (
                                <div className='text-[45px] font-medium'>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <span>Over 20 million stories shared</span>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h4' sx={{ marginBottom: '20px', fontWeight: 500 }}>About Us</Typography>
                    <Typography>
                        Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.
                        <br /> <br />
                        Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                marginTop: '50px',
                padding: '50px 0'
            }}>
                <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                    <Typography variant='h4'>How It Works?</Typography>
                    <span>Job for anyone, anywhere</span>
                </Box>

                <Box className='work' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '30px'
                }}>
                    <Box sx={{
                        borderRadius: '8px',
                        padding: '50px 44px 60px',
                        '&:hover': { boxShadow: '0 0 30px rgba(64,79,104,.1)' }
                    }}
                    >
                        <img className="m-auto mb-[35px]"  src='https://i.ibb.co/C6xzvrh/work-1.webp' alt='work' />
                        <Typography variant='h6' sx={{marginBottom: '10px'}}>Free Resume Assessments</Typography>
                        <Typography>Employers on average spend 31 seconds scanning resumes to identify potential matches.</Typography>
                    </Box>

                    <Box sx={{
                        borderRadius: '8px',
                        padding: '50px 44px 60px',
                        '&:hover': { boxShadow: '0 0 30px rgba(64,79,104,.1)' }
                    }}
                    >
                        <img className="m-auto mb-[35px]" src='https://i.ibb.co/RY45kwk/work-2.webp' alt='work' />
                        <Typography variant='h6' sx={{marginBottom: '10px'}}>Job Fit Scoring</Typography>
                        <Typography>Employers on average spend 31 seconds scanning resumes to identify potential matches.</Typography>
                    </Box>

                    <Box sx={{
                        borderRadius: '8px',
                        padding: '50px 44px 60px',
                        '&:hover': { boxShadow: '0 0 30px rgba(64,79,104,.1)' }
                    }}>
                        <img className="m-auto mb-[35px]" src='https://i.ibb.co/3Cz5ZZh/work-3.webp' alt='work' />
                        <Typography variant='h6' sx={{marginBottom: '10px'}}>Help Every Step of the Way</Typography>
                        <Typography>Employers on average spend 31 seconds scanning resumes to identify potential matches.</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default About;