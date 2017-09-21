import { Component } from 'react';

export default class UpdateStatus extends Component {
  render() {
    return (
      <div className="container update-status">
       <div className="row">
         <div className="col-md-2 text-center">
           <img className="img-circle"
             style={{height: 90+'px', width: 90+'px'}}
             src={ bokunopico } />
         </div>
         <div className="col-md-10">
           <h5>WHAT'S NEW, {this.props.name}</h5>
           <form>
             <textarea></textarea>
             <div className="row hidden">
               <img id="sauce-upload-image" />
               <iframe id="sauce-upload-video">
               </iframe>
               <a id="sauceink-link-text" href="#"></a>
             </div>
             <div className="row">
               <ul className="sauce-upload side bar tabs">
                 <li id="tabs1">
                   <i className="fa fa-picture-o" aria-hidden="true"></i>
                 </li>
                 <li id="tabs3">
                   <i className="fa fa-link" aria-hidden="true"></i>
                 </li>
                 <li id="tabs2">
                   <i className="fa fa-video-camera" aria-hidden="true"></i>
                 </li>
               </ul>
             </div>
             <input className="sauce-post-update" type="submit" value="POST UPDATE" />
           </form>
         </div>
       </div>
     </div>
    );
  }
}
