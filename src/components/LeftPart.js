import React from 'react'
import { Body1, Card, CardContent, CardHeader, Fab, H5, Subtitle2 } from 'ui-neumorphism'
import {MdInterests} from 'react-icons/md'
import {FaLanguage,FaPhoneAlt,FaAddressCard,FaRunning,FaPencilAlt,FaHandPointRight} from 'react-icons/fa'
import {GrCertificate, GrContactInfo,GrMail} from "react-icons/gr"
import {CgGym} from 'react-icons/cg'
import {GiLoveSong} from 'react-icons/gi'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
const LeftPart = () => {
  return (
    <div style={{width:"30%",padding:"1rem"}}>
        <Card>
            <CardContent style={{padding:"1rem 0"}}>
                <Card flat bordered>
                    <CardContent>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>  
                            <Fab><GrContactInfo fontSize={22}/></Fab>
                            <H5  style={{color:"#FD5F07",fontWeight:"600",marginLeft:"1rem"}}>CONTACT</H5>
                        </div>
                        <br/>
                        <Card inset style={{padding:"0.8rem"}} ><FaPhoneAlt style={{fontSize:"1.2rem"}} /><Body1>9000101827</Body1></Card>
                        <br/>
                        <Card inset style={{padding:"0.8rem"}} ><GrMail style={{fontSize:"1.2rem"}} /><Body1>akhil_murikipudi@persistent.com</Body1></Card>
                        <br/>
                        <Card inset style={{padding:"0.8rem"}} ><FaAddressCard style={{fontSize:"1.2rem"}} /><Body1>srinivasa colony, piduguralla, Andhra Pradesh, 522413</Body1></Card>
                        
                    </CardContent>
                </Card>
                <br/>
                <Card flat bordered>
                    <CardContent>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                            <Fab>
                                <GrCertificate fontSize={22}/>
                            </Fab>
                            <H5 style={{color:"#FD5F07",fontWeight:"600",marginLeft:"1rem"}}>CERTIFICATIONS</H5>
                        </div>
                        <br/>
                        <div style={{lineHeight:"2"}}>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"4px"}}>
                            <AiOutlineSafetyCertificate/><Subtitle2>The Joy of Computing Using Python - NPTEL</Subtitle2>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"4px"}}>
                            <AiOutlineSafetyCertificate/><Subtitle2>Python Data Structures - Coursera</Subtitle2>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"4px"}}>
                            <AiOutlineSafetyCertificate/><Subtitle2>Web Designing using ReactJs -APSSDC</Subtitle2>
                        </div>
                        </div>
                    </CardContent>
                </Card>
                <br/>
                <Card flat bordered>
                    <CardContent>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                            <Fab>
                            <MdInterests fontSize={22}/>
                            </Fab>
                            <H5 style={{color:"#FD5F07",fontWeight:"600",marginLeft:"1rem"}}>
                            INTERESTS & HOBBIES</H5>
                           
                    </div>
                    <br/>
                        <div  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                            <div>
                            <Card inset style={{padding:"10px"}}><FaRunning/><Body1>Running</Body1></Card>
                            <br/>
                            <Card inset style={{padding:"10px"}}><GiLoveSong/><Body1>Listening Music/Dance</Body1></Card>
                            </div>
                       
                            <div>
                            <Card inset style={{padding:"10px"}}><CgGym/><Body1>GYM</Body1></Card>
                            <br/>
                            <Card inset style={{padding:"10px"}}><FaPencilAlt/><Body1>Portrait Diagrams</Body1></Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <br/>
                <Card flat bordered>
                    <CardContent>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                            <Fab><FaLanguage fontSize={22} /></Fab>
                            <H5  style={{color:"#FD5F07",fontWeight:"600",marginLeft:"1rem"}}>LANGUAGES</H5>
                        </div>
                        <br/>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>&nbsp;&nbsp;<FaHandPointRight/><Body1>&nbsp;English</Body1></div>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>&nbsp;&nbsp;<FaHandPointRight/><Body1>&nbsp;Telugu</Body1></div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    </div>
  )
}

export default LeftPart