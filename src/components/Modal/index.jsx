import React from 'react';
import { Modal } from 'antd';

const App = props => {
    const { component, title, handleOk, visible, handleCancel, width, footer, confirmLoading, className } = props;
    return (
        <Modal
            centered
            maskClosable={false}
            title={title}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={width}
            footer={footer}
            destroyOnClose={true}
            confirmLoading={confirmLoading}
            className={className}
        >
            <div>
                {component}
            </div>
        </Modal>
    );
}

export default App;