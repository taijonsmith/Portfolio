import React from 'react';
import './css/profile_home.css';
import resume from '../resources/pdf/TaiJon Smith Resume.pdf';
import html_icon from '../resources/images/icons8-html-5.svg';
import css_icon from '../resources/images/icons8-css3.svg';
import javascript_icon from '../resources/images/icons8-javascript.svg';
import python_icon from '../resources/images/icons8-python.svg';
import node_icon from '../resources/images/icons8-nodejs.svg';
import mui_icon from '../resources/images/icons8-material-ui.svg';
import git_icon from '../resources/images/icons8-git.svg';
import react_icon from '../resources/images/React-logo512.png';
import redux_icon from '../resources/images/icons8-redux.svg';
import mysql_icon from '../resources/images/icons8-mysql-logo.svg';
import postgres_icon from '../resources/images/icons8-postgresql.svg';
import linux_icon from '../resources/images/icons8-linux-48.png';
import polymer_icon from '../resources/images/icons8-polymer.svg';
import vue_icon from '../resources/images/icons8-vue-js.svg';
import mssql_icon from '../resources/images/icons8-microsoft-sql-server.svg';
import mongodb_icon from '../resources/images/icons8-mongodb.svg';
import docker_icon from '../resources/images/icons8-docker.svg';
import aws_icon from '../resources/images/icons8-amazon-web-services.svg';
import google_icon from '../resources/images/icons8-google-cloud.svg';
import eth_icon from '../resources/images/icons8-ethereum.svg';
import csharp_icon from '../resources/images/icons8-c-sharp-logo.svg';
import c_icon from '../resources/images/icons8-c-programming.svg';
import java_icon from '../resources/images/icons8-java.svg';
import swift_icon from '../resources/images/icons8-swift.svg';
import taijon from '../resources/images/taijon.jpg';
import BuildIcon from '@material-ui/icons/Build';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import FaceIcon from '@material-ui/icons/Face';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';


