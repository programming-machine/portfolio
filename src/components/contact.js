import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sina Heydarimolaei</h2>
            <img
              src="https://media.istockphoto.com/vectors/business-man-icon-male-face-silhouette-with-office-suit-and-tie-user-vector-id1194657244?k=6&m=1194657244&s=170667a&w=0&h=TX8EZEkWjZtJexfv7yDiYcFSRSmMDwOg0EUT_HIZXH4="
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to call me at any time from 8 AM to 5 PM.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (949) 357-3768
                  </ListItemContent>
                </ListItem>



                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sinaali.7.70@gmail.com
                  </ListItemContent>
                </ListItem>




              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
