import React from 'react'
import { Body1, Card, CardContent, H3, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'

const ProfileSummary = () => {
  return (
    <Card style={{padding:"1rem",margin:"1rem"}}>
        <CardContent style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
        }}>
            <Card bordered={true} elevation={2} inset={true} style={{margin:"0 4rem",padding:"10px",borderRadius:"50%",width:"fit-content"}}>
            <Card bordered={true} elevation={4} style={{
                background:"url(https://media.licdn.com/dms/image/C5603AQHvFPndMzEHOA/profile-displayphoto-shrink_800_800/0/1634666484187?e=2147483647&v=beta&t=cCuYWeeEEE8Z5NV9-SYq8mV8jCGj3Mf1Efv1pLYPCX0)",
                height:"150px",
                borderRadius:"50%",
                width:"150px",
                backgroundPosition:'center',
                backgroundRepeat:"none",
                backgroundSize:"cover",
                }}>
            </Card>
            </Card>
            <Card flat={true} style={{textAlign:"right"}}>
                <H4 style={{color:"#FD5F07"}}>Akhil Murikipudi</H4>
                <H5>Software Engineer</H5>
                <Body1 secondary>A tech-enthusiast willing to secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution towards growth of the organization.</Body1>
            </Card>
        </CardContent>
    </Card>
  )
}

export default ProfileSummary