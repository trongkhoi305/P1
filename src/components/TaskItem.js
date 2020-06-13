import React from 'react';

class TaskItem extends React.Component {

    onUpDateStatus=()=>
    {
        this.props.onUpDateStatus(this.props.task.id);
    }
    onDelete=()=>
    {
        this.props.onDelete(this.props.task.id);

    }
    onUpdata=()=>
    {
        this.props.onUpdata(this.props.task.id);

    }
  render() {
    var task = this.props.task;
    var index = this.props.index;
  return (
    
          <tr>
                <td>{index+1}</td>
                <td>{task.name}</td>
                <td>{task.temperature}</td>
                <td>{task.frequency}</td>
                <td>{task.Hz}</td>
                <td className="text-center">
                    <span className={task.status === true ?'label label-danger':'label label-success'}
                          onClick={this.onUpDateStatus}
                    >
                                { task.status=== true ?'Kích Hoạt':'Ẩn'}
                            </span>
                </td>
                <td className="text-center">
                    <button
                     type="button"
                      className="btn btn-warning"
                      onClick={this.onUpdata}
                      >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                     type="button" 
                     className="btn btn-danger"
                     onClick={this.onDelete}
                     >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
                 

  );
}

}
export default TaskItem;
