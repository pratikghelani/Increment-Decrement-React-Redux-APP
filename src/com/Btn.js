import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {incNumber} from "../redux/action/index";
import {decNumber} from "../redux/action/index";
export default function Btn() {
    const changeTheNumber = useSelector(state => state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    <div class="mt-5">
        <button type="button" onClick={() => dispatch(incNumber (2))} class="btn btn-primary btn-lg" >Remove ---</button>
        <button type="button" onClick={() => dispatch(decNumber (1))} class="btn btn-secondary btn-lg" >Add +++</button>
    </div>
  )
}
