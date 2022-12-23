import React, { useEffect, useState } from 'react'
import './Calculator.scss'
import Headline from 'components/Headline/Headline'
import Input from './Input/Input'
import Checkbox from './Checkbox/Checkbox'
import Button from './Button/Button'
import Divider from './Divider/Divider'

const SmallResult = ({ name, title, amount, allowance }) => {
  return (
    <div className={name}>
      <div className="title">
        {title}
      </div>
      <div className="amount">
        {amount}
      </div>
      <div className="daily-allowance">
        {allowance}
      </div>
    </div>
  )
}

const Calculator = () => {

  const [monthlyGrossIncome, setMonthlyGrossIncome] = useState(1500);
  const [totalDaysOfSickLeave, setTotalDaysOfSickLeave] = useState(7);
  const [hasTuberculosis, setHasTuberculosis] = useState(false);

  const [employerCompensation, setEmployerCompensation] = useState(null);
  const [employerCompensationDays, setEmployerCompensationDays] = useState(null);
  const [insuranceCompensation, setInsuranceCompensation] = useState(null);
  const [insuranceCompensationDays, setInsuranceCompensationDays] = useState(null);
  const [totalCompensation, setTotalCompensation] = useState(null);
  const [finalDaysOfSickLeave, setFinalDaysOfSickLeave] = useState(null);

  const calculateCompensation = (event) => {
    event && event.preventDefault();
    const compensationRate = 0.7;
    const unpaidDays = 3
    const employerCompensationPeriod = 5 + unpaidDays; // Plus first days of sick-leave,
    let _employerCompensationDays = 0;
    let _employerCompensation = 0;
    let _insuranceCompensationDays = 0;
    let _insuranceCompensation = 0;
    let _finalDaysOfSickLeave = 0

    let tuberculosisCaseDays = hasTuberculosis ? 240 : 182
    _finalDaysOfSickLeave = totalDaysOfSickLeave > tuberculosisCaseDays ? tuberculosisCaseDays : totalDaysOfSickLeave

    if (totalDaysOfSickLeave > 3) {
      for (let i = 4; i <= _finalDaysOfSickLeave; i++) { // Count starts after 3 days
        if (i <= employerCompensationPeriod) {
          _employerCompensationDays++;
          _employerCompensation += monthlyGrossIncome * compensationRate / 30;
        } else {
          _insuranceCompensationDays++;
          if (_insuranceCompensationDays > _finalDaysOfSickLeave) {
            break;
          }
          _insuranceCompensation += monthlyGrossIncome * compensationRate / 30;
        }
      }
    }

    const _totalCompensation = _employerCompensation + _insuranceCompensation;

    setFinalDaysOfSickLeave(_finalDaysOfSickLeave)
    setEmployerCompensation(_employerCompensation)
    setEmployerCompensationDays(_employerCompensationDays)
    setInsuranceCompensation(_insuranceCompensation)
    setInsuranceCompensationDays(_insuranceCompensationDays)
    setTotalCompensation(_totalCompensation)
  }

  useEffect(() => {
    calculateCompensation()
  }, [])

  const formatCurrency = (number) => {
    if (!number) {
      number = 0
    }
    return number.toLocaleString('ee-ET', { style: 'currency', currency: 'EUR' })
  }

  return (
    <div className="component calculator">
      <Headline tag="h4">Compensation Calculator</Headline>
      <form onSubmit={(event) => calculateCompensation(event)}>
        <Input required onChange={(income) => setMonthlyGrossIncome(Number(income))} type={'number'} step={0.01} defaultValue={monthlyGrossIncome} label={'Average income'} unit={'€'} />
        <Input required onChange={(days) => setTotalDaysOfSickLeave(Number(days))} type={'number'} defaultValue={totalDaysOfSickLeave} label={'Days on sick-leave'} unit={'days'} />
        <Checkbox onChange={(value) => setHasTuberculosis(value)} label="I have tuberculosis" />
        <Button type={'submit'}>Calculate</Button>
      </form>
      <Divider />
      <div className='results'>
        <SmallResult name={'employer'}
          title={<>The employer compensates <br /><strong>{employerCompensationDays} days</strong></>}
          amount={formatCurrency(employerCompensation)}
          allowance={<>Daily allowance<br />{formatCurrency(employerCompensation / employerCompensationDays)}</>} />
        <SmallResult name={'insurance'}
          title={<>Health insurance compensates <br /><strong>{insuranceCompensationDays} days</strong></>}
          amount={formatCurrency(insuranceCompensation)}
          allowance={<>Daily allowance<br />{formatCurrency(insuranceCompensation / insuranceCompensationDays)}</>} />
      </div>
      <Divider />
      <div className="total">
        <div className="title">
          Compensation total for {finalDaysOfSickLeave} days (net)
        </div>
        <div className="amount">
          {formatCurrency(totalCompensation)}
        </div>
      </div>
    </div >
  )
}

export default Calculator