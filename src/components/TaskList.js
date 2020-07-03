import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    var tasks = this.props.tasks;
    var elmTasks = tasks.map((task,index)=>{
        return <TaskItem key={task.id}
                        index={index}
                        task={task}
                        onUpDateStatus={this.props.onUpDateStatus}
                        onDelete={this.props.onDelete}
                        onUpdata={this.props.onUpdata}/>
    });
  return (
    
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Loại Quả </th>
                        <th className="text-center">Thời Gian Đo</th>
                        <th className="text-center">Nơi Mua</th>
                        <th className="text-center">Nguồn Gốc</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                
                {elmTasks}
                </tbody>
            </table>
                 

  );
}
}
export default TaskList;
