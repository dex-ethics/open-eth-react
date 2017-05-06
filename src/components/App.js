import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import { Toolbar } from 'material-ui/Toolbar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AppBar title="To do app" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <Toolbar />
    <br />
    <Grid fluid>
      <Row>
        <Col mdOffset={2} md={8} xs={12}>
          <Card>
            <CardHeader title="The to do list" subtitle="Your list of things to be done." />
            <CardText>
              <VisibleTodoList />
            </CardText>
            <Divider />
            <Subheader>Add todos</Subheader>
            <CardText>
              <AddTodo />
            </CardText>
            <Divider />
            <CardActions>
              <Footer />
            </CardActions>
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
