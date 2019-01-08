import React from 'react';
import ReactDOM from 'react-dom';
import pledges from './sampleData';
import Moment from 'moment';

import AllOrNothing from './components/AllOrNothing.jsx';
import Backers from './components/Backers.jsx';
import Pledged from './components/Pledged.jsx';

var server = 'localhost:1234';
var url = 'http://' + server;

class PledgeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 50000,
      amountPledged: 0,
      backers: 0,
      daysLeft: 30,
      projectEnd: '20190423',
      projectEndPretty: 'April 23, 2019'
    };
  }

  componentDidMount() {
    this.checkPledges = setInterval(
      () => this.fetchPledges(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.fetchPledges);
  }

  fetchPledges () {
    var data = pledges;
    this.setState({
      amountPledged: data.totalPledged,
      backers: data.totalBackers
    });
  }


  // fetch(url)
  //   .then(function(resp) {
  //     return resp.json();
  //   })
  //   .then(data => {
  //     console.log('data', data);
  //     this.setState({
  //       amountPledged: data.totalPledged,
  //       backers: data.totalBackers
  //     });
  //   });
  //}


  render() {
    return (
      <div>
        <Pledged amountPledged={this.state.amountPledged} goal={this.state.goal} />
        <Backers backers={this.state.backers} />
        <div>{this.state.daysLeft} days to go</div>
        <div><button>Back this project</button></div>
        <div>
          <button>Remind me</button>
          <ahref>facebook icon</ahref>
          <ahref>twitter icon</ahref>
          <ahref>mail icon</ahref>
          <ahref>project short link</ahref>
        </div>
        <div>
          <ahref>All or nothing.</ahref>
          <AllOrNothing projectEnd={this.state.projectEndPretty}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PledgeTracker />, document.getElementById('root'));
