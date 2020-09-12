import React , {Component} from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state={
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JS"}
    ] ,
    current:''
  }

  //updateCourse
  updateCourse= (e)=>{
    this.setState({
      current:e.target.value
    })
  }
  //addCourse
  addCourse= (e)=>{
    e.preventDefault();

    let current=this.state.current;
    let courses=this.state.courses;
    if(current != '')
    {
      courses.push({name:current})
      this.setState({
        courses,
        current:''
      })
    }
    
    
  }
  //deleteCourse
  deleteCourse= (index)=>{
    console.log(index)
    let {courses} = this.state;
    courses.splice(index,1);
    this.setState({courses})
  }

  //editCourse
  editCourse=(index ,value)=>{
    
    let courses=this.state.courses;
    let course =  courses[index];
    course['name']=value;
    this.setState({courses})
  }

  render()
  {

    const {courses} = this.state;
    const courseList = courses.map( (course , index) =>{
     return  <CourseList deleteCourse={this.deleteCourse} index={index} details={course} key={index} editCourse={this.editCourse}/>
    })
    return (
      <section className="App">
        <h2>CRUD Application</h2>
        <ul>{courseList}</ul>
        <CourseForm  current={this.state.current} addCourse={this.addCourse} updateCourse = {this.updateCourse}/>
      </section>
  ) }
}

export default App;
