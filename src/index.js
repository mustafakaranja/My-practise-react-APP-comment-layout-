import React from "react";
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './Approval';

const App = () => {
    return (
      <div className="ui container comments">
         <ApprovalCard>
         <CommentDetail author ="Mustafa" date ="Few min ago" text ="Hey i have the problem,please help" />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author ="Yusuf" date ="Today at 9:45pm" text ="Tell me in Brief" />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author ="shiyam" date ="Today at 4:40am" text ="Tell me in Brief" />
        </ApprovalCard>
       
      </div>
    );
  };
  
 ReactDOM.render(<App />, document.querySelector('#root'));
  
