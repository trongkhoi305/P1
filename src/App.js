import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from'./components/TaskList';
import Footter from'./components/Footter';
import Header from'./components/Header';
class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm:false,
            taskEditting:null,
            filter:{
                name:'',
                status:-1
            },
            keyword : '',
            sortBy:'name',
            sortValue:1
    }
}
    componentWillMount()
    {
        if(localStorage && localStorage.getItem('tasks'))
        {
            var tasks =JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            });
        }
    }
    onGenerateData =()=>
    {
        var tasks =[
        {
            id:this.GenerateID(),
            name: 'thịt bò ', 
            temperature:'10',
            frequency:'20',
            Hz:'300',
            status : false
        },
        {
            id:this.GenerateID() ,
            name: 'thịt heo',
            temperature:'10',
            frequency:'20',
            Hz:'300',
            status : false
        },
        {
            id:this.GenerateID() ,
            name: 'cá hồi',
            temperature:'10',
            frequency:'20',
            Hz:'300',
            status : false
        }
        ];
        this.setState({
            tasks:tasks
        });
       localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    s4(){
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }
    GenerateID()
    {
        return this.s4() + this.s4() +'-'+this.s4()+ this.s4() +'-'+this.s4()+ this.s4() +'-'+this.s4()+ this.s4() +'-'+this.s4();
    }
    onToggleForm =()=>{
        this.setState({
            isDisplayForm :! this.state.isDisplayForm
        });
    }
    onCloseForm=()=>{
        this.setState({
            isDisplayForm :false
        });
    }
    onShowForm =()=>
    {
        this.setState({
            isDisplayForm:true
        });
    }
    onSubmit =(data)=>
    {
        var tasks = this.state.tasks;
      data.id=this.GenerateID();
        tasks.push(data);
        this.setState({
            tasks:tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onUpDateStatus=(id)=>
    {   var {tasks} = this.state;
        var index =this.findIndex(id);
        if(index!==-1)
        {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
    }
    findIndex=(id)=>
    {
        var {tasks} = this.state;

        var result =-1;
        tasks.forEach((task,index)=>{
            if(task.id===id)
            {
                result=index;
            }
        });
        return result;
    }
    onDelete= (id) =>
    {
      var {tasks} = this.state;
        var index =this.findIndex(id);
        if(index!==-1)
        {
            tasks.splice(index,1);
            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }  
    }
    onUpdata=(id)=>
    {
        var {tasks} = this.state;
        var index =this.findIndex(id);
        var taskEditting=tasks[index];
        this.setState({
           taskEditting:taskEditting

        })
        this.onShowForm();
    }
    onSearch=(keyword)=>
    {
        
        this.setState({
            keyword:keyword
        })
      
    }
    onSort=(sortBy,sortValue)=>
    {
            
            this.setState({
                
                    sortBy:sortBy,
                    sortValue:sortValue
                
            });
            console.log(this.state);
    }
  render() {
    var tasks =this.state.tasks;
    var isDisplayForm =this.state.isDisplayForm;
    var taskEditting =this.state.taskEditting;
    var filter =this.state.filter;
    var keyword =this.state.keyword;
    var sortBy =this.state.sortBy;
    var sortValue=this.state.sortValue;
    var elmTaskForm = isDisplayForm ? 
        <TaskForm 
        onSubmit={this.onSubmit} 
        onCloseForm={this.onCloseForm}
        taskEditting={taskEditting}
        /> :'';

        if(keyword){
            tasks=tasks.filter((tasks)=>{
                return tasks.name.toLowerCase().indexOf(keyword)!==-1
            });
        }
       if(sortBy === 'name'){
        tasks.sort((a,b)=>{
            if(a.name > b.name) return sortValue;
            else if(a.name < b.name) return -sortValue;
            else return 0;
        });
       }else
       {
         tasks.sort((a,b)=>{
            if(a.status > b.status) return sortValue;
            else if(a.status < b.status) return -sortValue;
            else return 0;
            });
       }
  return (
    <div>
    <div>
    <Header/>
    </div>
    <div className="App">
    <div className="container">

        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4':
                                            ''}>
              {elmTaskForm}
            </div>
            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' :
            'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button
                 type="button" 
                className="btn btn-primary"
                onClick={this.onToggleForm}
                >
                    <span className="fa fa-plus mr-5"></span>
                    Thêm Công Việc
                </button>
                
                   <Control onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}/>

                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TaskList tasks={ tasks } 
                    onUpDateStatus={this.onUpDateStatus}
                    onDelete={this.onDelete}
                    onUpdata={this.onUpdata} />
                    </div>
                </div>
            </div>
        </div>
    </div>
<Footter/>
    </div>
    </div>

  );
}

}

export default App;
