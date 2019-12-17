import React from 'react'
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd'
import Test from './Test'
import Test1 from './Test1'

import './index.less'
export default hot(() => {
    return <div className='btn'>
        <Button type='primary'>Button</Button>
        <Test />
        <Test1 />
    </div>
})