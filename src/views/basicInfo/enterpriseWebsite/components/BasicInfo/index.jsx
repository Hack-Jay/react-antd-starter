import React from 'react'

import "./index.less";
const BasicInfo = props => {
    const { title } = props
    return (
        <div className='basic-info-container'>

            <div className='basic-info-item'>
                <span>企业地址：</span>
                <span>地理位置地址</span>
            </div>
            <div className='basic-info-item'>
                <span>企业电话：</span>
                <span>400-812-2525</span>
            </div>
            <div className='basic-info-item'>
                <span>企业类型：</span>
                <span>房地产</span>
            </div>
            <div className='basic-info-item'>
                <span>企业规模：</span>
                <span>1-20人</span>
            </div>
            <div className='basic-info-item'>
                <span>联系邮箱：</span>
                <span>tyl1652@sina.com</span>
            </div>
            <div className='basic-info-item'>
                <span>企业概要：</span>
                <span>万科集团在地产中国网举办的红榜评选活动中，连续三次上榜</span>
            </div>
            <div className='basic-info-item'>
                <span>简介内容：</span>
                <span>万科集团在地产中国网举办的红榜评选活动中，连续三次上榜。2016年8月，万科企业股份有限公司在"2016中国企业500强"中排名第86位。 [1]  2018年1月，公司董事会决定聘任祝九胜为公司总裁、首席执行官。 [2]  2018年5月9日，“2018中国品牌价值百强榜”发布，万科位列第40。 [3]  2018年7月19日，2018年《财富》世界500强排行榜发布，万科企业股份有限公司位列332位。 [4]  2018年12月5日，荣获第八届香港国际金融论坛暨中国证券金紫荆奖最具投资价值上市公司。 [5]  2018年12月，世界品牌实验室发布《2018世界品牌500强》榜单，万科排名第447。 [6]

            2019年7月，《财富》世界500强榜单公布，万科企业股份有限公司位列第254位。 [7]  2019年8月22日，2019中国民营企业服务业100强发布，万科企业股份有限公司排名第8。 [8]  2019年9月1日，2019中国服务业企业500强榜单在济南发布，万科企业股份有限公司排名第37位</span>
            </div>
        </div>
    )
}

export default BasicInfo