import React from 'react';

interface TasksListProps {
    children: React.ReactNode
}

const TasksList: React.FC<TasksListProps> = ({children}) => {
    return (
        <ul style={{padding: '0'}}>
            {children}
        </ul>
    );
};

export default TasksList;
