import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ReactMarkdown from 'react-markdown';
import ImageViewer from '../ImageViewer';

export default class OldLocation extends React.Component {
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return (<div onClick={this.handleClick}>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            <h1>{this.props.name}</h1>
            {this.props.images && <ImageViewer images={this.props.images} />}
            {this.props.content && <ReactMarkdown source={this.props.content} />}
            {/* default content message */}
            {!this.props.images && !this.props.content && <p>Content Comming Very Soon!</p>}
          </ModalDialog>
        </ModalContainer>
      }
      <svg
      title={this.props.name}
       width={15}
       height={15}
       viewBox='0 0 2 2'
       style={{
         position: 'absolute',
         left: -7.5,
         top: -7.5
       }}>
        <circle cx="1" cy="1" r={1} fill="red" />
      </svg>
    </div>);
  }
}
