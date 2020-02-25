import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid/v1';

const arr = [
  {
    id: uuid(),
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-lonely.jpg'
  },
  {
    id: uuid(),
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-uluwatu.jpg'
  },
  {
    id: uuid(),
    url:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-carezza-lake.jpg'
  },
  {
    id: uuid(),
    url:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-batu-bolong-temple.jpg'
  }
];

export default class TransitionExample extends Component {
  state = {
    index: 0,
    selected: arr[0]
  };

  nextImage = () =>
    this.setState((prevState) => {
      const newIndex =
        prevState.index < arr.length - 1 ? prevState.index + 1 : 0;
      return {
        index: newIndex,
        selected: arr[newIndex]
      };
    });

  render = () => {
    let s = {
      backgroundImage: `url(${this.state.selected.url})`
    };
    return (
      <div>
        <div>
          <TransitionGroup>
            <CSSTransition
              key={this.state.selected.id}
              timeout={1000}
              classNames="messageout"
            >
              <div className="centered-image" style={s} />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          <button
            className="uk-button uk-button-primary"
            onClick={this.nextImage}
          >
            Next Image
          </button>
        </div>
      </div>
    );
  };
}
