import React, { Component} from 'react' ;
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style={{width:'100%' , margin: 'auto'  }}>
       <Grid className="landing-grid">

         <Cell col={12}>
         <img src="https://media.istockphoto.com/vectors/business-man-icon-male-face-silhouette-with-office-suit-and-tie-user-vector-id1194657244?k=6&m=1194657244&s=170667a&w=0&h=TX8EZEkWjZtJexfv7yDiYcFSRSmMDwOg0EUT_HIZXH4="
          alt ="avatar"
          className = "avatar-img"/>
          <div className="banner-text">
          <h1> Software engineer</h1>

          <hr/>
          <p>Full stack web developer | Software developer | Agile methodology | Artifactual intelligence</p>
          <div className="social-links">
          {/* linkedin */}


          {/* linkedin */}
          <a href= "https://www.linkedin.com//in/sina-heidari-77468676/" rel = "noopener noreferrer" target="_blank" >
          <i className ="fa fa-linkedin-square" aria-hidden="true"/>
          </a>


          {/* github */}
          <a href= "https://www.github.com/cenaaa" rel = "noopener noreferrer" target="_blank" >
          <i className ="fa fa-github-square" aria-hidden="true"/>
          </a>





          </div>
          </div>
         </Cell>

       </Grid>
       </div>
    )
  }
}

export default Landing;
