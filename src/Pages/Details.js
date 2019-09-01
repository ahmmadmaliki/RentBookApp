import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}  from 'react-router-dom';
import '../Components/Details.css';
import Modaledit from '../Components/Modal';
import Modaldelete from '../Components/Modaldelete';
import {getBook, returnBook} from '../Publics/Actions/item';
import {connect} from 'react-redux';
import Modalborrow from '../Components/Modalborrow';
import Swal from 'sweetalert2';

class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            showModalEdit: false,
            showModalDelete: false,
            showModalBorrow: false
        }
        
    }
    componentDidMount = async () => {
      await this.props.dispatch (getBook ());
    };
    returnBook=async(id)=>{
      await this.props.dispatch(returnBook(id))
      .then(()=>{
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Return Successful',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          window.location.reload()
        })
      })
    }
    render(){
      let editModalClose=()=>{
        this.setState({showModalEdit: false});
      }
      let deleteModalClose=()=>{
        this.setState({showModalDelete: false});
      }
      let borrowModalClose=()=>{
        this.setState({showModalBorrow: false});
      }
        return(
        <div>
        {this.props.book.BookList.map((item,index)=>{
            if(item.id==this.props.match.params.id){
              if(item.Availability=="Available"){
            return(
            <div className="back">
                <div className="cover" style={{url:`(${item.Image})`}}>
                    <div style={{fontSize: 50}}className="ellips" >
                        <Link to='/home' style={{color: "black"}}><i className="far fa-arrow-alt-circle-left"></i></Link>
                    </div>
                    <div className="covermini"><img src={item.Image}></img></div>
                    
                    <Link className="edit" onClick={()=>this.setState({showModalEdit: true})}>Edit</Link>
                        <Modaledit show={this.state.showModalEdit} onHide={editModalClose} book={item}/>
                    <Link className="delete" onClick={()=>this.setState({showModalDelete: true})}>Delete</Link>
                    <Modaldelete show={this.state.showModalDelete} onHide={deleteModalClose} id={item.id} />
                </div>
                <div className="rectangle" style={{fontSize: 20, textAlign: "center"}}><b>{item.Genres}</b></div>
                <div className="date">{item.Date_Released}</div>
                <div className="title">{item.Title}</div>
                <div className="box">{item.Description}</div>
                <div className="avail">{item.Availability}</div>
                <Link className="borrow" style={{fontSize: 35, textAlign: "center", color: "black"}} onClick={()=>this.setState({showModalBorrow: true})}>Borrow</Link>
                <Modalborrow show={this.state.showModalBorrow} onHide={borrowModalClose} id={item.id} />
            </div> 
            )
          }else{
            return(
              <div className="back">
                <div className="cover" style={{url:`(${item.Image})`}}>
                    <div style={{fontSize: 50}}className="ellips" >
                        <Link to='/home' style={{color: "black"}}><i className="far fa-arrow-alt-circle-left"></i></Link>
                    </div>
                    <div className="covermini"><img src={item.Image}></img></div>
                    
                    <Link className="edit" onClick={()=>this.setState({showModalEdit: true})}>Edit</Link>
                        <Modaledit show={this.state.showModalEdit} onHide={editModalClose} book={item}/>
                    <Link className="delete" onClick={()=>this.setState({showModalDelete: true})}>Delete</Link>
                    <Modaldelete show={this.state.showModalDelete} onHide={deleteModalClose} id={item.id} />
                </div>
                <div className="rectangle" style={{fontSize: 20, textAlign: "center"}}><b>{item.Genres}</b></div>
                <div className="date">{item.Date_Released}</div>
                <div className="title">{item.Title}</div>
                <div className="box">{item.Description}</div>
                <div className="avail">{item.Availability}</div>
                <Link className="return" style={{fontSize: 35, textAlign: "center", color: "white"}}
                  onClick={()=>this.returnBook({id: item.id})}
                >Return</Link>
            </div> 
            )

          }
        }
        })
    }
    </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      book: state.book,
    };
  }
export default connect(mapStateToProps)(Details);