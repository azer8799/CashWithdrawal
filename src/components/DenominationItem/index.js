// Write your code here
import './index.css'

const DenominationItem = props => {
  const {moneyList, updateBalance} = props
  const {value} = moneyList

  const addMoney = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={addMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
