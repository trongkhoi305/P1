import React from 'react';
class TaskForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id:'',
            name:'', 
            temperature:'',
            frequency:'',
            Hz:'',
            status : false
        
        }
    }
    componentWillMount()
    {
        if(this.props.taskEditting!==null){
            this.setState({
                id:this.props.taskEditting.id,
                name:this.props.taskEditting.name,
                temperature:this.props.taskEditting.temperature,
                frequency:this.props.taskEditting.frequency,
                Hz:this.props.taskEditting.Hz,
                status: this.props.taskEditting.status

            });
         console.log(this.state);
     
        }
    }
    onCloseForm =()=>{
        this.props.onCloseForm();
    }

    onChange = (event)=>
    {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name==='status')
        {
            value =target.value ==='true'?true:false;
        }
        this.setState({
            [name] :value
        });
    }
   
    onSubmit=(event)=>
    {
        event.preventDefault();
       this.props.onSubmit(this.state);
       this.onCloseForm();
    }
  render() {
  return (
    
    <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                        Thêm Công Việc
                        <span
                         className ="fa fa-times-circle "
                         onClick={this.onCloseForm}
                        ></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Loại Quả :</label>
                                <input type="text" className="form-control" 
                                name="name"
                                value={this.state.value}
                                onChange={this.onChange}/>
                                <label>Thời Gian Đo :</label>
                                <input type="date" className="form-control"
                                name="temperature"
                                value={this.state.value}
                                onChange={this.onChange}
                                 />
                                <label>Nơi Mua :</label>
                                <input type="text" className="form-control"
                                name="frequency"
                                value={this.state.value}
                                onChange={this.onChange}
                                 />
                                <label>Nguồn Gốc :</label>
                                <input type="text" className="form-control"
                                name="Hz"
                                value={this.state.value}
                                onChange={this.onChange}
                                 />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" name="status"
                                value={this.state.value}
                                onChange={this.onChange}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">
                                 <span className="fa fa-plus mr-5"></span>
                                 Thêm</button>&nbsp;
                                <button type="button"
                                 className="btn btn-danger"
                                 onClick={this.onCloseForm}
                                 >
                                 <span className="fa fa-close mr-5"></span>
                                 Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
  );
}

}
export default TaskForm;
