import React from 'react';
import ReactDOM from 'react-dom';

class PledgeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 50000,
      amountPledged: 0,
      backers: 0,
      daysLeft: 30
    };
  }

  render() {
    return (
      <div>
        <div>${this.state.amountPledged} pledged of ${this.state.goal} goal</div>
        <div>{this.state.backers} backers</div>
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
          This project will only be funded if it reaches its goal by 'insert date'
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PledgeTracker />, document.getElementById('root'));
