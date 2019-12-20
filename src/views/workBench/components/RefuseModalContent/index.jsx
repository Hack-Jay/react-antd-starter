import React, { useState } from 'react'
import { Input, Button } from 'antd'
import './index.less'

const { TextArea } = Input
const RefuseModalContent = props => {
    const [text, setText] = useState('')
    const { handleOk } = props
    return (
        <div className='refuse-content'>
            <p>拒绝原因</p>
            <TextArea  rows={5} placeholder="最多100字" value={text} onChange={(e) => setText(e.target.value)}/>
            <div className='pass-content-btn mt-20'>
                <Button type='primary' onClick={() => handleOk(text)}>确定</Button>
            </div>
        </div>
    )
}

export default RefuseModalContent