import React, { useState } from 'react'
import {
    Form,
    Select,
    Input,
    Button,
    Upload,
    Icon,
    Row,
    Col,
    DatePicker,
    message
} from 'antd';
import './index.less'
const { Option } = Select;
const { RangePicker } = DatePicker;

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
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

const CertificationForm = props => {
    const [cities, setCities] = useState(cityData[provinceData[0]])
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0])
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const { onSubmit } = props
    const { getFieldDecorator } = props.form;

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

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
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
            span: 4
        },
        wrapperCol: {
            span: 20
        },
    };
    const uploadButton = (
        <div>
            <Icon type={loading ? 'loading' : 'plus'} />
        </div>
    );
    return (
        <Form {...formItemLayout} onSubmit={onSubmit} className='certification-form' hideRequiredMark={true}>
            <Form.Item label="企业类型" wrapperCol={{ span: 4 }}>
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

            <Form.Item label="营业执照">
                <Row>
                    <Col lg={{ span: 4 }} xxl={{ span: 3 }} >
                        {getFieldDecorator('businessUpload', {
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
                    <Col lg={{ span: 20 }} xxl={{ span: 21 }}>
                        <div className='upload-desc mt-20'>
                            <span className='pointer desc-click'>点击自动识别</span>
                            <span className='desc-info'>必填，仅支持png、jpeg、bmp格式图片，小于3M</span>
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item label="自动识别信息：请再次确认和营业执照一致，支持修改" labelCol={{ span: 10 }} colon={false}>
            </Form.Item>
            <Form.Item label="企业全称" wrapperCol={{ span: 4 }}>
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

            <Form.Item label="企业所在地">
                <Row>
                    <Col span={10}>
                        {getFieldDecorator("address[city]", {
                            initialValue: provinceData[0],
                            rules: [{ required: true, message: "请选择省份" }]
                        })(
                            <Select
                                // style={{ width: 260 }}
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
                                    // style={{ width: 260 }}
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

            <Form.Item colon={false} label=' ' wrapperCol={{ span: 8 }}>
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

            <Form.Item label="营业注册号" extra='18位统一社会信用代码'>
                {getFieldDecorator("registerNum", {
                    initialValue: 133232131231131,
                    rules: [{ required: true, message: "请输入正确的手机号" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入手机号"
                    />
                )}
            </Form.Item>

            <Form.Item label="RangePicker">
                {getFieldDecorator('range-picker', rangeConfig)(<RangePicker placeholder='dwq' />)}
            </Form.Item>

            <Form.Item label="企业管理人员">
                {getFieldDecorator("managerName", {
                    initialValue: 'XXX',
                    rules: [{ required: true, message: "必填" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入手机号"
                    />
                )}
            </Form.Item>
            <Form.Item label="联系电话">
                {getFieldDecorator("phone", {
                    initialValue: 13333333333,
                    rules: [{ required: true, message: "必填" }]
                })(
                    <Input
                        className='form-item-input'
                        placeholder="请输入手机号"
                    />
                )}
            </Form.Item>
            <Form.Item label="认证授权下载《认证授权书》" wrapperCol={{ span: 13}} labelCol={{span: 6}} colon={false}>
                <span className='download-link'>点击下载</span>
            </Form.Item>

            <Form.Item label="" colon={false} wrapperCol={{ span: 24, offset: 2 }} extra='按要求填写，并手写仅用于有传认证字样，并加盖公章照片所有信息需清晰可见，内容真实有效照片支持png、jpeg格式，大小不超过8M'>
                <Row className='flex-center'>
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> 上传文件
                                </Button>
                        </Upload>,
                    )}

                </Row>

            </Form.Item>

            <Form.Item wrapperCol={{ span: 13, offset: 2 }}>
                <Button className=''>取消</Button>
                <Button type="primary" htmlType="submit" className='ml-15 '>
                    提交认证
                 </Button>
                <span className='ml-15'>提交表示认同</span><span className='desc-link'>《有传服务协议》</span>
            </Form.Item>
        </Form>
    );
}

export default Form.create()(CertificationForm)