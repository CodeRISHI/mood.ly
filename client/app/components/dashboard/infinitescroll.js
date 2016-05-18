import React from 'react';
import Search from './search';
import services from '../../services/services';
import controller from '../../services/controllers';
import QuoteItem from './quoteItem';
import GifItem from './gifItem';
import Music from './music';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Infinite from 'react-infinite-scroll';

class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      isInfiniteLoading: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  getInitialState() {
    const self = this;
    self.setState({
      elements: this.buildElements(0, 20),
      isInfiniteLoading: false,
    });
  }

  componentDidMount() {
    const self = this;
    setInterval(() => {
      let elemLength = self.state.elements.length;
      let newElements = self.buildElements(elemLength, elemLength + 1);
      self.setState({
        elements: self.state.elements.concat(newElements),
      });
    }, 500);
  }

  buildElements(start, end) {
    const elements = [];
    for (let i = start; i < end; i++) {
      elements.push(
        <div>
          <GifItem
            gif={this.props.currGif}
            mood={this.props.currMood}
            user={this.props.user}
          />
          <QuoteItem
            gif={this.props.currQuote}
            mood={this.props.currMood}
            user={this.props.user}
          />
          <Music
            gif={this.props.currVideoID}
            mood={this.props.currMood}
            user={this.props.user}
          />
        </div>
      );
    }
    return elements;
  }

  handleInfiniteLoad() {
    const self = this;
    this.setState({
      isInfiniteLoading: true,
    });
    setTimeout(() => {
      let elemLength = self.state.elements.length;
      let newElements = self.buildElements(elemLength, elemLength + 20);
      self.setState({
        isInfiniteLoading: false,
        elements: newElements.concat(self.state.elements),
      });
    }, 2500);
  }

  render() {
    return (
      <Infinite
        elementHeight={51}
        containerHeight={window.innerHeight}
        infiniteLoadBeginEdgeOffset={300}
        onInfiniteLoad={this.handleInfiniteLoad}
        isInfiniteLoading={this.state.isInfiniteLoading}
        timeScrollStateLastsForAfterUserScrolls={1000}
        displayBottomUpwards
      >
      {this.state.elements}
      </Infinite>
    );
  }
}

InfiniteList.propTypes = {
  user: React.PropTypes.object,
  currGif: React.PropTypes.string,
  currMood: React.PropTypes.string,
  currQuote: React.PropTypes.string,
  currVideoID: React.PropTypes.string,
};

/*
<Infinite
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true}
        loader={<div className="loader">Loading ...</div>}
      >
*/

export default InfiniteList;

