import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {inc, desc, stepChanged} from './counterAction'

const Counter = props => (
  <div>
    <h1>{props.counter.number}</h1>
    <input value={props.counter.step} onChange={props.stepChanged} type="number"/>
    <br/>
    <button onClick={props.inc}>inc</button>
    <button onClick={props.desc}>desc</button>
  </div>
)

const mapStateToProps = state => ({ counter: state.counter })

const mapDispatchToProps = dispatch => bindActionCreators({inc, desc, stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)