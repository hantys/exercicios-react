import React from 'react';
import { childrenWithData } from "../utils/reactUtils"
export default data => (
  <div>
    <h1>Família</h1>
    { childrenWithData(data.children, {...data}) }
  </div>
)