import React, { Component} from 'react' ;
import { Grid , Cell } from 'react-mdl';
import Educaion from './education';
import Experience from './experience'
import Skills from './skills';


class Resume extends Component{
  render(){
    return(
      <div>
      <Grid>
      <Cell col={4}>
      <div style = {{textAlign: 'center' }}>
     <img
      src = "https://media.istockphoto.com/vectors/business-man-icon-male-face-silhouette-with-office-suit-and-tie-user-vector-id1194657244?k=6&m=1194657244&s=170667a&w=0&h=TX8EZEkWjZtJexfv7yDiYcFSRSmMDwOg0EUT_HIZXH4="
      alt = "avatar"
      style = {{height: '200px'}}
      />
      </div>
      <h2 style={{paddingTop: '2em' }} > Sina Heydarimolaei </h2>
      <h4 style={{ color:'grey' }}> programmer </h4>
      <hr style={{borderTop: '3px solid #00FFFF' , width: '58%' }}/>
      <p> I am a fast learner, motivated computer science graduate with a huge interest in design and software
          engineering, seeking jobs to expand my knowledge and skills.</p>
      <hr style={{borderTop: '3px solid #00FFFF' , width: '58%' }}/>
      <h5>Adress</h5>
      <p>1010 Raleigh Glendale CA, 91205</p>
      <h5>Phone</h5>
      <p>(949) 357-3768</p>
      <h5>Email</h5>
      <p>sinaali.7.70@gmail.com</p>
      <hr style={{borderTop: '3px solid #00FFFF' , width: '58%' }}/>
      </Cell>
      <Cell className="resume-right-col" col={8}>
      <h2>Education</h2>
      <Educaion
      startYear = {2015}
      endYear = {2017}
      schoolName = {'Saddleback College'}
      schoolDescription = {'Mission Viejo, CA ( Computer science )'}
      />
      <Educaion
      startYear = {2017}
      endYear = {2019}
      schoolName = {'California state university fullerton'}
      schoolDescription = {'Fullerton, CA ( Bachelor’s degree in Computer science )'}
      />
      <hr style={{ borderTop:'3px solid #ac6b53' }}/>
      <h2>Experience</h2>
      <Experience
      startYear = {2015}
      endYear = {2016}
      jobName = {'Cashier ( Walmart )'}
      jobDescription = {'● Providing customer service ● Working with different types of payment.'}
      />
      <Experience
      startYear = {2016}
      endYear = {2017}
      jobName = {'Tutor ( Saddleback College)'}
      jobDescription = {'● Helping students error check their code ● Teaching students logical thinking (Divide and conquer approach) ● Teaching students programming languages (C++, Java, assembly).'}
      />
      <Experience
      startYear = {2017}
      endYear = {2019}
      jobName = {'Remote project'}
      jobDescription = {'● Coding in different programming languages for personal usage ● Used languages such as c++, java, javascript'}
      />
      <hr style={{ borderTop:'3px solid #ac6b53' }}/>
      <h2>Skills</h2>
      <Skills
      skill= "Full stack web-development"
      progress = {80}
      />
      <Skills
      skill= "Software engineering"
      progress = {90}
      />
      <Skills
      skill= "Software developer"
      progress = {80}
      />
      <Skills
      skill= "Linux"
      progress = {90}
      />

      <p> Experienced with programming languages such as SQL, Java, C++, Perl, Python, bash script, awk, JavaScript, assembly.</p>
      <p> Experienced with the Linux environment.</p>
      <p> Experienced with the git commands.</p>
      <p> Experienced with object-oriented programming.</p>
      <p> Experienced with Agile Software Development Methodology.</p>
      <p> Knowledge in MS Word, Excel and PowerPoint.</p>
      <p> Knowledge in technologies like react.</p>

      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
