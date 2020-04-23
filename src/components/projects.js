import React, { Component} from 'react' ;
import {Tabs, Tab, Grid, Cell , Card, CardTitle ,CardText , CardActions , Button, CardMenu, IconButton } from  'react-mdl'

class Projects extends Component{


  constructor(props){
    super(props);
    this.state = {activeTab: 0};

  }

toggleCategories(){
  if (this.state.activeTab === 0){
    return (
    <div className = "projets-grid">
    <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
    <CardTitle style = {{ color:'#fff' , height:'176px' , background:'url(https://reactjs.org/logo-og.png)  center /cover' }}>
      Chat application</CardTitle>
      <CardText>
      Creating a web application using React.js that allows the users to chat with each other, login and
      logout. Creating a database for all the back-end activities using google fire-base.
      </CardText>
      <CardActions border>
      <Button colored> <a href="https://github.com/Cenaaa/473_project2">github </a> </Button>
      <Button colored> Live demo </Button>
      </CardActions>
      <CardMenu>
      <IconButton  name= "share" style ={{color:'#fff'}} />
      </CardMenu>
       </Card>

      <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
      <CardTitle style = {{ color:'#fff' , height:'176px' , background:'url(https://reactjs.org/logo-og.png)  center /cover' }}>
        My Portfolio</CardTitle>
        <CardText>
        making my portfolio using react.js
        </CardText>
        <CardActions border>
        <Button colored> <a href="https://github.com/programming-machine/portfolio">github </a> </Button>
        <Button colored> Live demo </Button>
        </CardActions>
        <CardMenu>
        <IconButton  name= "share" style ={{color:'#fff'}} />
        </CardMenu>
    </Card>

   </div>


  )

  }else if (this.state.activeTab === 1){
     return (
       <div className = "projets-grid">
       <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
       <CardTitle style = {{ color:'black' , height:'176px' , background:'url(https://www.python.org/static/community_logos/python-logo-master-v3-TM.png)  center /cover' }}>
         Pong game (3 handles)</CardTitle>
         <CardText>
         Creating a pong game with 3 handles for each side using pygame library in python 3.6. There is one
         side for the computer that allows it to play the game based on a simple algorithm, also there is a side
         for the user.
         </CardText>
         <CardActions border>
         <Button colored> <a href="https://github.com/Cenaaa/Pong_Game">github </a> </Button>
         <Button colored> Live demo </Button>
         </CardActions>
         <CardMenu>
         <IconButton  name= "share" style ={{color:'#fff'}} />
         </CardMenu>
          </Card>

         <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
         <CardTitle style = {{ color:'black' , height:'176px' , background:'url(https://www.python.org/static/community_logos/python-logo-master-v3-TM.png)  center /cover' }}>
           Game in pygame</CardTitle>
           <CardText>
           Finding the shortest path between two points in a map ( with obstacles ) Using A-star algorithm and
           have an agent to follow the path and go to the point. Implementing the algorithm in the game with one
           enemy which will follow the path and goes after the player.
           </CardText>
           <CardActions border>
           <Button colored> <a href="https://github.com/Cenaaa/481_AI_Game">github </a> </Button>
           <Button colored> Live demo </Button>
           </CardActions>
           <CardMenu>
           <IconButton  name= "share" style ={{color:'#fff'}} />
           </CardMenu>
       </Card>

      </div>


      )
    }
    else if (this.state.activeTab === 2){
      return (

        <div className = "projets-grid">
       <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
       <CardTitle style = {{ color:'black' , height:'176px' , background:'url(https://www.logolynx.com/images/logolynx/b6/b6eac18f2577f07b92644a0e8f6fcb3b.png)  center /cover' }}>
         Game of life</CardTitle>
         <CardText>
         Implementing the “Game of life” in javascript and HTML, mostly a front-end work with an object-
         oriented approach by creating a class called Matrix and dealing with an object.
         </CardText>
         <CardActions border>
         <Button colored> <a href="https://github.com/Cenaaa/CPSC439_Project3">github </a> </Button>
         <Button colored> Live demo </Button>
         </CardActions>
         <CardMenu>
         <IconButton  name= "share" style ={{color:'#fff'}} />
         </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
          <CardTitle style = {{ color:'black' , height:'176px' , background:'url(https://www.logolynx.com/images/logolynx/b6/b6eac18f2577f07b92644a0e8f6fcb3b.png)  center /cover' }}>
            Different rules(Game of life)</CardTitle>
            <CardText>
            Implementing different rules of  “Game of life” in javascript and HTML, mostly a front-end work with an object-
            oriented approach by creating a class called Matrix and dealing with an object.
            </CardText>
            <CardActions border>
            <Button colored> <a href="https://github.com/Cenaaa/different_rules_of_GOL">github </a> </Button>
            <Button colored> Live demo </Button>
            </CardActions>
            <CardMenu>
            <IconButton  name= "share" style ={{color:'#fff'}} />
            </CardMenu>
            </Card>
        </div>


        )
    }else if (this.state.activeTab === 3){
      return (

        <div className = "projets-grid">
       <Card shadow={5} style={{minWidth:'450' , margin:'auto' }}>
       <CardTitle style = {{ color:'black' , height:'176px' , background:'url(https://cdn.dribbble.com/users/763363/screenshots/3557947/attachments/791767/fullstack-logo-light.png)  center /cover'}}>
         simple twitter</CardTitle>
         <CardText>
         Using javascript, HTML, mongodb and npm libraries, a simple twitter that allows all users to enter their name and a comment and also
         allows them to submit their comment, was programmed. MongoDb was used to create the database. At the end the code was deployed on the
         internet.
         </CardText>
         <CardActions border>
         <Button colored> <a href="https://github.com/programming-machine/twitter">github </a> </Button>
         <Button colored> Live demo </Button>
         </CardActions>
         <CardMenu>
         <IconButton  name= "share" style ={{color:'#fff'}} />
         </CardMenu>
          </Card>


        </div>


        )
    }

  }



render(){
  return(
    <div >
    <Tabs activeTab={this.state.actievTab} onChange = { (tabId) => this.setState({ activeTab:tabId  })} ripple>
    <Tab>react</Tab>
    <Tab>python</Tab>
    <Tab>JavaScript|html|css</Tab>
    <Tab>Full stack web develpment</Tab>



    </Tabs>

    <Grid>
    <Cell col={12}>
    <div className="content" >{this.toggleCategories()}</div>

    </Cell>
    </Grid>

    </div>
  )
}

}
export default Projects;
