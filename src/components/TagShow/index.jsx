import React from 'react'

import './index.less'

const type = {
    0: 'tag-sucess',
    1: 'tag-error',
    2: 'tag-pending'
}
const tagInfo = {
    0: {
        tagClass: 'tag-sucess',
        title: '认证成功'
    },
    1: {
        tagClass: 'tag-error',
        title: '认证失败'
    },
    2: {
        tagClass: 'tag-pending',
        title: '待审核'
    },
}

const TagShow = props => {
    const { status } = props
    const tagClass = tagInfo[status]['tagClass']
    const tagTitle = tagInfo[status]['title']
    return (
        <span className='tag-container'>
            <span className={`tag-text ${tagClass}`}>{tagTitle}</span>
            <span className='tag-info ml-10'>{status === 2 ? '等待平台审核，预计需要1个工作日' : ''}</span>
        </span>
    )
}

export default  TagShow