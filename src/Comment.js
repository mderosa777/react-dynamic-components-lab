//your code here
import React,{Component} from 'react'
    export default class comment extends Component{
        render(){
            return(
                <div className='comment'>
                {this.props.commentText}
                    </div>
            )
        }
    }
