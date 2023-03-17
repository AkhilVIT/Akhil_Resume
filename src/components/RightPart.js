import React from 'react'
import { Body1, Card, CardContent, CardHeader, Chip, Divider, Fab, H5, Subtitle2, Table } from 'ui-neumorphism'
import {AiFillHtml5,AiOutlineAntDesign} from 'react-icons/ai'
import { FaCss3, FaReact,FaJava ,FaPython, FaProjectDiagram, FaArrowRight, FaBookReader, FaCaretRight} from 'react-icons/fa'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {TbBrandNextjs, TbBrandRedux,TbBrandMysql,TbBrandTypescript} from 'react-icons/tb'
import {SiDjango,SiMui,SiMongodb} from 'react-icons/si'
import { GiSkills } from 'react-icons/gi'
function createItem(education,institution,year,location,marks) {
    return { education,institution,year,location,marks }
  }
  
  const headers = [
    { text: 'Education', align: 'left', value: 'education' },
    { text: 'Institution', align: 'right', value: 'institution' },
    { text: 'Year of Passing', align: 'right', value: 'year' },
    { text: 'Location', align: 'right', value: 'location' },
    { text: 'Percentage / GPA', align: 'right', value: 'marks' }
   
  ]
  
  const items = [
    createItem('Bachelor of Technology (B.Tech) in Computer Science and Engineering', "Vishnu Institute of Technology", "2022","Bhimavaram" ,'7.25'),
    createItem('Intermediate (MPC)', "Sri Chaitanya Jr College", "2018", "Vijayawada",'9.13'),
    createItem('Secondary School Certificate (SSC)', "Sri Chaitanya High School", "2016", "Piduguralla",'8.8'),
  ]
  
const RightPart = () => {
 
 return (
    <div >
        <Card flat>
            <CardContent>
                <CardHeader style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"15px"}}><Fab color={"#FD5F07"}><GiSkills style={{color:"#FD5F07"}} fontSize={22}/></Fab><H5 style={{color:"#FD5F07",fontWeight:"600"}}>SKILLS</H5></CardHeader>
                <Card bordered style={{padding:"1rem"}}>
                <Card rounded inset style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"20px"}}>
                        <Card inset dark rounded style={{width:'fit-content',padding:"10px"}}>
                            Frontend Technology
                        </Card>
                        <div style={{display:"flex",gap:"10px"}}>
                            <Chip size='medium' prepend={<AiFillHtml5/>} >HTML</Chip>
                            <Chip size='medium' prepend={<FaCss3/>} >CSS</Chip>
                            <Chip size='medium' prepend={<FaReact/>} >React</Chip>
                            <Chip size='medium' prepend={<TbBrandRedux/>} >Redux</Chip>
                            <Chip size='medium' prepend={<TbBrandNextjs/>} >NextJs</Chip>
                        </div>
                </Card>
                <br/>
                <Card rounded inset style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"20px"}}>
                        <Card inset dark rounded style={{width:'fit-content',padding:"10px"}}>
                          Development Languages
                        </Card>
                        <div style={{display:"flex",gap:"10px"}}>
                            <Chip size='medium' prepend={<FaJava/>} >Java</Chip>
                            <Chip size='medium' prepend={<FaPython/>} >Python</Chip>
                            <Chip size='medium' prepend={<IoLogoJavascript/>} >JavaScript</Chip>
                            <Chip size='medium' prepend={<TbBrandTypescript/>} >TypeScipt</Chip>
                        </div>
                </Card>
                <br/>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:'20px'}}>
                <Card rounded inset style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"20px",paddingRight:"10px"}}>
                        <Card inset dark rounded style={{width:'fit-content',padding:"10px"}}>
                            Backend Technology
                        </Card>
                        <div style={{display:"flex",gap:"10px"}}>
                            <Chip size='medium' prepend={<SiDjango/>} >Django</Chip>
                            <Chip size='medium' prepend={<IoLogoNodejs/>} >Nodejs</Chip>
                        </div>
                        
                </Card>
                <Card rounded inset style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"20px",paddingRight:"10px"}}>
                        <Card inset dark rounded style={{width:'fit-content',padding:"10px"}}>
                          Database
                        </Card>
                        <div style={{display:"flex",gap:"10px"}}>
                            <Chip size='medium' prepend={<TbBrandMysql/>} >MySql</Chip>
                            <Chip size='medium' prepend={<SiMongodb/>} >MongoDB</Chip>
                        </div>
                </Card>
                </div>
                <br/>
                <Card rounded inset style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"20px"}}>
                        <Card inset dark rounded style={{width:'fit-content',padding:"10px"}}>
                          UI Libraries
                        </Card>
                        <div style={{display:"flex",gap:"10px"}}>
                            <Chip size='medium' prepend={<SiMui/>} >Material UI</Chip>
                            <Chip size='medium' prepend={<AiOutlineAntDesign/>} >antd</Chip>
                        </div>
                </Card>
                
                </Card>
            </CardContent>
        </Card>
       <br/>
        <Divider elevated dense/>
        <Card flat>
            <CardContent>
                <CardHeader  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"15px"}}><Fab style={{color:"#FD5F07"}}><FaProjectDiagram style={{color:"#FD5F07"}} fontSize={22}/></Fab><H5 style={{color:"#FD5F07",fontWeight:"600"}}>PROJECTS</H5></CardHeader>
                <Card bordered style={{padding:"1rem"}}>
                    <H5>Event Club</H5>
                    <Subtitle2 secondary>15/2023 - Present</Subtitle2>
                    <br/>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Designed and developed an event club website from scratch, allowing organizations to host local and global events.</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Implemented user access levels including super admin, admin, organizer, and user to ensure appropriate permissions for all users.</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Developed an automated mail system that sends event creation notifications to all users, ensuring that they are kept informed at all times.</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Creating a personalized mail system based on users' interests and skills, utilizing Google Analytics to target and engage users effectively.</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Implementing user feedback and analytics tools to continually improve the website's performance and user experience.</Body1></div>
                </Card>
                <br/>
                <Card bordered style={{padding:"1rem"}}>
                    <H5>Elixir Commune</H5>
                    <Subtitle2 secondary>10/2020 - 12/2020</Subtitle2>
                    <br/>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Created and launched a monthly e-magazine focused on the latest technologies, startup stories, and informative news etc.</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Designed and developed a visually appealing flipbook format to enhance user experience</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Produced high-quality content, including articles, interviews, and reviews, to educate and inform readers</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Built a strong online presence and engaged with the community through social media and other channels</Body1></div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",gap:"3px"}}><FaCaretRight style={{marginTop:"4px"}}/><Body1>Managed and collaborated with a team of writers, editors, and designers to ensure timely and accurate delivery of content</Body1></div>
                </Card>
            </CardContent>
        </Card>
       <br/>
        <Divider elevated dense/>
        <Card flat>
            <CardContent>
                <CardHeader  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"15px"}}><Fab style={{color:"#FD5F07"}}><FaBookReader style={{color:"#FD5F07"}} fontSize={22}/></Fab><H5 style={{color:"#FD5F07",fontWeight:"600"}}>Education</H5></CardHeader>
                <Table style={{whiteSpace:"normal"}} items={items} headers={headers} />
            </CardContent>
        </Card>
    </div>
  )
}

export default RightPart