export default function ProfileHome() {
    return (
        <div id="profile_home">
            <div className="avatar_container">
                <Avatar className="avatar" alt="TaiJon Smith" src={taijon} />
            </div>
            <Typography className="description" variant="h5">TaiJon Smith</Typography>
            <Typography className="description" variant="h6">Full Stack Web Developer</Typography>
            <div className="grouped">
                <Card className="card" raised>
                    <Typography className="flex-container content_header" variant="h6"><FaceIcon className="icon" />About Me</Typography>
                    <div className="card_body">
                        <Typography className="about_info">
                            Age: 24
                        </Typography>
                        <Typography className="about_info">
                            Hometown: Louisville, KY
                        </Typography>
                        <Typography className="about_info">
                            Hobbies: 
                        </Typography>
                        <Typography className="about_info">
                            • Creating Progressive Web Apps
                        </Typography>
                        <Typography className="about_info">
                            • Producing, Mixing and Mastering Music via DAWs
                        </Typography>
                        <Typography className="about_info">
                            • Stock and Crypto Investing
                        </Typography>
                        <div className="button_container">
                            <Button variant="contained" color="primary" href={resume} target="_blank">
                                View Resume
                            </Button>
                        </div>
                    </div>
                    
                </Card>
                <Card className="card" raised>
                    <Typography className="flex-container content_header"><MenuBookIcon className="icon" />Education</Typography>
                    <div className="card_body">
                        <Typography className="about_info">
                        • J.B. Speed School of Engineering, University of Louisville
                        </Typography>
                        <Box fontStyle="italic">
                            <Typography className="about_info">
                            Bachelor of Science in Computer Science and Engineering (2015 – 2020)
                            </Typography>
                        </Box>
                        <Typography className="about_info">
                        • Saint Xavier High School (2011 – 2015)
                        </Typography>
                    </div>
                </Card>
            </div>
            <Card className="card" raised>
                <Typography className="flex-container content_header" variant="h6"><WorkIcon className="icon" />Work History</Typography>
                <div className="card_body">
                    <Box fontWeight="fontWeightBold">
                        <Typography className="work_header" variant="h6">
                            FacilityONE Technologies
                        </Typography>
                    </Box>
                    <Box fontStyle="italic">
                        <Typography className="work_date">
                            Full Stack Web Developer • May 2017 - August 2019
                        </Typography>
                    </Box>
                    
                    <Typography className="work_info">
                    • Worked on the development of the company’s web application (client and server side)
                    </Typography>
                    <Typography className="work_info">
                    • Helped migrate features and data from their legacy systems onto the web app
                    </Typography>
                    <Typography className="work_info">
                    • Worked in Agile development cycle (using JIRA) while collaborating with other co-ops and senior developers on individual and team assignments in a startup-sized environment
                    </Typography>
                    <Typography className="work_info">
                    • Used Polymer.js library and Material Design guidelines for creating web components
                    </Typography>
                    <Typography className="work_info">
                    • Responsible for making sure components were up to date, easy to use and tested across multiple devices and browsers, ensuring optimal UX for customers and users
                    </Typography>
                    <Typography className="work_info">
                    • Worked in creating unit/integration testing and performing manual tests for application features
                    </Typography>
                    <Typography className="work_info">
                    • Implemented various feature requests, enhancements and bug fixes using standard debugging methods
                    </Typography>
                    <Typography className="work_info">
                    • Used Python to build REST APIs, connect to 3rd party APIs and create internal scripts
                    </Typography>
                    <Typography className="work_info">
                    • Created and implemented database models and schemas
                    </Typography>
                    <Typography className="work_info">
                    • Worked in creating scripts for multiple automation processes
                    </Typography>
                </div>
            </Card>
            <Card className="card" raised>
                <Typography className="flex-container content_header" variant="h6"><BuildIcon className="icon" />Skills</Typography>
                <Typography className="skills_header" variant="subtitle1">Top Skills</Typography>
                <div className="language_container card_body">
                    <img src={html_icon} className="language_icon" alt="HTML" title="HTML" />
                    <img src={css_icon} className="language_icon" alt="CSS" title="CSS" />
                    <img src={javascript_icon} className="language_icon" alt="JavaScript" title="JavaScript" />
                    <img src={react_icon} className="language_icon" alt="React" title="React" />
                    <img src={redux_icon} className="language_icon" alt="Redux" title="Redux" />
                    <img src={mui_icon} className="language_icon" alt="Material-UI" title="Material-UI" />
                    <img src={node_icon} className="language_icon" alt="NodeJS" title="NodeJS" />
                    <img src={python_icon} className="language_icon" alt="Python" title="Python" />
                    <img src={postgres_icon} className="language_icon" alt="PostgreSQL" title="PostgreSQL" />
                    <img src={mysql_icon} className="language_icon" alt="PostgreSQL" title="MySQL" />
                    <img src={linux_icon} className="language_icon" alt="Linux" title="Linux" />
                    <img src={git_icon} className="language_icon" alt="Git" title="Git" />
                </div>
                <Typography className="skills_header" variant="subtitle1">Exposure</Typography>
                <div className="language_container card_body">
                    <img src={polymer_icon} className="language_icon" alt="Polymer" title="Polymer" />
                    <img src={vue_icon} className="language_icon" alt="Vue" title="Vue" />
                    <img src={mssql_icon} className="language_icon" alt="SQL Server" title="SQL Server" />
                    <img src={mongodb_icon} className="language_icon" alt="MongoDB" title="MongoDB" />
                    <img src={docker_icon} className="language_icon" alt="Docker" title="Docker" />
                    <img src={google_icon} className="language_icon" alt="Google Cloud" title="Google Cloud" />
                    <img src={aws_icon} className="language_icon" alt="AWS" title="AWS" />
                    <img src={eth_icon} className="language_icon" alt="Ethereum" title="Ethereum" />
                    <img src={csharp_icon} className="language_icon" alt="C#" title="C#" />
                    <img src={c_icon} className="language_icon" alt="C" title="C" />
                    <img src={swift_icon} className="language_icon" alt="Swift" title="Swift" />
                    <img src={java_icon} className="language_icon" alt="Java" title="Java" />
                </div>
            </Card>
            <Card className="card" raised>
                <Typography className="flex-container content_header" variant="h6"><ContactSupportIcon className="icon" />Contact</Typography>
                <div className="profile_content card_body">
                    <Typography className="flex-container card_body" component="div" noWrap><MailIcon className="icon" />taijonsmith22@gmail.com</Typography>
                    <Typography className="flex-container card_body"><PhoneIcon className="icon" />(502) 609-1335</Typography>
                </div>
            </Card>
        </div>
    );
}