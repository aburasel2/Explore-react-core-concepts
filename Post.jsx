 import './post.css'
 export default function Post({post}){
    const {title,userId,id, body} = post
    return (
        <div className='post'>
              <h3>Title :{title}</h3>
              <p> UserID:{userId} </p>
              <p><small> PostID : {id}</small></p>
              <p><small> body : {body}</small></p>
        </div>
    )
}