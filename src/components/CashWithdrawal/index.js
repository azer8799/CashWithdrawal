// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="user-card">
          <div className="header">
            <p className="logo"> A </p>
            <p className="desc"> Anup Singh</p>
          </div>

          <div className="your-balance">
            <p className="desc"> Your Balance</p>
            <div className="sub-balance">
              <h1 className="heading">{balance}</h1>
              <p className="desc"> in Rupees</p>
            </div>
          </div>
          <div className="withdraw">
            <h1 className="heading">Withdraw</h1>
            <p className="desc"> CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttons-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                moneyList={eachItem}
                key={eachItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
