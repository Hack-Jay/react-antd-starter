import React, { useState } from 'react'
import { Upload, Icon, Modal } from 'antd';

import './index.less'

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
function getBase_64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

const PhotoSetUp = props => {
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }
        ]
    })
    const [loading, setLoading] = useState(false)
    const [imageUrl, setimageUrl] = useState()

    let { previewVisible, previewImage, fileList } = state
    const handle_Change = ({ fileList }) =>
        setState(prevState => {
            return { ...prevState, fileList }
        })
    const uploadButton = (
        <div>
            <Icon type={loading ? 'loading' : 'plus'} />
        </div>
    )
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase_64(file.originFileObj)
        }
        setState(prevState => {
            return { ...prevState, previewImage: file.url || file.preview, previewVisible: true }
        })
    }
    const handleCancel = () =>
        setState(prevState => {
            return { ...prevState, previewVisible: false }
        })
    return (
        <div className='setup-photo'>
            <p className='photo-setup-title'>
                企业照片（最多10张）：
            </p>
            <div className='clearfix'>
                <Upload
                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                    listType='picture-card'
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handle_Change}
                >
                    {fileList.length >= 10 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        </div>
    )
}

export default PhotoSetUp