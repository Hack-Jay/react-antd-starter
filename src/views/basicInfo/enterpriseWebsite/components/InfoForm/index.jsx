import React, { useState } from 'react'
import { Form, Input, Select, Icon, Row, Col, Button, Upload } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './index.less'

const { Option } = Select;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const InfoForm = props => {
    const [cities, setCities] = useState(cityData[provinceData[0]])
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0])
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const { handleSubmit } = props
    const { getFieldDecorator } = props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media']

    const handleProvinceChange = value => {
        setCities(cityData[value])
        props.form.setFieldsValue({
            "address[juti]": cityData[value][0]
        });
        setSecondCity(cityData[value][0])
    };

    const onSecondCityChange = value => {
        setSecondCity(value)
        console.log('value', value)
    };

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl)
                setLoading(false)
            }
            );
        }
    };
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const  beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    
    const uploadButton = (
        <div>
            <Icon type={loading ? 'loading' : 'plus'} />
        </div>
    );
    return (
        <Form {...formItemLayout} onSubmit={handleSubmit} className='info-form' hideRequiredMark>
            <Form.Item label="企业类型">
                {getFieldDecorator('type', {
                    initialValue: 0,
                    rules: [{ required: true, message: 'Please select your country!' }],
                })(
                    <Select placeholder="Please select a country">
                        <Option value={0}>企业</Option>
                        <Option value={1}>政府</Option>
                    </Select>,
                )}
            </Form.Item>

            <Form.Item label="企业Logo" colon={false} extra='上传企业Logo'>
                <Row>
                    <Col span={4}>
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                    })(
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>,
                    )}

                    </Col>
                    <Col span={20} className='mt-20'>
                        <span className='desc-info'>必填，仅支持png、jpeg、bmp格式图片，小于3M</span>
                    </Col>
                   
                </Row>

            </Form.Item>
            <Form.Item label="企业全称" wrapperCol={{ span: 12 }}>
                {getFieldDecorator("fullName", {
                    initialValue: '有传科技',
                    rules: [{ required: true, message: "请输入企业全称" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入企业全称"
                    />
                )}
            </Form.Item>
            <Form.Item label="企业显示名称" wrapperCol={{ span: 12 }}>
                {getFieldDecorator("fullName", {
                    initialValue: '有传科技',
                    rules: [{ required: true, message: "请输入企业全称" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入企业显示名称"
                    />
                )}
            </Form.Item>

            <Form.Item label="企业所在地">
                <Row>
                    <Col span={10}>
                        {getFieldDecorator("address[city]", {
                            initialValue: provinceData[0],
                            rules: [{ required: true, message: "请选择省份" }]
                        })(
                            <Select
                                onChange={handleProvinceChange}
                            >
                                {provinceData.map(province => (
                                    <Option key={province} value={province}>{province}</Option>
                                ))}
                            </Select>
                        )}
                    </Col>
                    <Col span={10}>
                        <Form.Item label="" colon={false} className='inline-item'>
                            {getFieldDecorator("address[juti]", {
                                initialValue: secondCity,
                                rules: [{ required: true, message: "请选择城市" }]
                            })(
                                <Select
                                    onChange={onSecondCityChange}
                                >
                                    {cities.map(city => (
                                        <Option key={city}>{city}</Option>
                                    ))}
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item colon={false} label=' ' wrapperCol={{ span: 20 }}>
                {getFieldDecorator("address[dz]", {
                    initialValue: '高新区',
                    rules: [{ required: true, message: "请填写" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入地址"
                    />
                )}
            </Form.Item>
            <Form.Item label="行业规模">
                {getFieldDecorator('type', {
                    initialValue: 0,
                    rules: [{ required: true, message: 'Please select your country!' }],
                })(
                    <Select placeholder="Please select a country">
                        <Option value={0}>企业</Option>
                        <Option value={1}>政府</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="联系电话">
                {getFieldDecorator("managerName", {
                    initialValue: 'XXX',
                    rules: [{ required: true, message: "必填" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入手机号"
                    />
                )}
            </Form.Item> <Form.Item label="联系邮箱">
                {getFieldDecorator("managerName", {
                    initialValue: 'XXX',
                    rules: [{ required: true, message: "必填" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入手机号"
                    />
                )}
            </Form.Item> <Form.Item label="企业概要">
                {getFieldDecorator("managerName", {
                    initialValue: 'XXX',
                    rules: [{ required: true, message: "必填" }]
                })(
                    <Input.TextArea
                        rows={4}
                        className='form-item-input'
                        placeholder="请输入手机号"
                    />
                )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="简介内容">
                {getFieldDecorator('content', {
                    validateTrigger: 'onBlur',
                    rules: [{
                        required: true,
                        validator: (_, value, callback) => {
                            if (value.isEmpty()) {
                                callback('请输入正文内容')
                            } else {
                                callback()
                            }
                        }
                    }],
                })(
                    <BraftEditor
                        className="my-editor"
                        controls={controls}
                        placeholder="内容完善，更易获取客户，最大1000字"
                    />
                )}
            </Form.Item>
        </Form>
    )
}

export default Form.create()(InfoForm)